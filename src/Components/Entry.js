import { useSelector } from "react-redux/es/hooks/useSelector"

const Entry = (props) =>{

    const all_gists = useSelector(state=>state.gists_reducer.gists)

    const show_raw_file = (file_name) =>{
        let gist = all_gists.find(gst=>gst.id===props.id)

        let file_link = gist.files.find(file=>file.filename===file_name).raw_url

        window.open(file_link)

    }

    
    return (

    <div className={` w-full h-full grid grid-cols-12 p-4  hover:bg-white hover:text-black hover:cursor-pointer text-gray-600  `} >
    <div className=" col-span-4 overflow-auto px-2">
        {props.description===""?"-none-":props.description}
    </div>
    <div className=" col-span-3 flex flex-wrap gap-2 w-full  px-2 ">

        {props.file_names.length===0?"-none-":props.file_names.map( (name,index)=>{
            return <p className={"break-all hover:text-green-500 "} onClick={(event)=>{
                show_raw_file(event.target.innerHTML)
            }
            } key={index}>{name}</p>
        })}
    </div>
    <div className=" col-span-3 flex flex-wrap gap-2 overflow-auto  px-2">
    {props.languages.map( (language,index)=>{
            return <p key={index}>{language}</p>
        })}
    </div>
    <div className="col-span-2 flex flex-wrap gap-2 overflow-auto  px-2">
    {
      props.forks.length!==0?props.forks.map( (fork,index)=>{
            return <p key={index}>{fork}</p>
        }):"-none-"}
    </div>

    </div>
    )
}

export default Entry