import { Component } from "react";


class SubCategoriasPorCategoria extends Component{

    
    render(){
        const {idParameter, parameter, subParameters, hadlerSearchProducts} = this.props;

        const getParameterSearch = (idParameter, idSubParameter) => {
            let parameterSearch = {tagSearch:'', firstSearchId:0, secondSearchId:0, keyword:'all'};            
            switch (idParameter) {
                case 1:
                case 99:                    
                    parameterSearch.tagSearch = 'CategoriaYSubCategoria';
                    parameterSearch.firstSearchId = idParameter;
                    parameterSearch.secondSearchId = idSubParameter;
                    break;
                case 100: 
                    parameterSearch.tagSearch = 'Marcas';
                    parameterSearch.firstSearchId = idSubParameter;
                    break;                           
                case 101: 
                    parameterSearch.tagSearch = 'Dimensiones';
                    parameterSearch.firstSearchId = idSubParameter;
                    break;                    
                default:
                    parameterSearch.tagSearch = 'BuscaPorDescripcion';
                    break;
            }
            
            return parameterSearch;
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id={`heading${parameter.replace(/\s+/g, '')}`}>
                    <h4 className="panel-title">
                        <a role="button" 
                                data-toggle="collapse" 
                                data-parent="#accordion" 
                                href={`#collapse${parameter.replace(/\s+/g, '')}`} 
                                aria-expanded="true" 
                                aria-controls={`collapse${parameter.replace(/\s+/g, '')}`}
                                key={idParameter}>
                            {parameter}
                        </a>
                    </h4>
                </div>
                <div id={`collapse${parameter.replace(/\s+/g, '')}`} 
                        className="panel-collapse collapse in" 
                        role="tabpanel" 
                        aria-labelledby={`heading${parameter.replace(/\s+/g, '')}`}>
                    <div className="panel-body">
                        <ul>
                            {                                 
                                subParameters.map(sc =>                              
                                    <li key={`${idParameter}-${sc.idHijo}`}><a href="#!" onClick={() => hadlerSearchProducts(getParameterSearch(idParameter, sc.idHijo))}>{sc.hijo}</a></li>                            
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubCategoriasPorCategoria;