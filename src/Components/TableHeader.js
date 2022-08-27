const TableHeader = () =>{
    return <div className=" w-full h-full grid grid-cols-12 p-4 text-white items-start">
        <div className=" col-span-4">
            Description
        </div>
        <div className=" col-span-3">
            Files
        </div>
        <div className=" col-span-3">
            Languages
        </div>
        <div className="col-span-2">
            Last Forks
        </div>

    </div>
}

export default TableHeader