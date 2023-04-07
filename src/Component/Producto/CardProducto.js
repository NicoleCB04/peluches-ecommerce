import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
// import imagProducto from '../../Assets/Images/shop/products/product-1.jpg'

class CardProducto extends Component{

    modalViewProductDetails(linkImagen, nombreProducto, precioVenta, descripcion) {

        const root = ReactDOM.createRoot(document.getElementById('modalProductDetails'));
        root.render(
            <>
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="modal-image">
                        <img class="img-responsive" src={linkImagen}
                            alt="product-img" />
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="product-short-details">
                        <h2 class="product-title">{nombreProducto}</h2>
                        <p class="product-price">S/ {precioVenta}</p>
                        <p class="product-short-description">
                            {descripcion}
                        </p>
                        <a href="/Ecommerce/CarroCompras" class="btn btn-main">Agregar al Carrito</a>
                        <a href="/Ecommerce/DetalleProducto" class="btn btn-transparent">Ver detalles del Producto</a>
                    </div>
                </div>
        </>);        

        return;
    }    

    render() {
        return (
            <div class="col-md-4">
                <div class="product-item">
                    <div class="product-thumb">
                    <span class="bage">En Stock</span>
                    <img class="img-responsive" src={this.props.urlImagen} alt="product-img" />
                        <div class="preview-meta">
                            <ul>
                                <li>
                                    <span data-toggle="modal" data-target="#product-modal" onClick={() => this.modalViewProductDetails(this.props.urlImagen, this.props.nombre, this.props.precio, this.props.descripcion)}>
                                        <i class="tf-ion-ios-search-strong"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#!"><i class="tf-ion-ios-heart"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="tf-ion-android-cart"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-content">
                        <h4><a href="product-single.html">{this.props.nombre}</a></h4>
                        <p class="price">S/ {this.props.precio}</p>
                    </div>
                </div>
            </div>

        );
    }
}


export default CardProducto;