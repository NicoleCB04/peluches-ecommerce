import { Component } from "react";
import SubCategoriasPorCategoria from "./SubCategoriasPorCategoria";


class BuscadorProductos extends Component{

    render() {
        const {searchParameterData, hadlerSearchProducts} = this.props;

        return (
            <>
                <div className="widget product-category">
                    <h4 className="widget-title">Categorías</h4>
                    <div className="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true">
                        {
                            searchParameterData.map((parametro, indice) => {
                                return  <SubCategoriasPorCategoria idParameter={parametro.idPadre}
                                                                parameter={parametro.padre} 
                                                                subParameters={parametro.parameterDetails} 
                                                                key={parametro.idPadre}
                                                                hadlerSearchProducts={hadlerSearchProducts}/>  
                            }) 
                        }                
                    </div>
                </div>
                <div className="widget">
                    <h4 className="widget-title">Ordenar por</h4>
                    <form method="post" action="#">
                        <select className="form-control">
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