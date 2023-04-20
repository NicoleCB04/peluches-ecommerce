import './EnvioYPago.css'

export default function FacturacionYEnvio() {

    return (
        <>
            <div className="block billing-details">
                <h4 className="widget-title">Identificación</h4>
                <div className="checkout-form">
                    <div className="form-group">
                        <label for="full_name">Correo</label>
                        <input type="text" className="form-control" id="full_name" placeholder="" />
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
                        <label for="full_name">Dirección de entrega</label>
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
                            <label for="user_city">Número Calle (Opcional)</label>
                            <input type="text" className="form-control" id="user_city" name="city" defaultValue="" />
                        </div>
                    </div>
                    <div className="checkout-country-code clearfix">
                        <div className="form-group">
                            <label for="user_country">Piso o Aptmto (Opcional)</label>
                            <input type="text" className="form-control" id="user_country" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="user_country">Referencia (Opcional)</label>
                            <input type="text" className="form-control" id="user_country" placeholder="" />
                        </div>
                    </div>
                    &nbsp;
                    <p>Selecciona tu método de entrega: </p>
                    <section className="radio-section">
                        <div className="radio-list">
                            <div className="radio-item">
                                <input type="radio" name="radio" id="radio1"/>
                                <label for="radio1">Retiro en tienda</label>
                            </div>
                            <div className="radio-item">
                                <input type="radio" name="radio" id="radio2"/>
                                <label for="radio2">Despacho a Domicilio</label>
                            </div>
                        </div>
                    </section>

                    &nbsp;
                    <p>Escoge la fecha de entrega: </p>
                    <div className="form-group">
                        <label for="user_country">Fecha</label>
                        <input type="date" className="form-control" id="user_country" placeholder="" />
                    </div>
                    <p>Escoge la hora de entrega: </p>
                    <div className="form-group">
                        <label for="full_name">Hora</label>
                        <select className="form-control" id="user_post_code">
                            <option>Desde las 8:00 hasta las 20:00</option>
                            <option>Desde las 8:00 hasta las 13:00</option>
                            <option>Desde las 14:00 hasta las 18:00</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="block">
                <h4 className="widget-title">Método de Pago</h4>
                <p>¿Qué tipo de comprobante desea?</p>
                <div className="checkout-product-details">
                    <div className="payment">
                        <div className="card-details">
                            <div className="checkout-form">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="b" />
                                    <label className="form-check-label" for="exampleRadios">
                                        Boleta
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="b" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        Factura
                                    </label>
                                </div>
                                &nbsp;
                                <p>Elige un metodo de pago:</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="b" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        Transferencia Bancaria
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="b" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        BBVA - 0011-0426-0100005960
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="b" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        BCP  - 193-1853946-0-25
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="b" />
                                    <label className="form-check-label" for="exampleRadios2">
                                        SBS  - 00-046-021886
                                    </label>
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