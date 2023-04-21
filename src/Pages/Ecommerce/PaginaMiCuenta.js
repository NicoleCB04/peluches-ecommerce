import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";
import avater from '../../Assets/Images/avater.jpg';
import './PaginaMiCuenta.css'
import TablePedidos from "../../Component/MiCuenta/TablePedidos";
import TableDireccion from "../../Component/MiCuenta/TableDireccion";
import PerfilDetallado from "../../Component/MiCuenta/PerfilDetallado";

export default function PaginaMiCuenta() {

    return (
        <>
            <CabeceraPagina currentMenu="Mi Cuenta" />

            <section className="user-dashboard page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs nav-pills" role="tablist">
                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Dashboard</a></li>
                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Pedidos</a></li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Dirección</a></li>
                                <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Detalles Perfil</a></li>
                            </ul>
                            <div className="tab-content dashboard-wrapper user-dashboard">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="media">
                                        <div className="pull-left">
                                            <img className="media-object user-img" src={avater} alt="Image" />
                                        </div>
                                        <div className="media-body">
                                            <h2 className="media-heading">Welcome Adam Smith</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure, est. Sit mollitia est maxime! Eos
                                                cupiditate tempore, tempora omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil. </p>
                                        </div>
                                    </div>
                                    <div className="total-order mt-20">
                                        <TablePedidos pedidos={[
                                                    {
                                                        idPedido: 1,
                                                        estadoPedido: "Emitido",
                                                        tipoEntrega: "Delivery",
                                                        fechaPedido: "2023-04-21",
                                                        fechaEntrega: "2023-04-24T09:46:01.010Z",
                                                        cantidadProductos: 10,
                                                        total: 120, 
                                                    },
                                                    {
                                                        idPedido: 2,
                                                        estadoPedido: "En camino",
                                                        tipoEntrega: "Delivery",
                                                        fechaPedido: "2023-04-25",
                                                        fechaEntrega: "2023-04-25T09:46:01.010Z",
                                                        cantidadProductos: 4,
                                                        total: 80, 
                                                    }                                                                                                        
                                                  ]}/>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile">
                                    <TablePedidos mode="Detallado"
                                                  pedidos={[
                                                    {
                                                        idPedido: 1,
                                                        estadoPedido: "Emitido",
                                                        tipoEntrega: "Delivery",
                                                        fechaPedido: "2023-04-21",
                                                        fechaEntrega: "2023-04-24T09:46:01.010Z",
                                                        cantidadProductos: 10,
                                                        total: 120, 
                                                    },
                                                    {
                                                        idPedido: 2,
                                                        estadoPedido: "En camino",
                                                        tipoEntrega: "Delivery",
                                                        fechaPedido: "2023-04-25",
                                                        fechaEntrega: "2023-04-25T09:46:01.010Z",
                                                        cantidadProductos: 4,
                                                        total: 80, 
                                                    }                                                                                                        
                                                  ]}/>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="messages">
                                    <TableDireccion customerAddress={
                                        {
                                            direccion: "Av. Las Magnolias 120",
                                            distrito: "Lima",
                                            calle: "La Magnolias",
                                            pisoAptMto: "20",
                                            telefono: "984523567"
                                        }
                                    }/>                                   
                                </div>
                                <div role="tabpanel" className="tab-pane dashboard-user-profile" id="settings">
                                    <PerfilDetallado profile={
                                        {
                                            idCliente: 1,
                                            idTipoIdentificacion: 1,
                                            tipoIdentificacion: 'Documento Identidad',
                                            nombres: 'Andrea Lugui',
                                            apellidos: 'Bochelli Donnaruma',
                                            nroDocumento: '29394578',
                                            telefono: '984523567',
                                            email: 'abochelli@gmail.com'
                                        }
                                    }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}