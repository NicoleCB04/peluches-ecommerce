import { Component } from "react";
import { Link } from "react-router-dom";


class CabeceraPagina extends Component{
    render() {
        return (
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1 className="page-name">Productos</h1>
                                <ol className="breadcrumb">
                                    <li><Link to={'/'}>Inicio</Link></li>    
                                    <li className="active">Productos</li>
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