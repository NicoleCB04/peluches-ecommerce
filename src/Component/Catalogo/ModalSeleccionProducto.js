import { Component } from "react";


class ModalSeleccionProducto extends Component{
    render() {
        return (
            <div class="modal product-modal fade" id="product-modal">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="tf-ion-close"></i>
                </button>
                <div class="modal-dialog " role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div id="modalProductDetails" class="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        );
    }
}

export default ModalSeleccionProducto;