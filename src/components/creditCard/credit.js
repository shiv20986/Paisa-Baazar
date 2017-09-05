import React, { Component, PropTypes } from 'react';
import './credit.scss';
import Header  from '../header/header';
import CreditCardForm  from './creditCardForm/creditform';

class CreditCard extends Component {

    render() {
        return (
            <div className='main-app'>
                <Header />
                <div className="credit-container">
                    <div className="text-center">
                        <ul>
                            <li className="active">Personal Details</li>
                            <li>Great Offers</li>
                            <li>e-Approval</li>
                        </ul>
                    </div>
                    <CreditCardForm />
                </div>
            </div>
        );
    }
}

export default CreditCard;