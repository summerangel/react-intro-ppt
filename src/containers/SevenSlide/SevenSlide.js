/**
 * Created by summer on 2019/2/17.
 */
import React, { Component } from 'react';

import './SevenSlide.scss';

export default class SevenSlide extends Component {
    render() {
        return (
            <div className="section">
                <div className="container-wrapper">
                    <h4>组件类型</h4>
                    <p>在react中，组件分为：函数组件(Functional Component )和类组件(Class Component)、无状态组件(Stateless Component )和有状态组件(Stateful Component)、展示型组件(Presentational Component)和容器型组件(Container Component)</p>
                    <p>这是个概念性的，整个ppt理解了，就能开始入手react项目了</p>
                </div>
            </div>
        )
    }
}