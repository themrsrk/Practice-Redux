import { combineReducers } from "redux";
import amountReducer from './amountReducer'


const reducers = combineReducers({ //combine reducer combines your all reducers as single reducer as object
    amount : amountReducer
})
export default reducers