import React, { useContext, useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer,{ initialState } from '../context/reducer';
import data from '../data/Data';


export const ProductContext = createContext();

export const totalPrice = (products) =>
    products.reduce((item, amount) => amount.price + item,0);

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const [cardData, setCardData] = useState(data);
    return (
        <ProductContext.Provider value={{
            productState : state,
            productDispatch : dispatch,
            totalPrice,
            cardData, 
            setCardData
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default Context;

export const ProductState = () => useContext(ProductContext);

