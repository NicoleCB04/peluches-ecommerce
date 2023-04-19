import { useContext } from "react"
import CarritoContext from "../../Context/CarritoContext"
import CardItemCarrito from "../Carrito/CardItemCarrito"

export default function ResumenPedido() {
    const { shoppingCart, handleDeleteShoppingCart } = useContext(CarritoContext)

    return (
        <>
            {
                shoppingCart.details.length ?
                    <div className="product-checkout-details">
                        <div className="block">
                            <h4 className="widget-title">Resumen del Pedido</h4>
                            {
                                shoppingCart.details.map((item) => {
                                    return <CardItemCarrito isNavCard={false}
                                        cartItem={item}
                                        handleDeleteShoppingCart={handleDeleteShoppingCart}
                                        key={item.idProducto} />
                                })
                            }
                            <div className="discount-code">
                                <p>Tiene descuento? <a data-toggle="modal" data-target="#coupon-modal" href="#!">ingréselo aquí </a></p>
                            </div>
                            <ul className="summary-prices">
                                <li>
                                    <span>Subtotal:</span>
                                    <span className="price">S/ {shoppingCart.head.subTotal}</span>
                                </li>
                                <li>
                                    <span>Descuento:</span>
                                    <span className="price">S/ {shoppingCart.head.descuento}</span>
                                </li>
                                <li>
                                    <span>Igv:</span>
                                    <span className="price">S/ {shoppingCart.head.igv}</span>
                                </li>
                                <li>
                                    <span>Envio:</span>
                                    {
                                        shoppingCart.head.cargo === 0 ? <span>Gratis</span> :
                                            <span>S/ {shoppingCart.head.cargo}</span>
                                    }
                                </li>
                            </ul>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>S/ {shoppingCart.head.total}</span>
                            </div>
                            <div className="verified-icon">
                                <img src="https://localhost:44335/img/pagos/verified.png" />
                            </div>
                        </div>
                    </div> :  <h4>Sin productos en el carrito</h4>
            }

        </>
    )
}