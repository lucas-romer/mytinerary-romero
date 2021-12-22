import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer';
import authReducer from './authReducer'
import activityReducer from './activityReducer'

const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    authReducer,
    activityReducer
})

export default mainReducer

