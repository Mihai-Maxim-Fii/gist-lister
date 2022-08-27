import Entry from "./Entry"
import { useSelector } from "react-redux/es/hooks/useSelector"

const Entries = () =>{

    const all_gists = useSelector((state)=>state.gists_reducer.gists)
    
    const {isLoading, isError, msg} = useSelector( (state)=>state.request_status_reducer)

    return (
        <div className=" flex flex-col  gap-2">
            {!isLoading && !isError &&
            all_gists.map( (ent=>{
                return <Entry key={ent.id} id={ent.id} description={ent.description} languages={ent.languages} file_names={ent.file_names} forks={ent.forks} >

                </Entry>
            }))
            }
            {(isLoading||isError)&&
            <div className=" w-full  h-12 bg-blue-500 flex justify-center items-center text-white">
            <p>
                {msg}</p>
            </div>
            }
            

        </div>
    )
}

export default Entries