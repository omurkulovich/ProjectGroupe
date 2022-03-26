import React, { useReducer } from "react";
import axios from "axios";

export const contextProduct = React.createContext();
const API = "http://localhost:8000/products";





const INIT_STATE = {
  products: [],
  oneProduct:null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers['x-total-count'] / 2)
      };
      case "GET_ONE_PRODUCT":
          return {...state, oneProduct:action.payload.data}
    default:
      return state;
  }
};

const ContextProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProduct() {
    let result = await axios.get(API+ window.location.search);
    let action = {
      type: "GET_PRODUCT",
      payload: result,
    };
    dispatch(action);
  }
  async function postProduct(newObj) {
    await axios.post(API, newObj);
    getProduct();
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProduct();
  }
  async function getEditProduct(id){
      let res=await axios(`${API}/${id}`)
      dispatch({
          type:"GET_ONE_PRODUCT",
          payload:res,
      })
  }
  async function upDateProduct(id, editedProduct){
      await axios.patch(`${API}/${id}`, editedProduct)
      getProduct()
  }



  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        pages:state.pages,
        oneProduct:state.oneProduct,
        postProduct,
        getProduct,
        deleteProduct,
        getEditProduct,
        upDateProduct
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ContextProductProvider;