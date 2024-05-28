import React, {Component} from 'react';
import PaymentForm from "../components/PaymentForm";
import OrderSummary from "../components/OrderSummary";
const IconBack = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="currentColor"
            {...props}
        >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"/>
        </svg>
    );
}
class HomePage extends Component {
    render() {
        return (
            <div className="cashier-root">
                <div className="cashier-wrapper">
                    <div className="title-container">
                        <div className="title-text-block">
                            <h3>ÖDEME</h3>
                        </div>
                        <div className="title-icon-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"/>
                            </svg>

                        </div>
                    </div>
                    <div className="content-container">
                        <PaymentForm/>
                        <OrderSummary/>



                    </div>

                </div>

            </div>
        );
    }
}

export default HomePage;