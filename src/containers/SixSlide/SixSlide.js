/**
 * Created by summer on 2019/2/16.
 */
import React, { Component, Fragment } from 'react'

import './SixSlide.scss'

export default class SixSlide extends Component {
    state = {
        arrData: ['React is great', 'Css is awesome', 'Vue is easy to use']
    };

    render() {
        return (
            <div className="section">
                <div className="container-wrapper">
                    <h4>Fragment</h4>
                    <p>有时候你可能会遇到这种情况，li必须嵌套在ul里面，table里面的td必须嵌套在tr里面，但当你想循环出来的时候怎么办呢，这时候Fragment就出场了⬇️</p>
                    <ul>
                        {
                            this.state.arrData.map((a, i) => {
                                return (
                                    <Fragment>
                                        <li>{a}</li>
                                        <span>😁</span>
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}