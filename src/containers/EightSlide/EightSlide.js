/**
 * Created by summer on 2019/2/17.
 */
import React, { Component } from 'react';

import './EightSlide.scss';

export default class EightSlide extends Component {
    render() {
        return (
            <div className="section">
                <div className="container-wrapper">
                    <h4>生命周期</h4>
                    <img src={require('../../assets/react-lifestyle.webp')} alt=""/>
                </div>
            </div>
        )
    }
}