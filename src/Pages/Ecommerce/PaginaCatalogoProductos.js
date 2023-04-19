import { Component } from "react";
import BuscadorProductos from "../../Component/Catalogo/BuscadorProductos";
import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";
import ListaProductos from "../../Component/Catalogo/ListaProductos";

import { getProductSearchParameters, getProducts } from "../../Services/Productos";

class PaginaCatalogoProductos extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchParameterData: [],
            productsData: [],
            isFetchSearchParameter: true,
            isFetchproducts: true,
        }        
    }

    async componentDidMount(){
        const searchParameters = await getProductSearchParameters();
        const products = await getProducts("BuscaPorDescripcion", "1", "0", "oso");

        this.setState(
        {
            searchParameterData: searchParameters.data, 
            productsData: products.data,
            isFetchSearchParameter: false,
            isFetchproducts: false,
        })
    }    

    hadlerSearchProducts = async (parameterSearch) => {
        console.log(parameterSearch)
        const products = await getProducts(parameterSearch.tagSearch, parameterSearch.firstSearchId, 
                                            parameterSearch.secondSearchId, parameterSearch.keyword); 
        this.setState(
            {
                productsData: products.data,
                isFetchproducts: false,
            })               
    }

    render() {
        const {isFetchSearchParameter, isFetchproducts, searchParameterData, productsData} = this.state;

        if(isFetchSearchParameter && isFetchproducts){
            return 'Cargando...';
        }

        return (
            <>
                <CabeceraPagina currentMenu="Productos"/>
                <section className="products section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <BuscadorProductos searchParameterData={searchParameterData} hadlerSearchProducts={this.hadlerSearchProducts}/>
                            </div>
                            <div className="col-md-9">
                                <ListaProductos productsData={productsData} columnWidth="4" numberElements="all"/>
                            </div>
                        </div>
                    </div>
                </section>                
            </>
        );
    }

}


export default PaginaCatalogoProductos;