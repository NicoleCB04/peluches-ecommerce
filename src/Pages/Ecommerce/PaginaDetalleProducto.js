import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProducts } from "../../Services/Productos";
import DetalleProducto from "../../Component/Producto/DetalleProducto";
import ListaProductos from "../../Component/Catalogo/ListaProductos";


export default function PaginaDetalleProducto() {
    const params = useParams();
    const [productView, setProductView] = useState({
        productData: {},
        productsData:[],
        isFetchProduct: true,        
        isFetchProducts: true,     
    })

    useEffect(() => {
        async function getProductsView(){
            const product = await getProduct(params.idProducto)
            const products = await getProducts("BuscaPorDescripcion", "1", "0", "oso");            
            setProductView({
                productData: product.data,
                productsData: products.data,
                isFetchProduct: false,
                isFetchProducts: false
            })   
        }
        getProductsView();
    },[params.idProducto])

    if(productView.isFetchProduct && productView.isFetchProducts){
        return 'Cargando...';
    }

    return(
        <>
            <DetalleProducto product={productView.productData}/>  

            <section className="products related-products section">
                <div className="container">
                    <div className="row">
                        <div className="title text-center">
                            <h2>Productos Relacionados</h2>
                        </div>
                    </div>
                    <ListaProductos productsData={productView.productsData} columnWidth="3" numberElements="4"/>
                </div>
            </section>
        </>
    )
} 


