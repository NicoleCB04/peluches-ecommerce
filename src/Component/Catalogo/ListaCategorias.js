import { Component } from "react";
import CardCategoriaHorizontal from "../Producto/CardCategoriaHorizontal";
import CardCategoriaVertical from "../Producto/CardCategoriaVertical";


class ListaCategorias extends Component{
    render() {
        return (
            <section className="product-category section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center">
                                <h2>Categorias de Producto</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CardCategoriaHorizontal />
                            <CardCategoriaHorizontal />                            
                        </div>
                        <div className="col-md-6">
                            <CardCategoriaVertical/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ListaCategorias;