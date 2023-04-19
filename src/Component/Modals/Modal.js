import './Modal.css'

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalCustomContainerClik = (e) => e.stopPropagation();

    return (
        <div className={`modal-custom product-modal ${isOpen && "is-open"}`} id="product-modal" onClick={closeModal}>
            <button type="button" className="close" aria-label="Close">
                <i className="tf-ion-close"></i>
            </button>
            <div className="modal-dialog" role="document">
                <div className="modal-content" onClick={handleModalCustomContainerClik}>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;