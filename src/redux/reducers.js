import { combineReducers } from 'redux';
import { reducerLogin } from '../components/user/reducerLogin';
import { reducerFood } from '../components/Restaurant/reducerFood';
const reducers = combineReducers({
    login: reducerLogin,
    cart: reducerFood,
})

export default reducers;