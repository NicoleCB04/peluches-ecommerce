import './Modal.css'

const Modal = ({children, isOpen, closeModal}) => {
    const handleModalCustomContainerClik = (e) => e.stopPropagation();

    return (
        <article className={`modal-custom ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-custom-container" onClick={handleModalCustomContainerClik}>
                <button className="modal-custom-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    );
};

export default Modal;