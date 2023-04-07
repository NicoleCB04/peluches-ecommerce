import { Component } from "react";


import primerSlider from '../../Assets/Images/slider/slider-1.jpg';
import segundoSlider from '../../Assets/Images/slider/slider-2.jpg';
import tercerSlider from '../../Assets/Images/slider/slider-3.jpg';

class BannerBar extends Component{


    render() {
     
        return (

            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src={primerSlider} alt="..." />
                            <div class="carousel-caption">
                                <p>PRODUCTOS</p>                            
                                <h3>La belleza de la naturaleza <br/> está escondido en los detalles.</h3>
                                <a class="btn btn-info" href="#">Compra Ahora</a>
                            </div>                        
                        </div>
                        <div className="item">
                            <img src={segundoSlider} alt="..." />      
                            <div class="carousel-caption">
                                <p>PRODUCTOS</p>
                                <h3>La belleza de la naturaleza <br /> está escondido en los detalles.</h3>
                                <a class="btn btn-info" href="#">Compra Ahora</a>
                            </div>                           
                        </div>
                        <div className="item">
                        <img src={tercerSlider} alt="..." />
                            <div class="carousel-caption">
                                <p>PRODUCTOS</p>
                                <h3>La belleza de la naturaleza <br /> está escondido en los detalles.</h3>
                                <a class="btn btn-info" href="#">Compra Ahora</a>
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