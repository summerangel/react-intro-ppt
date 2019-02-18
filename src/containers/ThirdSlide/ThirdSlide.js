/**
 * Created by summer on 2019/2/16.
 */
import React, { Component } from 'react';

import './ThirdSlide.scss';

export default class ThirdSlide extends Component {
    state = {

    };

    renderContent = () => {
        return <p>首先当然是要介绍我喜欢的 html和js 融合的jsx语法啦（虽然不用也是可以的，但是jsx和react更配哦），简单方便，不用记多余的api，看我就是jsx实现的←，看下面 ↓</p>;
    };

    render() {
        return (
            <div className="section">
                <div className="container-wrapper third-slide-wrapper">
                    <h4>JSX语法</h4>
                    {this.renderContent()}
                    <img style={{width: '100%'}} src={require('../../assets/jsxContent.jpg')} alt=""/>
                    <p>通过代码，你也可以发现react中直接添加style样式传的是对象而不是像html中一样的字符串，更多关于jsx的知识，可以去react官网看，写的很清楚 😁</p>
                    <p>稍等，可能你还发现了，添加类的时候，并不是class，而是 className,对，在react中，将class换成了className, 还有添加事件的时候是onClick不是onclick，这也是jsx语法(为了跟javascript区别，jsx采用驼峰命名)。</p>
                </div>
            </div>
        )
    }
}