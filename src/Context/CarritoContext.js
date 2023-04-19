import { createContext, useState } from "react";

const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState({ head:{}, details:[] });
    const [productDetails, setProductDetails ] = useState({
        idProducto: 0, 
        nombreProducto: '', 
        linkImagen: '', 
        precioVenta: 0, 
        descripcion: ''
    });

    const handleAddShoppingCart = (shoppingCartHead, itemShoppingCart) => {

        console.log({shoppingCartHead});

        itemShoppingCart.subTotal = itemShoppingCart.precio * itemShoppingCart.cantidad;
        itemShoppingCart.total = itemShoppingCart.enPromocion ? 
                                            itemShoppingCart.subTotal - itemShoppingCart.descuento :
                                            itemShoppingCart.subTotal;
        shoppingCart.details.push(itemShoppingCart);

        const initialValue = 0;        
        const shoppingCartDescuento = shoppingCart.details.reduce((accumulator, detail) => 
                                                accumulator + detail.descuento, initialValue); 
        const shoppingCartSubTotal = shoppingCart.details.reduce((accumulator, detail) => 
                                                accumulator + detail.subTotal, initialValue);   
        const shoppingCartIgv = (shoppingCartSubTotal * 18) / 100;
        const shoppingCartTotal = (shoppingCartSubTotal + shoppingCartIgv) + shoppingCartHead.cargo                                                                                           

        var shoCart = { 
            head: 
            {
                igv: shoppingCartIgv,
                descuento: shoppingCartDescuento,
                cargo: shoppingCartHead.cargo,
                subTotal: shoppingCartSubTotal,
                asociadoApedido: false,
                activo: true,
                total: shoppingCartTotal
            }, 
            details : shoppingCart.details
        }
          
        setShoppingCart(shoCart);     
    }

    const handleDeleteShoppingCart = (idProducto) => {
        console.log(idProducto);
        const wantedProduct = (product) => product.idProducto === idProducto;
        
        let indexFound = shoppingCart.details.findIndex(wantedProduct);
        console.log(indexFound)

        shoppingCart.details.splice(indexFound, 1);

        var shoCart = { head:{}, details : shoppingCart.details}

        setShoppingCart(shoCart); 
    }

    const handleModaProductDetails = (product) => {
        setProductDetails(product);
    }

    const data = {shoppingCart, productDetails, handleAddShoppingCart, handleDeleteShoppingCart, handleModaProductDetails};

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>;
}

export {CarritoProvider};
export default CarritoContext;