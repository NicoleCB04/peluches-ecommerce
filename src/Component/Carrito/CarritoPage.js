import { useContext } from "react";
import CarritoContext from "../../Context/CarritoContext"

export default function CarritoPage({products}){
    const {shoppingCart, handleShoppingCart}  = useContext(CarritoContext)
    console.log(shoppingCart)
    return(
        <div className="product-list">
            <form method="post">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="">Producto</th>
                            <th className="">Precio</th>
                            <th className="">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shoppingCart.details.map((cart) => {
                                <tr className="">
                                    <td className="">
                                        <div className="product-info">
                                            <img width="80" src={cart.urlImagen} alt="" />
                                            <a href="#!">{cart.nombreProducto}</a>
                                        </div>
                                    </td>
                                    <td className="">S/ {cart.precioVenta}</td>
                                    <td className="">
                                        <a className="product-remove" href="#!">Eliminar</a>
                                    </td>
                                </tr>                        
                            })
                        }
                    </tbody>
                </table>
                <a href="checkout.html" className="btn btn-main pull-right">Comprar</a>
            </form>
        </div>        
    )
}