const update_gists = (gists)=>{
    return (dispatch, getState)=>{
        
        dispatch({
            type:"UPDATE_GISTS",
            payload:{
            gists
        }
        })
    }
}




export default {update_gists}