    import { Constants } from "../../redux/constants";

    const initialObject = {};

    export const reducerLogin = (state = initialObject, action) => {
        const {type, payload} = action;

        switch(type) {
            case Constants.SET_LOGIN_DATA:
                console.log('----------login reducer hit-----------------')
                return {
                    ...state, loginDataRedux: payload
                }
            case Constants.SET_LOGOUT:
                console.log('----------logout reducer hit-----------------')
                // delete state['loginDataRedux'];
                // console.log(state);
                return initialObject;
            case Constants.SET_URL:
                console.log('--------------set url in reducer-------------');
                return {
                    ...state, currentUrl: payload
                }
            default:
                return state
        }
    }