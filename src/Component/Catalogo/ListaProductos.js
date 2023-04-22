import { useContext } from "react";
import CardProducto from "../Producto/CardProducto";
// import ModalSeleccionProducto from "./ModalSeleccionProducto";
import CarritoContext from "../../Context/CarritoContext";
import Modal from "../Modals/Modal";
import { useModal } from "../../Hooks/useModal";
import { Link } from "react-router-dom";

export default function ListaProductos({productsData, columnWidth, numberElements}) {
    const { productDetails, handleModaProductDetails, handleAddShoppingCart }  = useContext(CarritoContext) 
    const [isOpenModalProductDetail, openModalProductDetail, closeModalProductDetail] = useModal(false); 

    const viewModalProduct = (productView) => {
        handleModaProductDetails(productView);        
        openModalProductDetail();
    }

    return (
        <div className="row">
            {
                productsData.map((producto, indice) => {
                    if(numberElements === "all"){
                        return <CardProducto idProducto={producto.idProducto}
                                            nombre={producto.nombreProducto}
                                            descripcion={producto.descripcion }
                                            urlImagen={producto.urlImagen} 
                                            precio={producto.precioVenta} 
                                            columnas={columnWidth}
                                            viewModalProduct={viewModalProduct}
                                            key={producto.idProducto}/>                           
                    }else{
                        if((indice + 1) <= numberElements){
                            return <CardProducto idProducto={producto.idProducto}
                                                nombre={producto.nombreProducto}
                                                descripcion={producto.descripcion }
                                                urlImagen={producto.urlImagen} 
                                                precio={producto.precioVenta} 
                                                columnas={columnWidth}
                                                viewModalProduct={viewModalProduct}                                                
                                                key={producto.idProducto}/>   
                        } 
                    }                                                                            
                })
            }

            <Modal isOpen={isOpenModalProductDetail} closeModal={closeModalProductDetail}>
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
                            <Link to={'/carrito'} 
                                    className="btn btn-main" 
                                    onClick={() => handleAddShoppingCart({cargo: 0}, {                                           
                                        idProducto: productDetails.idProducto,
                                        descripcionProducto: productDetails.nombreProducto,
                                        urlImagen: productDetails.linkImagen,
                                        precio: productDetails.precioVenta,
                                        cantidad: 1,
                                        enPromocion: false,
                                        descuento: 0,
                                        subTotal:0,
                                        total: 0,
                                        activo: true        
                                    })}>
                                        Agregar al Carrito
                            </Link>                            
                            <Link to={`/detalleProducto/${productDetails.idProducto}`}                                
                                className="btn btn-transparent">Ver detalles del Producto</Link>
                        </div>
                    </div>
                </div>                
            </Modal>
            {/* <ModalSeleccionProducto/> */}
        </div>
    );
}