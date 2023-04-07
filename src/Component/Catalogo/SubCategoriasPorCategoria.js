import { Component } from "react";


class SubCategoriasPorCategoria extends Component{
    render(){
        return (
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {this.props.nombreCategoria}
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                        <ul>
                            {this.props.subCategorias.map(sc => 
                                <li key={sc.idSubCategoria}><a href="#!">{sc.descripcion}</a></li>                            
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubCategoriasPorCategoria;