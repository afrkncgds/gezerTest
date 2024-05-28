import React, { useState } from 'react';


const DiscountCode = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [code, setCode] = useState('');

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleApply = () => {
        // İndirim kodu uygulama mantığı buraya yazılabilir
        alert(`Uygulanan indirim kodu: ${code}`);
    };

    return (
        <div className="discount-container">
            <div className="discount-header" onClick={toggleOpen}>
                <span>Varsa indirim kodu gir</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="discount-content">
                    <input
                        type="text"
                        placeholder="İndirim kodunuz varsa giriniz..."
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={handleApply}>UYGULA</button>
                </div>
            )}
        </div>
    );
};

export default DiscountCode;
