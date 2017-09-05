import React, { Component, PropTypes } from 'react';
import './creditform.scss';

class CreditCardForm extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            occupation : "Salaried"
        }
    }

    change(event){
        this.setState({occupation: event.target.value});
    }

    render() {
        var label = this.state.occupation === 'Salaried' ? 'Monthly Income' : 'Annual Income';
        return (
            <div className="credit-form-container">
                <form name="personalInformation">
                    <div className="form-control">
                        <div className="input-left">
                            <div className="input-icon">
                                <i className="fa fa-user"></i>
                            </div>
                            <span className="input-label">Occupation</span>
                        </div>
                        <div className="input-right">
                            <select className="input-item" onChange={this.change.bind(this)} value={this.state.occupation}>
                                <option value="Salaried">Salaried</option>
                                <option value="Self Employed Professional">Self Employed Professional</option>
                                <option value="Self Employed Business">Self Employed Business</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-left">
                            <div className="input-icon">
                                <i className="fa fa-circle fa-lg"></i>
                                <i className="fa fa-inr inr-icon"></i>
                            </div>
                            <span className="input-label">{label}</span>
                        </div>
                        <div className="input-right">
                            <input className="input-item" placeholder={label} type="text"></input>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-left">
                            <div className="input-icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <span className="input-label">Residence City</span>
                        </div>
                        <div className="input-right">
                            <select className="input-item" >
                                <option value="Salaried">Salaried</option>
                                <option value="Self Employed Professional">Self Employed Professional</option>
                                <option value="Self Employed Business">Self Employed Business</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-left">
                            <div className="input-icon">
                                <i className="fa fa-mobile fa-lg"></i>
                            </div>
                            <span className="input-label">Mobile No.</span>
                        </div>
                        <div className="input-right">
                            <input className="input-item" placeholder="Mobile No." type="text"></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreditCardForm;