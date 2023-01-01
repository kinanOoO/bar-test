// ** Redux Imports
import { combineReducers } from 'redux'
//import _ from "lodash"
import { CocktailReducer } from './index'

// ** Merge Reducers
const rootReducer = combineReducers({
    CocktailReducer
})

export default rootReducer
