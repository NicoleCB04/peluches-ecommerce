import PaginaCarroCompras from "../Pages/Ecommerce/PaginaCarroCompras";
import PaginaCatalogoProductos from "../Pages/Ecommerce/PaginaCatalogoProductos";
import PaginaDetalleProducto from "../Pages/Ecommerce/PaginaDetalleProducto";
import PaginaInicio from "../Pages/Ecommerce/PaginaInicio";

const { createBrowserRouter } = require("react-router-dom");
const { default: LayoutEcommerce } = require("../Pages/LayoutEcommerce");

const rutas = createBrowserRouter(
    [
        {
            path: '/',
            element: <LayoutEcommerce />,
            errorElement: <h1>Error</h1>,
            children: [
                {
                    path: '/',
                    element: <PaginaInicio />
                },
                {
                    path: 'catalogo',
                    element: <PaginaCatalogoProductos />
                },            
                {
                    path: 'detalleProducto/:idProducto',
                    element: <PaginaDetalleProducto />
                },
                {
                    path: 'carrito',
                    element: <PaginaCarroCompras />
                },                                 
            ]
        }   
    ]);

export default rutas;