import {createStore,combineReducers,applyMiddleware} from "redux"
import num from "./num/num.reduce"
import res from "./res/res.reduce"
import thunk from "redux-thunk"
const reduce=combineReducers({
        num,
        res
})
const store=createStore(reduce,applyMiddleware(thunk))
export default store