import {useEffect} from "react"
import {useState} from "react"
import useGetGistByUsername from "./RequestHooks/useGetGistByUsername"
import GistsActions from "../Store/Actions/GistsActions"
import {useDispatch} from "react-redux/es/exports"
const Searchbar = () => {


    const {get_gist_by_username} = useGetGistByUsername()


    const [user_input, set_user_input] = useState("")

    const dispatch = useDispatch()

    const request_data = () => {
        if (user_input.length !== 0) {
            get_gist_by_username(user_input, (data) => {
                dispatch(GistsActions.update_gists(data))

            })
        } else {
            alert("Name can't be empty!")
        }
    }


    useEffect(() => { /*
     
        api has call limit...

        const timeout_function = setTimeout(() => {
            request_data()
        }, 500);

        return () =>{
            clearTimeout(timeout_function)
        }
        */
    }, [user_input])


    return (
        <div className="w-full h-full p-2 bg-gray-400 rounded-b-md flex justify-between pl-2 gap-2">
            <input type="text"
                onChange={
                    (element) => set_user_input(element.target.value)
                }
                className="w-full h-full p-2 rounded-sm text-center"></input>
            <div className=" w-32 flex gap-2">
                <button className=" w-full text-black bg-white px-4 hover:bg-green-500 hover:text-white"
                    onClick={request_data}>
                    Search
                </button>
            </div>

        </div>
    )
}

export default Searchbar
