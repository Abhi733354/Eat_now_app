import { Constants } from "../../redux/constants";

export const setLoginData = (loginData) => {
    console.log('----------login action hit-----------------')
    return {
        type: Constants.SET_LOGIN_DATA,
        payload: loginData,
    }
}

export const setLogout = () => {
    return{
        type: Constants.SET_LOGOUT
    }
}

export const setUrl = (url) => {
    return{
        type: Constants.SET_URL,
        payload: url
    }
}