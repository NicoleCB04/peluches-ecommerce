import { Component } from "react";
import CardProducto from "../Producto/CardProducto";
import ModalSeleccionProducto from "./ModalSeleccionProducto";
import dataProductos from "../../Services/dataProductos.json";
import { getProducts } from "../../Services/Productos";

class ListaProductos extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataProductos: [],
            isFetch: true,            
        }
    }

    async componentDidMount(){
        const responseJson = await getProducts(this.props.tagSearch, this.props.firstSearchId, this.props.secondSearchId, this.props.keyword);

        this.setState({dataProductos: responseJson.data, isFetch: false})
    }

    render() {
        const {isFetch, dataProductos} = this.state;

        if(isFetch){
            return 'Cargando...';
        }

        return (
            <div class="row">
                {
                    dataProductos.map((producto, indice) => {
                        return <CardProducto urlImagen={producto.urlImagen} 
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