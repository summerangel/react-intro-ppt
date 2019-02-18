/**
 * Created by summer on 2019/2/16.
 */
import React, { Component } from 'react';

import ChildComp from '../../components/ChildComp/ChildComp';
import './FiveSlide.scss'

export default class FiveSlide extends Component {
    state = {
        backedData: ''
    };

    getBackData = (data) => {
        console.log('from child:', data);
        this.setState({
            backedData: data
        })
    };

    render() {
        return (
            <div className="section">
                <div className="container-wrapper">
                    <h4>父子传参</h4>
                    <p>在学习一门框架的时候，了解父子间传参是必须的，在react中，父组件传参是通过props参数来实现（这里跟vue差不多），而子组件传参给父组件是通过带参数的回调函数来实现，这里当然也可以通过事件订阅来实现，但这是借助第三方库来实现的</p>
                    <ChildComp title="栗子演示(我是父组件传过来的标题)" onDataBack={this.getBackData}/>
                    <p>点击出来的数据：<code>{this.state.backedData}</code></p>
                </div>
            </div>
        )
    }
}