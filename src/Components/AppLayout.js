import Entries from "./Entries"
import Searchbar from "./SearchBar"
import TableHeader from "./TableHeader"

const AppLayout = ()=>{

    return (
        <div className=" w-full h-screen flex flex-col justify-center items-center">
        <div className="w-3/4 h-3/4 bg-gray-400 flex flex-col justify-between">
        <div className="w-full  flex justify-center"><TableHeader></TableHeader></div>
        <div className="w-full h-full bg-orange-300 overflow-y-auto ">
          <Entries></Entries>
        </div>
            

        </div>
        <div className="w-3/4 h-12 flex justify-center">
          <Searchbar></Searchbar>
        </div>

    </div>)

}

export default AppLayout