import { GET_PRODUCT } from "../Action/types";

const initialState = {
    products : [],
    cart: []
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state; 
    }
}