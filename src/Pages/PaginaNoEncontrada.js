
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';

const PaginaNoEncontrada = () => {
    return (
        <section className="page-404">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <a href="index.html">
                            <img src={logo} alt="site logo" />
                        </a>
                        <h1>404</h1>
                        <h2>Página no Encontrada</h2>
                        <Link to={'/'} className="btn btn-main"><i className="tf-ion-android-arrow-back"></i> Ir a Inicio</Link>
                        <p className="copyright-text">© 2023 El Chino Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaginaNoEncontrada;