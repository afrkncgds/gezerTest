import React, {Component} from 'react';
import DiscountCode from "./DiscountCode";
import Agreement from "./Agreement";

class OrderSummary extends Component {
    render() {
        return (
            <div className="order-container">
                <div className="title-block">
                    <h3>Sipariş Özeti</h3>
                </div>
                <div className="desc-block">
                    <div className="text-block">
                        <div className="text-item">
                            <span>Tek İlan Paketi</span>

                        </div>
                        <div className="text-item">
                            <span>750,00</span>

                        </div>

                    </div>
                    <div className="text-block">
                        <div className="text-item">
                            <span>KDV %20</span>

                        </div>
                        <div className="text-item">
                            <span>150,00</span>

                        </div>

                    </div>
                    <div className="text-block ">
                        <div className="text-item">
                            <span>TOPLAM TUTAR</span>

                        </div>
                        <div className="text-item">
                            <span>900,00</span>

                        </div>

                    </div>
                    <DiscountCode/>
                    <Agreement/>
                    <div className="button-block">
                        <div className="btn-item">
                            <span>SİPARİŞİ TAMAMLA</span>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default OrderSummary;