import CabeceraPagina from "../../Component/Paginas/CabeceraPagina";
import FacturacionYEnvio from "../../Component/Pagos/FacturacionYEnvio";
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
                                <FacturacionYEnvio />
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
