import { Component } from "react";

import dataCategorias from "../../Services/dataCategorias.json"
import SubCategoriasPorCategoria from "./SubCategoriasPorCategoria";
import { getProductSearchParameters } from "../../Services/Carrito"; 

class BuscadorProductos extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataParametrosBusqueda: [],
            isFetch: true,
        }
    } 

    async componentDidMount(){
        const responseJson = await getProductSearchParameters();

        this.setState({dataParametrosBusqueda: responseJson.data, isFetch: false})
    }

    render() {
        const {isFetch, dataParametrosBusqueda} = this.state;

        if(isFetch){
            return 'Cargando...';
        }

        return (
            <>
                <div class="widget product-category">
                    <h4 class="widget-title">Categorías</h4>
                    <div class="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true">
                        {
                            dataParametrosBusqueda.map((parametro, indice) => {
                                return  <SubCategoriasPorCategoria nombreCategoria={parametro.padre} subCategorias={parametro.parameterDetails} key={parametro.idPadre}/>  
                            }) 
                        }                
                    </div>
                </div>
                <div class="widget">
                    <h4 class="widget-title">Ordenar por</h4>
                    <form method="post" action="#">
                        <select class="form-control">
                            <option>Nombre Producto</option>
                            <option>Disponibilidad Stock</option>
                            <option>Precio</option>
                        </select>
                    </form>
                </div>                
            </>            
        );
    }
}


export default BuscadorProductos;