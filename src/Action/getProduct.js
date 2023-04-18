import axios from 'axios'

import {
    GET_PRODUCT
} from './types'



export const getProduct = () => async dispatch => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=10')

    dispatch({
        type: GET_PRODUCT,
        payload: response.data
    })
}