import { Component } from "react";

import dataCategorias from "../../Services/dataCategorias.json"
import SubCategoriasPorCategoria from "./SubCategoriasPorCategoria";

class BuscadorProductos extends Component{
    render() {
        return (
            <>
                <div class="widget product-category">
                    <h4 class="widget-title">Categorías</h4>
                    <div class="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true">
                        {
                            dataCategorias.data.map((categoria, indice) => {
                                return  <SubCategoriasPorCategoria nombreCategoria={categoria.descripcion} subCategorias={categoria.subCategorias} key={categoria.idCategoria}/>  
                            }) 
                        }                
                    </div>
                </div>
                <div class="widget">
                    <h4 class="widget-title">Filtrar por</h4>
                    <form method="post" action="#">
                        <select class="form-control">
                            <option>Para Niños</option>
                            <option>Para Hombres</option>
                            <option>Para Mujeres</option>
                            <option>Conmemoraciones</option>
                        </select>
                    </form>
                </div>                
            </>            
        );
    }
}


export default BuscadorProductos;