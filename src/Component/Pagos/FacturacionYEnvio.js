import './EnvioYPago.css'

export default function FacturacionYEnvio() {

    return (
        <>
            <div className="block billing-details">
                <h4 className="widget-title">Identificación</h4>
                <div className="checkout-form">
                    <div className="form-group">
                        <label for="full_name">Correo</label>
                        <input type="text" className="form-control" id="full_name" placeholder=""/>
                    </div>
                    <div className="checkout-country-code clearfix">
                        <div className="form-group">
                            <label for="user_post_code">Nombre</label>
                            <input type="text" className="form-control" id="user_post_code" name="zipcode" defaultValue="" />
                        </div>
                        <div className="form-group">
                            <label for="user_city">Apellidos</label>
                            <input type="text" className="form-control" id="user_city" name="city" defaultValue="" />
                        </div>
                    </div>           
                    <div className="checkout-country-code clearfix">
                        <div className="form-group">
                            <label for="full_name">Tipo Identificación</label>
                            <select className="form-control" id="user_post_code">
                                <option>Documento Nacional Identidad</option>
                                <option>Carnet Extranjeria</option>
                                <option>Registro Unico de Contribuyente</option>
                            </select>
                        </div>  
                        <div className="form-group">
                            <label for="user_post_code">Documento Identidad</label>
                            <input type="text" className="form-control" id="user_post_code" name="zipcode" defaultValue="" />
                        </div>                        
                    </div>     
                    <div className="form-group">
                        <label for="user_city">Teléfono / Móvil</label>
                        <input type="text" className="form-control" id="user_city" name="city" defaultValue="" />
                    </div>                                     
                </div>
            </div>
            <div className="block billing-details">
                <h4 className="widget-title">Datos para la entrega</h4>
                <div className="checkout-form">
                    <div className="form-group">
                        <label for="full_name">Dirección</label>
                        <input type="text" className="form-control" id="full_name" placeholder="" />
                    </div>
                    <div className="checkout-country-code clearfix">
                        <div className="form-group">
                            <label for="full_name">Distrito</label>
                            <select className="form-control" id="user_post_code">
                                <option>Puente Piedra</option>
                                <option>Ancon</option>
                                <option>Ventanilla</option>
                                <option>Lima</option>                                
                            </select>
                        </div>  
                        <div className="form-group">
                            <label for="user_city">Número (Opcional)</label>
                            <input type="text" className="form-control" id="user_city" name="city" defaultValue="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="user_country">Referencia (Opcional)</label>
                        <input type="text" className="form-control" id="user_country" placeholder="" />
                    </div>
                    <p>Selecciona tu método de entrega: </p>
              
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="b"/>
                            <label class="form-check-label" for="exampleRadios2">
                                B
                            </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="b" />
                        <label class="form-check-label" for="exampleRadios2">
                            B
                        </label>
                    </div>               

                </div>
            </div>            
            <div className="block">
                <h4 className="widget-title">Método de Pago</h4>
                <p>Datos de Tarjeta de Crédito (Pago seguro)</p>
                <div className="checkout-product-details">
                    <div className="payment">
                        <div className="card-details">
                            <div className="checkout-form">
                                <div className="form-group">
                                    <label for="card-number">Número de Tarjeta <span className="required">*</span></label>
                                    <input id="card-number" className="form-control" type="tel" placeholder="•••• •••• •••• ••••"/>
                                </div>
                                <div className="form-group half-width padding-right">
                                    <label for="card-expiry">Expiración (MM/YY) <span className="required">*</span></label>
                                    <input id="card-expiry" className="form-control" type="tel" placeholder="MM / YY"/>
                                </div>
                                <div className="form-group half-width padding-left">
                                    <label for="card-cvc">Código de Tarjeta <span className="required">*</span></label>
                                    <input id="card-cvc" className="form-control" type="tel" maxLength="4" placeholder="CVC"/>
                                </div>
                                <a asp-controller="Ecommerce" asp-action="ConfirmacionPago" className="btn btn-main mt-20">Relizar Pedido</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}