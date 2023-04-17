import { useContext } from "react";
import CarritoPage from "../../Component/Carrito/CarritoPage";
import CarritoContext from "../../Context/CarritoContext";

export default function PaginaCarroCompras(){
    const { shoppingCart, handleShoppingCart }  = useContext(CarritoContext)

    return(
        <>
            <CarritoPage shoppingCartItems={shoppingCart.details}/>
        </>
    )
}