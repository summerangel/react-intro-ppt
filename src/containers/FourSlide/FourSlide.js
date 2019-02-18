/**
 * Created by summer on 2019/2/16.
 */
import React, { Component } from 'react'

import './FourSlide.scss'

export default class FourSlide extends Component {
    state = {
        btnText: '我是点击之前的值',
        arr: ['React', 'vue', 'angular'],
        isShow: true
    };

    handleBtnTextChange = () => {
      this.setState({
          btnText: '我是点击之后的值, 3s后我将变回去'
      });
      setTimeout(() => {
          this.setState({
              btnText: '我是点击之前的值'
          })
      }, 3000)
    };

    handleTextShow = () => {
        this.setState({
            isShow: false
        });
        setTimeout(() => {
            this.setState({
                isShow: true
            })
        }, 3000)
    };

    render() {
        return (
            <div className="section">
                <div className="container-wrapper four-slide-wrapper">
                    <h4>1、State</h4>
                    <p>state只能维护该类里面的数据变化</p>
                    <button onClick={this.handleBtnTextChange}>{this.state.btnText}</button>
                    <h4>2、列表 && keys</h4>
                    <p>在react中，你想循环一个数据，只要跟js里面的写法一样就可以，通过map来循环，相当于vue中的v-for,以下是循环出来的：</p>
                    <ul>
                        {
                            this.state.arr.map((a, i) => {
                                return <li key={i}>{a}</li>
                            })
                        }
                    </ul>
                    <span>一般会在循环的数据加上key来提升性能</span>
                    <h4>3、条件渲染</h4>
                    <p>在react中，想要隐藏一个数据，可以通过js语法来控制，相当于vue中的v-if/v-show</p>
                    {
                        this.state.isShow && <button onClick={this.handleTextShow}>点我隐藏，3s后我会出来</button>
                    }
                </div>
            </div>
        )
    }
}