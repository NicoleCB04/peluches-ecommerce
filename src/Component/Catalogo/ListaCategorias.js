import { Component } from "react";
import CardCategoriaHorizontal from "../Producto/CardCategoriaHorizontal";
import CardCategoriaVertical from "../Producto/CardCategoriaVertical";


class ListaCategorias extends Component{
    render() {
        return (
            <section class="product-category section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title text-center">
                                <h2>Categorias de Producto</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <CardCategoriaHorizontal />
                            <CardCategoriaHorizontal />                            
                        </div>
                        <div class="col-md-6">
                            <CardCategoriaVertical/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ListaCategorias;