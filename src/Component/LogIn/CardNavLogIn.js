import { useModal } from "../../Hooks/useModal";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Assets/Images/logo.png';
import './CardNavLogIn.css'
import Modal from "../Modals/Modal";


export default function CardNavLogIn() {
    const navigate = useNavigate();
    const [isOpenModalLogIn, openModalLogIn, closeModalLogIn] = useModal(false);
    const [isOpenModalSignIn, openModalSignIn, closeModalSignIn] = useModal(false);

    const openModalSignInFromModalLogIn = () => {
        closeModalLogIn();
        openModalSignIn();
    }

    const openModalLogInFromModalSignIn = () => {
        closeModalSignIn();
        openModalLogIn();
    }

    const logIn = () => {
        closeModalLogIn();
        navigate('/miCuenta');   
    }

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
                        <li><a href="#" onClick={() => openModalLogIn()}>Inicia Sesión</a></li>
                        <li><a href="#" onClick={() => openModalSignIn()}>Regístrate</a></li>
                        <li><Link to={'/miCuenta'}>Mi Cuenta</Link></li>
                    </ul>
                </div>
            </li>

            <Modal isOpen={isOpenModalLogIn} closeModal={closeModalLogIn}>
                <section className="signin-page account">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <a className="logo" href="index.html">
                                    <img src={logo} alt="" />
                                </a>
                                <h2 className="text-center">Bienvenido de Nuevo</h2>
                                <div className="text-left clearfix">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="text-center">
                                        <button onClick={() => logIn()} className="btn btn-main text-center" >Iniciar Sesión</button>
                                    </div>
                                </div>
                                <p className="mt-20">Nuevo en este sitio ?
                                    <a href="#" onClick={() => openModalSignInFromModalLogIn()}> Crear una nueva cuenta</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>

            <Modal isOpen={isOpenModalSignIn} closeModal={closeModalSignIn}>
                <section className="signin-page account">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <a className="logo" href="index.html">
                                    <img src={logo} alt="" />
                                </a>
                                <h2 className="text-center">Crea tu cuenta</h2>
                                <form className="text-left clearfix" action="index.html">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombres" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Apellidos" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombre Usuario" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-main text-center">Registrarse</button>
                                    </div>
                                </form>
                                <p className="mt-20">Ya tienes una cuenta ?
                                    <a href="#" onClick={() => openModalLogInFromModalSignIn()}> Iniciar Sesión</a>
                                </p>
                                {/* <p><a href="forget-password.html"> Olvidaste tu contraseña?</a></p> */}
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </>
    )
}