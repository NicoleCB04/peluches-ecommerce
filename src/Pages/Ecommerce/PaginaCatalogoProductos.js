import { Component } from "react";
import BuscadorProductos from "../../Component/Catalogo/BuscadorProductos";
import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";
import ListaProductos from "../../Component/Catalogo/ListaProductos";


class PaginaCatalogoProductos extends Component{
    render() {
        return (
            <>
                <CabeceraPagina />
                <section class="products section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <BuscadorProductos/>
                            </div>
                            <div class="col-md-9">
                                <ListaProductos/>
                            </div>

                        </div>
                    </div>
                </section>                
            </>
        );
    }

}


export default PaginaCatalogoProductos;