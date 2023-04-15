import { Component } from "react";
import ListaCategorias from "../../Component/Catalogo/ListaCategorias";
import ListaProductos from "../../Component/Catalogo/ListaProductos";
import BannerBar from "../../Component/Layout/BannerBar";
import RedSocial from "../../Component/RedSociales/RedSocial";
import Suscripcion from "../../Component/Suscripciones/Suscripcion";

import { getProducts } from "../../Services/Productos";


class PaginaInicio extends Component{
    constructor(props){
        super(props);

        this.state = {
            productsData: [],
            isFetchproducts: true,
        }        
    }

    async componentDidMount(){
        const products = await getProducts("BuscaPorDescripcion", "1", "0", "oso");

        this.setState(
        {
            productsData: products.data,
            isFetchproducts: false,
        })
    }    

    render() {
        const {isFetchproducts, productsData} = this.state;

        if(isFetchproducts){
            return 'Cargando...';
        }

        return (
            <>
                <BannerBar/>
                <ListaCategorias />
                <section className="products section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="title text-center">
                                <h2>Productos de Moda</h2>
                            </div>
                        </div>
                        <ListaProductos productsData={productsData} columnWidth="4" numberElements="all"/>
                    </div>
                </section>
                <Suscripcion />
                <RedSocial/>
            </>
        );
    }
}


export default PaginaInicio;