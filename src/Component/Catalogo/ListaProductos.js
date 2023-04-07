import { Component } from "react";
import CardProducto from "../Producto/CardProducto";
import ModalSeleccionProducto from "./ModalSeleccionProducto";
import dataProductos from "../../Services/dataProductos.json";

class ListaProductos extends Component{
    render() {
        return (

            <div class="row">
                {
                    dataProductos.data.map((producto, indice) => {
                        return <CardProducto urlImagen={producto.linkImagen} 
                            nombre={producto.nombreProducto}
                            descripcion={producto.descripcion }
                            precio={producto.precioVenta} 
                                            key={producto.idProducto}/>                                                                                
                    })
                }

                <ModalSeleccionProducto/>
            </div>
        );
    }
}


export default ListaProductos;