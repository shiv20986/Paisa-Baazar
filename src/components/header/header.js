import React, { Component, PropTypes } from 'react';
import './header.scss';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div>
                    <a href="/" title="Paisabazaar.com">
                        <img src="https://static.paisabazaar.com/components/images/home_page/paisalogo.png" className="logo" alt="paisabazaar" />
                    </a>
                    <ul className="header-icons">
                        <li className="header-icon-c">
                            <a href="#" className="header-icon navbar-btn">
                                <img className="call-icon" src="https://static.paisabazaar.com/components/images/home_page/new-call.png" alt="call" />
                            </a>
                        </li>
                        <li className="header-icon-c">
                            <a href="#" className="header-icon user-icon-link navbar-btn">
                                <span className="user-icon sprite-icon icon"></span>
                            </a>
                        </li>
                        <li className="header-icon-c">
                            <a href="#" className="header-icon navbar-btn menu-btn">
                                <span className="header-icon icon-bar"></span>
                                <span className="header-icon icon-bar"></span>
                                <span className="header-icon icon-bar"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;