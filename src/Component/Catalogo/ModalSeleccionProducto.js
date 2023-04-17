import { useContext } from "react";
import CarritoContext from "../../Context/CarritoContext";
import { Link } from "react-router-dom";

export default function ModalSeleccionProducto(){
    const { productDetails }  = useContext(CarritoContext)

    const closeModal = () => {
        // let modalClosed = document.getElementById('product-modal');
        // modalClosed.modal('hide');
    }

    return (
        <div className="modal product-modal fade" id="product-modal">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tf-ion-close"></i>
            </button>
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <div className="modal-image">
                                    <img className="img-responsive" src={productDetails.linkImagen}
                                        alt="product-img" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="product-short-details">
                                    <h2 className="product-title">{productDetails.nombreProducto}</h2>
                                    <p className="product-price">S/ {productDetails.precioVenta}</p>
                                    <p className="product-short-description">
                                        {productDetails.descripcion}
                                    </p>
                                    <a href="/Ecommerce/CarroCompras" className="btn btn-main">Agregar al Carrito</a>
                                    <Link to={`/detalleProducto/${productDetails.idProducto}`} 
                                            onClick={() => closeModal()} 
                                            className="btn btn-transparent">Ver detalles del Producto</Link>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    );
}