// import { useContext } from "react";
// import CarritoContext from "../../Context/CarritoContext";

// import imagProducto from '../../Assets/Images/shop/products/product-1.jpg'

export default function CardProducto({idProducto, nombre, descripcion, urlImagen, precio, columnas, viewModalProduct}) {
    // const { handleModaProductDetails }  = useContext(CarritoContext)    
   
    return (
        <div className={`col-md-${columnas}`}>
            <div className="product-item">
                <div className="product-thumb">
                <span className="bage">En Stock</span>
                <img className="img-responsive" src={urlImagen} alt="product-img" />
                    <div className="preview-meta">
                        <ul>
                            <li>
                                <span  onClick={() => 
                                            viewModalProduct(
                                            {
                                                idProducto: idProducto, 
                                                nombreProducto: nombre, 
                                                linkImagen: urlImagen, 
                                                precioVenta: precio, 
                                                descripcion: descripcion
                                            })}>
                                    <i className="tf-ion-ios-search-strong"></i>
                                </span>
                            </li>
                            <li>
                                <a href="#!"><i className="tf-ion-ios-heart"></i></a>
                            </li>
                            <li>
                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-content">
                    <h4><a href="product-single.html">{nombre}</a></h4>
                    <p className="price">S/ {precio}</p>
                </div>
            </div>
        </div>

    );
}