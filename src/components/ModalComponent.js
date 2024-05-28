import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            className="modal"
            overlayClassName="overlay"
        >
            <h2>{title}</h2>
            <div>{content}</div>
            <button onClick={onRequestClose} className="modal-close-button">
                Kapat
            </button>
        </Modal>
    );
};

export default ModalComponent;
