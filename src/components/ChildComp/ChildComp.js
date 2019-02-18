/**
 * Created by summer on 2019/2/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './ChildComp';

export default class ChildComp extends Component {
    state = {

    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        onDataBack: PropTypes.func
    };

    static defaultProps = {
        title: '栗子演示',
        onDataBack: () => {}
    };

    handleDataBack = () => {
        const { onDataBack } = this.props;
        onDataBack && onDataBack('这是子组件传给父组件的参数');
    };

    render() {
        return (
            <div className="child-comp-wrapper" onClick={this.handleDataBack}>
                <h3>{this.props.title}</h3>
                我是子组件渲染出来的，点击我可以获取数据；
            </div>
        )
    }
}