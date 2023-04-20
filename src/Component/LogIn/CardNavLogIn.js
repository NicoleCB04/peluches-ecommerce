import { Link } from "react-router-dom";
import './CardNavLogIn.css'


export default function CardNavLogIn() {

    return (
        <>
            <li className="dropdown cart-nav dropdown-slide">
                <a href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown" >
                    <i className="tf-ion-android-person"></i>
                    Inicia Sesión
                </a>

                <div className="cart-dropdown">
                    <ul className="cart-menus-login dropdown-menu">
                        <li><a href="typography.html">Inicia Sesión</a></li>
                        <li><a href="buttons.html">Regístrate</a></li>
                        <li><a href="alerts.html">Mi Cuenta</a></li>
                    </ul>
                </div>
            </li>
        </>
    )
}