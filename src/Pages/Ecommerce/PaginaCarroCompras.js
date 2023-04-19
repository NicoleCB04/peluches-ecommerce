import { useContext } from "react";
import TableCarrito from "../../Component/Carrito/TableCarrito";
import CarritoContext from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";

export default function PaginaCarroCompras(){
    const { shoppingCart }  = useContext(CarritoContext)

    return(
        <>
            <CabeceraPagina currentMenu="Carro de Compras">
                <li><Link to={'/catalogo'}>Productos</Link></li>              
            </CabeceraPagina>

            <div className="page-wrapper">
                <div className="cart shopping">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="block">
                                    <div className="product-list">
                                        <form method="post">
                                            <TableCarrito shoppingCartItems={shoppingCart.details}/>
                                            <Link to={'/pagos'} className="btn btn-main pull-right">Comprar</Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}