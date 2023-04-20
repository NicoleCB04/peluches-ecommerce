import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";
import EnvioYPago from "../../Component/Pagos/EnvioYPago";
import ResumenPedido from "../../Component/Pagos/ResumenPedido";

export default function PaginaPagarCompra() {

    return (
        <>
            <CabeceraPagina currentMenu="Envió y Pago" />
            <div className="page-wrapper">
                <div className="checkout shopping">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <EnvioYPago />
                            </div>
                            <div className="col-md-4">
                                <ResumenPedido/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
