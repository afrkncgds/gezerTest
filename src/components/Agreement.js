import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import InformationModal from "./informationModal";
import DistantModal from "./distantModal";


const App = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [modalInfoContent, setInfoModalContent] = useState('');
    const [isDistantModalOpen, setIsDistantModalOpen] = useState(false);
    const [modalDistantContent, setDistantModalContent] = useState('');
    const openInfoModalModal = (content) => {
        setIsInfoModalOpen(content);
        setInfoModalContent(true);
    };

    const closeInfoModal = () => {
        setIsInfoModalOpen(false);
        setInfoModalContent('');
    };
    const openDistantModalModal = (content) => {
        setDistantModalContent(content);
        setIsDistantModalOpen(true);
    };

    const closeDistantModal = () => {
        setIsDistantModalOpen(false);
        setDistantModalContent('');
    };

    return (
        <div className="app-container">
            <div className="checkbox-container">
                <input type="checkbox" id="agreement" name="agreement" />
                <label htmlFor="agreement">
                    <span className="link" onClick={() => openInfoModalModal('Mesafeli satış sözleşmesi içeriği buraya gelecek.')}>Mesafeli satış sözleşmesi</span>'ni ve
                    <span className="link" onClick={() => openDistantModalModal('Ön Bilgi Formu içeriği buraya gelecek.')}> Ön Bilgi Formu</span>'nu okudum, onaylıyorum.
                </label>
            </div>
            <InformationModal
                isOpen={isInfoModalOpen}
                onRequestClose={closeInfoModal}
                content={modalInfoContent}
            />
            <DistantModal
                isOpen={isDistantModalOpen}
                onRequestClose={closeDistantModal}
                content={modalDistantContent}
            />
        </div>
    );
};

export default App;
