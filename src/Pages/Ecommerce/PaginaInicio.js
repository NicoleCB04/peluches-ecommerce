import { Component } from "react";
import ListaCategorias from "../../Component/Catalogo/ListaCategorias";
import ListaProductos from "../../Component/Catalogo/ListaProductos";
import BannerBar from "../../Component/Layout/BannerBar";
import RedSocial from "../../Component/RedSociales/RedSocial";
import Suscripcion from "../../Component/Suscripciones/Suscripcion";



class PaginaInicio extends Component{
    render() {
        return (
            <>
                <BannerBar/>
                <ListaCategorias />
                <section class="products section bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="title text-center">
                                <h2>Productos de Moda</h2>
                            </div>
                        </div>
                        <ListaProductos/>
                    </div>
                </section>
                <Suscripcion />
                <RedSocial/>
            </>
        );
    }
}


export default PaginaInicio;