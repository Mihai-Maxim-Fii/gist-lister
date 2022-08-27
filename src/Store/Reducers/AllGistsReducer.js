const initial_state = {
    gists:[]
}
const gists_reducer = (state=initial_state, action) =>{
    if(action.type==="UPDATE_GISTS"){
        return {gists:action.payload.gists}
    }

    return state
    
}


export default gists_reducer

