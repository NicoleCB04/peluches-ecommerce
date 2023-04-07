import { Component } from "react";
import { Link } from "react-router-dom";
import imageHeader from '../../Assets/Images/shop/header-img.jpg'

class MenuBar extends Component{
    render() {
        return (
            <section class="menu">            
                <nav className="navbar navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <h2 className="menu-title">Main Menu</h2>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>

                        <div id="navbar" className="navbar-collapse collapse text-center">
                            <ul className="nav navbar-nav">


                                <li className="dropdown ">
                                    <Link to={'/'}>Inicio</Link>                                    
                                </li>

                                <li className="dropdown dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                                        data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">
                                        Shop <span className="tf-ion-ios-arrow-down"></span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">


                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="confirmation.html">Confirmation</a></li>

                                                </ul>
                                            </div>


                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Layout</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="product-single.html">Product Details</a></li>
                                                    <li><a href="shop-sidebar.html">Shop With Sidebar</a></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>

                                <li className="dropdown full-width dropdown-slide">
                                    <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                                        data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">
                                        Pages <span className="tf-ion-ios-arrow-down"></span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="row">


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Introduction</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Dashboard</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="dashboard.html">User Interface</a></li>
                                                    <li><a href="order.html">Orders</a></li>
                                                    <li><a href="address.html">Address</a></li>
                                                    <li><a href="profile-details.html">Profile Details</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Utility</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="login.html">Login Page</a></li>
                                                    <li><a href="signin.html">Signin Page</a></li>
                                                    <li><a href="forget-password.html">Forget Password</a></li>
                                                </ul>
                                            </div>


                                            <div className="col-sm-3 col-xs-12">
                                                <a href="shop.html">
                                                    <img className="img-responsive" src={imageHeader}
                                                        alt="menu image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>      
            </section>
        );        
    }
}

export default MenuBar;