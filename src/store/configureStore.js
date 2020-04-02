import {createStore, combineReducers} from 'redux'

const configureStore=()=>{
    const store= createStore(combineReducers({
        email:emailReducer
    }))
    return store
}
export default configureStore
