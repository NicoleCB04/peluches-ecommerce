
export default function CardItemCarrito({isNavCard, cartItem, handleDeleteShoppingCart}) {
    return (
        <div className={`media ${!isNavCard && "product-card"}`}>
            <a className="pull-left" href="#!">
                <img className="media-object" src={cartItem.urlImagen} alt="image" />
            </a>
            {
                isNavCard ? 
                    <>
                        <div className="media-body">
                            <h4 className="media-heading"><a href="#!">{cartItem.descripcionProducto}</a></h4>
                            <div className="cart-price">
                                <span>{cartItem.cantidad} x</span>
                                <span> {cartItem.precio}</span>
                            </div>
                            <h5><strong>S/ {cartItem.total}</strong></h5>
                        </div> 
                        <a href="#!" 
                            onClick={() => handleDeleteShoppingCart(cartItem.idProducto)} 
                            className="remove">
                                <i className="tf-ion-close"></i>
                        </a>                    
                    </>               
                    :
                    <div className="media-body">
                        <h4 className="media-heading"><a href="product-single.html">{cartItem.descripcionProducto}</a></h4>
                        <p className="price">{cartItem.cantidad} x S/ {cartItem.precio}</p>
                        <span className="remove" onClick={() => handleDeleteShoppingCart(cartItem.idProducto)}>
                            Eliminar
                        </span>
                    </div>                  
            }
            
        </div>
    )
}