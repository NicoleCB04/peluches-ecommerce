import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const CarritoContext = createContext();
// const shoppingCartTemplate = {
//     head:{}, 
//     details:[]
// }

const CarritoProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState({ head:{}, details:[] });
    const [productDetails, setProductDetails ] = useState({
        idProducto: 0, 
        nombreProducto: '', 
        linkImagen: '', 
        precioVenta: 0, 
        descripcion: ''
    });
    // const navigate = useNavigate();

    const handleShoppingCart = (itemShoppingCart) => {
        console.log(itemShoppingCart);

        shoppingCart.details.push(itemShoppingCart);

        var shoCart = { head:{}, details : shoppingCart.details}
          
        setShoppingCart(shoCart);

        console.log(shoCart);        

        // navigate('/carrito');
    }

    const handleModaProductDetails = (product) => {
        setProductDetails(product);
    }

    const data = {shoppingCart, productDetails, handleShoppingCart, handleModaProductDetails};

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>;
}

export {CarritoProvider};
export default CarritoContext;