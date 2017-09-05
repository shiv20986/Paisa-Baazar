import React, { Component, PropTypes } from 'react';
import './cards.scss';

const cards = [
    {"label": "Personal Loan", "url": "#"},
    {"label": "Credit Card", "url": "/creditCard.html"},
    {"label": "Free Credit Report", "url": ""},
    {"label": "Business Loan", "url": "#"},
    {"label": "Savings Account", "url": "#"},
    {"label": "Mutual Fund", "url": "#"},
    {"label": "Home Loan Transfer", "url": "#"},
    {"label": "Personal Loan", "url": "#"},
    {"label": "Car Loan", "url": "#"},
]

class Cards extends Component {

    render() {
        return (
            <section className="cards-section clearfix">
            {cards.map(function(v,i){
                return <Card item={v} key={i} />
            })

            }
            </section>
        )
    }
}

class Card extends Component {

    render(){
        var item = this.props.item;
        return (
            <div className={item.label.toLowerCase().split(' ').join('-') + " card-item"} >
                <a href={item.url}>
                    <div className="card-icon sprite-icon"></div>
                    <p className="card-label">{item.label}</p>
                </a>
            </div>
        )
    }
}

export default Cards;