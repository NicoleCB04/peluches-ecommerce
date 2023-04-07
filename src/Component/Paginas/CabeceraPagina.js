import { Component } from "react";


class CabeceraPagina extends Component{
    render() {
        return (
            <section class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content">
                                <h1 class="page-name">Productos</h1>
                                <ol class="breadcrumb">
                                    <li><a href="#">Inicio</a></li>
                                    <li class="active">Productos</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        );
    }
}

export default CabeceraPagina;