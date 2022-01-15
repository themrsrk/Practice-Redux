export const depositMoney = (amount)=>{ //this is deposit action which will initiate by reducer on behalf of action, basicallly its kind of schema which tell us that how the action should be perform, what is its type etc
    return (dispatch) =>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}