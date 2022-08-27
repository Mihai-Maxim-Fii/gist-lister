const initial_state = {
    isLoading:false,
    isError:false,
    msg:""
}
const request_status_reducer = (state=initial_state, action) =>{
    if(action.type==="SET_LOADING"){
        return {
         isLoading:true, isError:false, msg:action.payload.msg
        }
    }
    if(action.type==="END_LOADING"){
        return {
            ...state,isLoading:false, msg:action.payload.msg
        }
    }
    if(action.type==="SET_ERROR"){
        return{
            isLoading:false,isError:true, msg:action.payload.msg
        }
    }


    return state
    
}


export default request_status_reducer
