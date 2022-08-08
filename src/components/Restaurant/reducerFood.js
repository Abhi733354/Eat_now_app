import { Constants } from "../../redux/constants";

const initialState = {
    foodCart: [],
    restDetails: {}
};

export const reducerFood = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case Constants.ADD_FOOD_TO_CART: 
            let temp = [...state.foodCart, payload];
            return {...state, foodCart: temp}
        case Constants.ADD_REST_DETAILS:
            return {...state, restDetails: payload}
        case Constants.EMPTY_FOOD_FROM_CART:
            return {...state, foodCart: []}
        default: 
            return state
    }
}