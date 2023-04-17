

export default function CarritoPage({shoppingCartItems}){    

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
                            shoppingCartItems.map((item) => {
                                return <tr className="" key={item.idProducto}>
                                            <td className="">
                                                <div className="product-info">
                                                    <img width="80" src={item.urlImagen} alt="" />
                                                    <a href="#!">{item.nombreProducto}</a>
                                                </div>
                                            </td>
                                            <td className="">S/ {item.precioVenta}</td>
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