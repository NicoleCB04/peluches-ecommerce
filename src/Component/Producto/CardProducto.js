import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
// import imagProducto from '../../Assets/Images/shop/products/product-1.jpg'

class CardProducto extends Component{

    modalViewProductDetails(idProducto, nombreProducto, linkImagen, precioVenta, descripcion) {

        const root = ReactDOM.createRoot(document.getElementById('modalProductDetails'));
        root.render(
            <>
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <div className="modal-image">
                        <img className="img-responsive" src={linkImagen}
                            alt="product-img" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="product-short-details">
                        <h2 className="product-title">{nombreProducto}</h2>
                        <p className="product-price">S/ {precioVenta}</p>
                        <p className="product-short-description">
                            {descripcion}
                        </p>
                        <a href="/Ecommerce/CarroCompras" className="btn btn-main">Agregar al Carrito</a>
                        <a href={`/detalleProducto/${idProducto}`} className="btn btn-transparent">Ver detalles del Producto</a>
                    </div>
                </div>
        </>);
    }    

    render() {
        return (
            <div className={`col-md-${this.props.columnas}`}>
                <div className="product-item">
                    <div className="product-thumb">
                    <span className="bage">En Stock</span>
                    <img className="img-responsive" src={this.props.urlImagen} alt="product-img" />
                        <div className="preview-meta">
                            <ul>
                                <li>
                                    <span data-toggle="modal" data-target="#product-modal" onClick={() => this.modalViewProductDetails(this.props.idProducto, 
                                                                        this.props.nombre, this.props.urlImagen, this.props.precio, this.props.descripcion)}>
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
                        <h4><a href="product-single.html">{this.props.nombre}</a></h4>
                        <p className="price">S/ {this.props.precio}</p>
                    </div>
                </div>
            </div>

        );
    }
}


export default CardProducto;