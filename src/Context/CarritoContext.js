import { createContext, useState } from "react";

const CarritoContext = createContext();
const shoppingCartTemplate = {
    head:{}, 
    details:[]
}

const CarritoProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState(shoppingCartTemplate);

    const handleShoppingCart = (itemShoppingCart) => {
        console.log(itemShoppingCart);

        shoppingCartTemplate.details.push(itemShoppingCart);
        setShoppingCart({shoppingCartTemplate});
    }

    const data = {shoppingCart, handleShoppingCart};

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>;
}

export {CarritoProvider};
export default CarritoContext;