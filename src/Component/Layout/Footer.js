import { Component } from "react";


class Footer extends Component{
    render() {
        return (
            <footer className="footer section text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="social-media">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100090478615170">
                                        <i className="tf-ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/elchino_peluches/">
                                        <i className="tf-ion-social-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ElChinoPeluches">
                                        <i className="tf-ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/pelucheselchino/">
                                        <i className="tf-ion-social-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer-menu text-uppercase">
                                <li>
                                    <a href="contact.html">Contáctenos</a>
                                </li>
                                <li>
                                    <a href="shop.html">Comprar</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Precios</a>
                                </li>
                                <li>
                                    <a href="contact.html">Políticas de Privacidad</a>
                                </li>
                            </ul>
                            <p className="copyright-text">Copyright &copy;2023, Designed &amp; Developed by <a href="https://themefisher.com/">IDAT students</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;