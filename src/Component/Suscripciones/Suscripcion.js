import { Component } from "react";


class Suscripcion extends Component{
    render() {
        return (
            <section class="call-to-action bg-gray section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="title">
                                <h2>SUSCRIBETE A NUESTRO CATALOGO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br/> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
                            </div>
                            <div class="col-lg-6 col-md-offset-3">
                                <div class="input-group subscription-form">
                                    <input type="text" class="form-control" placeholder="Ingrese su dirección de correo electrónico"/>
                                        <span class="input-group-btn">
                                            <button class="btn btn-main" type="button">Suscríbete Ahora!</button>
                                        </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}  

export default Suscripcion;