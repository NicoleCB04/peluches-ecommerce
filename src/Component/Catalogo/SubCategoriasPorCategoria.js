import { Component } from "react";


class SubCategoriasPorCategoria extends Component{
    render(){
        return (
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id={`heading${this.props.nombreCategoria.replace(/\s+/g, '')}`}>
                    <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${this.props.nombreCategoria.replace(/\s+/g, '')}`} aria-expanded="true" aria-controls={`collapse${this.props.nombreCategoria.replace(/\s+/g, '')}`}>
                            {this.props.nombreCategoria}
                        </a>
                    </h4>
                </div>
                <div id={`collapse${this.props.nombreCategoria.replace(/\s+/g, '')}`} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={`heading${this.props.nombreCategoria.replace(/\s+/g, '')}`}>
                    <div class="panel-body">
                        <ul>
                            {this.props.subCategorias.map(sc => 
                                <li key={sc.idHijo}><a href="#!">{sc.hijo}</a></li>                            
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubCategoriasPorCategoria;