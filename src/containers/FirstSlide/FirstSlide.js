/**
 * Created by summer on 2019/2/16.
 */
import React, { Component } from 'react';

import logo from '../../logo.svg';
import './FirstSlide.scss';
import '../../App.css';

export default class FirstSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App section">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-link font-50 bold">
                        学习使用 React
                    </div>
                </header>
            </div>
        )
    }
}