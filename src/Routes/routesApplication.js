import PaginaCarroCompras from "../Pages/Ecommerce/PaginaCarroCompras";
import PaginaCatalogoProductos from "../Pages/Ecommerce/PaginaCatalogoProductos";
import PaginaDetalleProducto from "../Pages/Ecommerce/PaginaDetalleProducto";
import PaginaInicio from "../Pages/Ecommerce/PaginaInicio";
import PaginaMiCuenta from "../Pages/Ecommerce/PaginaMiCuenta";
import PaginaPagarCompra from "../Pages/Ecommerce/PaginaPagarCompra";
import PaginaNoEncontrada from "../Pages/PaginaNoEncontrada";

const { createBrowserRouter } = require("react-router-dom");
const { default: LayoutEcommerce } = require("../Pages/LayoutEcommerce");

const rutas = createBrowserRouter(
    [
        {
            path: '/',
            element: <LayoutEcommerce />,
            errorElement: <PaginaNoEncontrada/>,
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
                {
                    path: 'pagos',
                    element: <PaginaPagarCompra />
                },    
                {
                    path: 'miCuenta',
                    element: <PaginaMiCuenta />
                },                                                                    
            ]
        }   
    ]);

export default rutas;