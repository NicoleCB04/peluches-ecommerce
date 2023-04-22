import { useContext } from "react";
import { Link } from "react-router-dom";
import CarritoContext from "../../Context/CarritoContext";
import CardItemCarrito from "./CardItemCarrito";


export default function CardNavCarrito() {
    const { shoppingCart, handleDeleteShoppingCart } = useContext(CarritoContext)

    return (
        <>
            <li className="dropdown cart-nav dropdown-slide">
                <a href="#!" 
                    className="dropdown-toggle" 
                    data-toggle="dropdown" 
                    data-hover="dropdown">
                    <i className="tf-ion-android-cart"></i>Mi Carrito</a>
                <div className="dropdown-menu cart-dropdown">
                    {
                        shoppingCart.details.map((item) =>{
                           return <CardItemCarrito isNavCard = {true}
                                                    cartItem={item}
                                                    handleDeleteShoppingCart={handleDeleteShoppingCart}
                                                    key={item.idProducto}/>     
                        })          
                    }
                    {
                        shoppingCart.details.length ?
                        <>
                            <div className="cart-summary">
                                <span>Total</span>
                                <span className="total-price">S/ {shoppingCart.head.subTotal}</span>
                            </div>
                            <ul className="text-center cart-buttons">
                                <li><Link to={'/carrito'} className="btn btn-small">Ver Carrito</Link></li>
                                &nbsp;                                                                
                                <li>
                                    <Link to={'/pagos'} className="btn btn-small btn-solid-border">Comprar</Link>
                                </li>
                            </ul>                        
                        </> :  <h4>Sin productos en el carrito</h4>
                    }
                </div>
            </li>
        </>
    )
}