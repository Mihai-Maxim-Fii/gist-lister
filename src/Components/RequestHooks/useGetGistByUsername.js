import axios from "axios"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux/es/hooks/useDispatch";

const config = {
    headers: {
        Authorization: `token ${
            process.env.REACT_APP_GIT_API_TOKEN
        }`

    }
};


const construct_last_forks = async (forks_url) => {


    let forks = await axios.get(forks_url, config)


    let has_next = forks.headers.link


    if (has_next !== undefined) {

        let last_page = parseInt(has_next.split(", ")[1].split("page=")[1].split(">")[0])

        forks = await axios.get(forks_url + `?page=${last_page}`, config)

    }

    forks = forks.data


    forks = forks.slice(forks.length - 3, forks.length)


    let last_three_forks = []

    forks.forEach(fork => {
        last_three_forks.push(fork.owner.login)
    })
    last_three_forks = last_three_forks.reverse()

    return last_three_forks


}


const useGetGistByUsername = () => {

    const dispatch = useDispatch()

    const construct_gist_data = async (data) => { // tldr async requests don't work with forEach
        let all_gist_data = []

        for (let i = 0; i < data.length; i++) {
            let current_data = data[i]

            let languages = new Set()

            let file_names_array = []

            // owner + description
            let owner = current_data.owner.login
            let description = current_data.description


            // files
            let file_names = Object.keys(current_data.files)
            let file_objects = []


            file_names.forEach(name => {
                file_objects.push(current_data.files[name])
                file_names_array.push(current_data.files[name].filename)
                languages.add(current_data.files[name].language)
            })


            // last 3 forks
            let last_forks = await construct_last_forks(current_data.forks_url)

            all_gist_data.push({
                id: current_data.id,
                owner,
                description,
                file_names: file_names_array,
                languages: Array.from(languages),
                files: file_objects,
                forks: last_forks
            })


        }
        return all_gist_data


    }

    const get_gist_by_username = async (username, callback) => {

        dispatch({
            type: "SET_LOADING",
            payload: {
                msg: `Fetching gists of ${username} ... `
            }
        })
        try {

            let data = await axios.get(`https://api.github.com/users/${username}/gists?per_page=100`, config)

            let has_next = data.headers.link

            let total_data = [... data.data]


            if (has_next !== undefined) {
                let last_page = parseInt(has_next.split(", ")[1].split("&page=")[1].split(">")[0])
            

                for (let k = 2; k < last_page; k++) {
                    let data = await axios.get(`https://api.github.com/users/${username}/gists?per_page=100&page=${k}`, config)
                    total_data = [
                        ... total_data,
                        ...data.data
                    ]

               

                }

            }


            let parsed_gist_data = await construct_gist_data(total_data)

            callback(parsed_gist_data)

            dispatch({
                type: "END_LOADING",
                payload: {
                    msg: ""
                }
            })

        } catch (error) {
            dispatch({
                type: "SET_ERROR",
                payload: {
                    msg: error
                }
            })

        }


    }

    return {get_gist_by_username}

}

export default useGetGistByUsername
