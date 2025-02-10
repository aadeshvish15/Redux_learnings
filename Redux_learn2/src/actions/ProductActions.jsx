import axios from "axios";
import { getProducts } from "../reducer/ProductReducer";


export const asyncgetproducts = () => async (dispatch, getState) => {
    // console.log(getState());
    
    try {
        const response = await axios.get("https://fakestoreapi.com/products");

        // console.log(response.data);
        
        dispatch(getProducts(response.data));
    } catch (error) {
        console.log(error);   
    }
}