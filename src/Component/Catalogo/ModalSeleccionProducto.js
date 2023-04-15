import { Component } from "react";


class ModalSeleccionProducto extends Component{
    render() {
        return (
            <div className="modal product-modal fade" id="product-modal">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="tf-ion-close"></i>
                </button>
                <div className="modal-dialog " role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div id="modalProductDetails" className="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        );
    }
}

export default ModalSeleccionProducto;