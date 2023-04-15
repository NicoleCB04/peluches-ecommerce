import { Component } from "react";
import CardProducto from "../Producto/CardProducto";
import ModalSeleccionProducto from "./ModalSeleccionProducto";


class ListaProductos extends Component{

    render() {
        const {productsData, columnWidth, numberElements} = this.props;

        return (
            <div className="row">
                {
                    productsData.map((producto, indice) => {
                        if(numberElements === "all"){
                            return <CardProducto idProducto={producto.idProducto}
                                                nombre={producto.nombreProducto}
                                                descripcion={producto.descripcion }
                                                urlImagen={producto.urlImagen} 
                                                precio={producto.precioVenta} 
                                                columnas={columnWidth}
                                                key={producto.idProducto}/>                           
                        }else{
                            if((indice + 1) <= numberElements){
                                return <CardProducto idProducto={producto.idProducto}
                                                    nombre={producto.nombreProducto}
                                                    descripcion={producto.descripcion }
                                                    urlImagen={producto.urlImagen} 
                                                    precio={producto.precioVenta} 
                                                    columnas={columnWidth}
                                                    key={producto.idProducto}/>   
                            } 
                        }                                                                            
                    })
                }

                <ModalSeleccionProducto/>
            </div>
        );
    }
}


export default ListaProductos;