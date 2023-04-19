import { useContext } from "react"
import CarritoContext from "../../Context/CarritoContext"

export default function CarritoTable({shoppingCartItems}){    
    const { handleDeleteShoppingCart } = useContext(CarritoContext)

    return(
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
                                            <a href="#!">{item.descripcionProducto}</a>
                                        </div>
                                    </td>
                                    <td className="">S/ {item.precio}</td>
                                    <td className="">
                                        <a className="product-remove" 
                                            href="#!" 
                                            onClick={() => handleDeleteShoppingCart(item.idProducto)}>Eliminar</a>
                                    </td>
                                </tr>                        
                    })
                }
            </tbody>
        </table>      
    )
}