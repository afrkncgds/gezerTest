import React, { useState } from 'react';


const PaymentForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const [activeTab, setActiveTab] = useState('creditCard');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleCVVFocus = () => {
        setIsFlipped(true);
    };

    const handleCVVBlur = () => {
        setIsFlipped(false);
    };

    return (
        <div className="card-container">
            <div className="card-title-block">
                <div
                    className={`card-title-item ${activeTab === 'creditCard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('creditCard')}
                >
                    <div className="icon-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100px"
                            height="100px"
                        >
                            <rect width="24" height="24" fill="none" />
                            <path d="M22,4H2C1.45,4,1,4.45,1,5v14c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V5C23,4.45,22.55,4,22,4z M2,19V5h20v14H2z M6,8h12v2H6V8z M4,10h2v2H4V10z M4,13h16v4H4V13z" />
                        </svg>
                    </div>
                    <div className="text-item">
                        <span>Kredi Kartı</span>
                    </div>
                </div>
                <div
                    className={`card-title-item ${activeTab === 'havale' ? 'active' : ''}`}
                    onClick={() => setActiveTab('havale')}
                >
                    <div className="icon-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="100px"
                            height="100px"
                        >
                            <rect width="24" height="24" fill="none" />
                            <path d="M22,4H2C1.45,4,1,4.45,1,5v14c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V5C23,4.45,22.55,4,22,4z M2,19V5h20v14H2z M6,8h12v2H6V8z M4,10h2v2H4V10z M4,13h16v4H4V13z" />
                        </svg>
                    </div>
                    <div className="text-item">
                        <span>Havale</span>
                    </div>
                </div>
            </div>
            {activeTab === 'creditCard' && (
                <div className="desc-block">
                    <div className="input-block">
                        <div className="input-item">
                            <div className="floating-label">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder=" Adınız Soyadınız"
                                />
                                <label htmlFor="name">Adınız Soyadınız</label>
                            </div>
                        </div>
                        <div className="input-item">
                            <div className="floating-label">
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formValues.cardNumber}
                                    onChange={handleChange}
                                    placeholder="Kart Numarası "
                                />
                                <label htmlFor="cardNumber">Kart Numarası</label>
                            </div>
                        </div>
                        <div className="input-item">
                            <div className="floating-label">
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formValues.expiryDate}
                                    onChange={handleChange}
                                    placeholder="Son Kullanma Tarihi "
                                />
                                <label htmlFor="expiryDate">Son Kullanma Tarihi</label>
                            </div>
                        </div>
                        <div className="input-item">
                            <div className="floating-label">
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formValues.cvv}
                                    onChange={handleChange}
                                    onFocus={handleCVVFocus}
                                    onBlur={handleCVVBlur}
                                    placeholder="Güvenlik No CVV "
                                />
                                <label htmlFor="cvv">Güvenlik No CVV</label>
                            </div>
                        </div>
                        <div className="text-item">
                            <div className="title-item">
                                <p>Bilgilendirme;</p>
                            </div>
                            <div className="desc-item">
                                <p>Faturanız aşağıda belirtilen e-posta adresinize gönderilecektir. habipagca@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={`card-desc-block ${isFlipped ? 'flipped' : ''}`}>
                        <div className="card-desc-item">
                            <div className="icon-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="100px"
                                    height="100px"
                                >
                                    <rect width="24" height="24" fill="none" />
                                    <path d="M22,4H2C1.45,4,1,4.45,1,5v14c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V5C23,4.45,22.55,4,22,4z M2,19V5h20v14H2z M6,8h12v2H6V8z M4,10h2v2H4V10z M4,13h16v4H4V13z" />
                                </svg>
                            </div>
                            <div className="card-number-item">
                                <p>{isFlipped ? formValues.cvv : formValues.cardNumber}</p>
                            </div>
                            <div className="name-desc-item">
                                <div className="name-item">
                                    <p>{formValues.name}</p>
                                </div>
                                {!isFlipped && (
                                    <div className="name-item">
                                        <p>{formValues.expiryDate}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'havale' && (
                <div className="desc-block transfer">
                    <div className="transfer-block">
                        <div className="title-block">
                           <h3> Havale İşlemi:</h3>
                        </div>
                        <div className="text-block">
                            <p>
                                Lütfen yan tarafta bulunan banka bilgilerini kullanarak havale veya EFT işlemi gerçekleştiriniz. İşleminizi tamamladıktan sonra, dekontu veya ödeme bilgilerini
                                <a className="link" href="satis@isbul.net">satis@isbul.net</a> adresine göndermeyi unutmayınız.
                                <span>Açıklama kısmına mutlaka firma adınızı yazınız.</span>
                            </p>
                        </div>
                        <div className="transfer-desc-block">
                            <div className="title-block">
                                <p>Detaylı Bilgi İçin:</p>
                            </div>
                            <a href="(0212) 452 16 04" className="text-block">
                                <svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1"   viewBox="0 0 473.806 473.806" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </g></svg>
                                <span>(0212) 452 16 04</span>
                            </a>
                        </div>
                    </div>
                    <div className="transfer-desc-block">
                        <div className="title-block">
                            <h3> Havale Bilgileri:</h3>
                        </div>
                        <div className="text-block">
                            <div className="bank-name-item">
                                <p>
                                    Akbank Şirinevler Şubesi
                                </p>
                            </div>
                            <div className="text-item">
                                <p>Şube Kodu:
                                    <span>
                                         0188
                                    </span>
                                </p>
                            </div>
                            <div className="text-item">
                                <p>Şube Kodu:
                                    <span>
                                         0197523
                                    </span>
                                </p>
                            </div>
                            <div className="text-item">
                                <p>Hesap Adı:
                                    <span>
                                         Gezer Grup İnsan Kaynakları Eğit.ve Danışmanlık Tic. Anonim Şti.
                                    </span>
                                </p>
                            </div>
                            <div className="text-item">
                                <p>IBAN No:
                                    <span>TR82 0004 6001 8888 8000 1975 23</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    );
};

export default PaymentForm;
