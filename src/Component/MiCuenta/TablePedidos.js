import Modal from "../Modals/Modal"


export default function TablePedidos({ mode = 'Dashboard', pedidos }) {
    return (
        <>
            {
                mode === 'Dashboard' ?
                    <>
                        <h4>Total Pedidos</h4>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID Pedido</th>
                                        <th>Fecha Pedido</th>
                                        <th>Entrega</th>
                                        <th>Cant.Productos</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pedidos.length ?
                                            pedidos.map((pedido) => {
                                                return <tr key={pedido.idPedido}>
                                                    <td><a href="#!"># {pedido.idPedido}</a></td>
                                                    <td>{pedido.fechaPedido}</td>
                                                    <td>{pedido.tipoEntrega}</td>
                                                    <td>{pedido.cantidadProductos}</td>
                                                    <td>S/ {pedido.total}</td>
                                                </tr>
                                            })
                                            :
                                            <h4>Sin pedidos aun</h4>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID Pedido</th>
                                    <th>Fecha Pedido</th>                                    
                                    <th>Fecha Entrega</th>
                                    <th>Entrega</th>
                                    <th>Cant.Productos</th>
                                    <th>Estado</th>
                                    <th>Total</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pedidos.length ?
                                        pedidos.map((pedido) => {
                                            return <tr key={pedido.idPedido}>
                                                <td><a href="#!"># {pedido.idPedido}</a></td>
                                                <td>{pedido.fechaPedido}</td>                                                
                                                <td>{pedido.fechaEntrega}</td>
                                                <td>{pedido.tipoEntrega}</td>
                                                <td>{pedido.cantidadProductos}</td>
                                                <td><span className="label label-primary">{pedido.estadoPedido}</span></td>
                                                <td>S/ {pedido.total}</td>
                                                <td>
                                                    <a href="#" className="btn btn-default">Ver</a>
                                                    <a href="#" className="btn btn-default">Pagar</a>
                                                </td>
                                            </tr>
                                        })
                                        :
                                        <h4>Sin pedidos aun</h4>
                                }
                            </tbody>
                        </table>
                    </div>
            }

            <Modal />

            <Modal />
        </>
    )
}