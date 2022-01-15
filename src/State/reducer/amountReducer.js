const reducer = (state=0, action)=>{ //reducer will initiate that action which will be given by action
    if (action.type==='deposit'){
        return state + action.payload
    }
    else if (action.type==='withdraw'){
        return state - action.payload
    }
    else {
        return state
    }
} 
export default reducer;