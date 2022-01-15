import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {actionCreators}  from './State/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
    const dispatch = useDispatch()
    const amount = useSelector(state => state.amount)
    // const {actionCreators} = bindActionCreators(actionCreators, dispatch); //Method: 1
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch); //Method: 2
    return (
        // //This is the implementation without bindActionCreators
        // <div className='container mt-5'>
        //         <h2>Deposit/Withdraw Money App</h2>
        //         <h3 className='my-3'>Your Balance: ${amount} </h3>
        //         <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}><span>-</span></button>
        //          <b>Update your Balance </b> 
        //         <button className='btn btn-primary' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}><span>+</span></button>

        // </div>

             //This is the implementation with bindActionCreators
             <div className='container mt-5'>
             <h2>Deposit/Withdraw Money App</h2>
             <h3 className='my-3'>Your Balance: ${amount} </h3>
             <button className='btn btn-primary' onClick={()=>{withdrawMoney(100)}}><span>-</span></button>
              <b>Update your Balance </b> 
             <button className='btn btn-primary' onClick={()=>{depositMoney(100)}}><span>+</span></button>

     </div>
    )
}

export default Shop
