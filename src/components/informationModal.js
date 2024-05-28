import React from 'react';
import Modal from 'react-modal';

const InformationModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <div className="info-modal-root">
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel={title}
                className="distant-modal-root"
                overlayClassName="overlay"
            >
                <h2>{title}</h2>
                <div>{content}</div>
                <button onClick={onRequestClose} className="modal-close-button">
                    Kapat
                </button>
            </Modal>
        </div>
    );
};

export default InformationModal;