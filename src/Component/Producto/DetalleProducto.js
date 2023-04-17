import { useContext } from "react";
import { Link } from "react-router-dom";
import CarritoContext from "../../Context/CarritoContext";


export default function DetalleProducto({product}) {
    const {shoppingCart, handleShoppingCart} = useContext(CarritoContext)

    return(
            <section className="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ol className="breadcrumb">
                                <li><Link to={'/'}>Inicio</Link></li>
                                <li><Link to={'/catalogo'}>Productos</Link></li>
                                <li className="active">Detalle Producto</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <ol className="product-pagination text-right">
                                <li><a href="blog-left-sidebar.html"><i className="tf-ion-ios-arrow-left"></i> Siguiente </a></li>
                                <li><a href="blog-left-sidebar.html">Anterior <i className="tf-ion-ios-arrow-right"></i></a></li>
                            </ol>
                        </div>
                    </div>

                    <div className="row mt-20">
                        <div className="col-md-5">
                            <div className="single-product-slider">
                                <div id='carousel-custom' className="carousel slide" data-ride="carousel">
                                    <div className="carousel-outer">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                            <div className="item">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                            <div className="item">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                            <div className="item">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                            <div className="item">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                            <div className="item">
                                                <img src={product.urlImagen} alt='' data-zoom-image={product.urlImagen} />
                                            </div>
                                        </div>

                                        <a className="left carousel-control" href='#carousel-custom' data-slide='prev'>
                                            <i className="tf-ion-ios-arrow-left"></i>
                                        </a>
                                        <a className="right carousel-control" href='#carousel-custom' data-slide='next'>
                                            <i className="tf-ion-ios-arrow-right"></i>
                                        </a>
                                    </div>

                                    <ol className="carousel-indicators mCustomScrollbar meartlab">
                                        <li data-target='#carousel-custom' data-slide-to='0' className="active">
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='1'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='2'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='3'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='4'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='5'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='6'>
                                            <img src={product.urlImagen} alt='' />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="single-product-details">
                                <h2>{shoppingCart.nombreProducto}</h2>
                                <p className="product-price">S/ {product.precioVenta}</p>

                                <p className="product-description mt-20">
                                    {product.descripcion}
                                </p>
                                <div className="color-swatches">
                                    <span>Color:</span>
                                    <ul>
                                        <li>
                                            <a href="#!" className="swatch-violet"></a>
                                        </li>
                                        <li>
                                            <a href="#!" className="swatch-black"></a>
                                        </li>
                                        <li>
                                            <a href="#!" className="swatch-cream"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-size">
                                    <span>Tamaño:</span>
                                    <select className="form-control">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                                <div className="product-quantity">
                                    <span>Cantidad:</span>
                                    <div className="product-quantity-slider">
                                        <div className="input-group bootstrap-touchspin">
                                            <span className="input-group-btn">
                                                <button className="btn btn-default bootstrap-touchspin-down" type="button">-</button>
                                            </span>

                                            <input id="product-quantity" type="text" defaultValue="0" name="product-quantity" className="form-control"/>

                                            <span className="input-group-btn">
                                                <button className="btn btn-default bootstrap-touchspin-up" type="button">+</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-category">
                                    <span>Categoria:</span>
                                    <ul>
                                        <li><a href="product-single.html">Productos</a></li>
                                        <li><a href="product-single.html">{product.categoria}</a></li>
                                    </ul>
                                </div>
                                <Link to={'/carrito'} className="btn btn-main mt-20" onClick={() => handleShoppingCart(product)}>Agregar al Carrito</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="tabCommon mt-20">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#details" aria-expanded="true">Detalles</a></li>
                                </ul>
                                <div className="tab-content patternbg">
                                    <div id="details" className="tab-pane fade active in">
                                        <h4>Descripción Producto</h4>
                                        <p>{product.descripcion}</p>
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
    )

}
