import React, { createContext, useState } from "react";

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])
    function addbasket(item) {
       
    }
    
  return <BasketContext.Provider>{children}</BasketContext.Provider>;
};

export default BasketProvider;
