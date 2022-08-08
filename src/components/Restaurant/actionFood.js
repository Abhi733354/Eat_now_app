import { Constants } from "../../redux/constants";

export const addFoodToCart = (foodItem) => {
    return{
        type: Constants.ADD_FOOD_TO_CART,
        payload: foodItem
    }
}

export const addRestDetails = (restDetails) => {
    return{
        type: Constants.ADD_REST_DETAILS,
        payload: restDetails
    }
}

export const emptyFoodFromCart = () => {
    return{
        type: Constants.EMPTY_FOOD_FROM_CART
    }
}