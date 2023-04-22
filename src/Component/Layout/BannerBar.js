import { Component } from "react";


import primerSlider from '../../Assets/Images/slider/slider-1.jpg';
import segundoSlider from '../../Assets/Images/slider/slider-2.jpg';
import tercerSlider from '../../Assets/Images/slider/slider-3.jpg';
import { Link } from "react-router-dom";

class BannerBar extends Component{


    render() {
     
        return (

            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src={primerSlider} alt="..." />
                            <div className="carousel-caption">
                                <p>PRODUCTOS</p>                            
                                <h3>La belleza de la naturaleza <br/> está escondido en los detalles.</h3>
                                <Link to={'/catalogo'} className="btn btn-info" >Compra Ahora</Link>
                            </div>                        
                        </div>
                        <div className="item">
                            <img src={segundoSlider} alt="..." />      
                            <div className="carousel-caption">
                                <p>PRODUCTOS</p>
                                <h3>La belleza de la naturaleza <br /> está escondido en los detalles.</h3>
                                <Link to={'/catalogo'} className="btn btn-info" >Compra Ahora</Link>
                            </div>                           
                        </div>
                        <div className="item">
                        <img src={tercerSlider} alt="..." />
                            <div className="carousel-caption">
                                <p>PRODUCTOS</p>
                                <h3>La belleza de la naturaleza <br /> está escondido en los detalles.</h3>
                                <Link to={'/catalogo'} className="btn btn-info" >Compra Ahora</Link>
                            </div>                           
                        </div>                        
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
           
        );
    }
}

export default BannerBar;