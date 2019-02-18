/**
 * Created by summer on 2019/2/16.
 */
import React, { Component } from 'react';

import './SecondSlide.scss';

export default class SecondSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="section second-slide-wrapper">
                <ul>
                    <li>
                        <a href="javascript:;" className="steps">
                            首先创建一个react项目目录，打开终端，执行：<code>create-react-app react-intro-ppt</code>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="steps">
                            进入目录并且运行（当你执行完上一步时，就已经安装好了依赖）: <code>cd react-intro-ppt && npm start</code>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="steps">
                            打开浏览器运行：<code>http://localhost:3000/</code>下面我们可以来愉快的学习react的语法了
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}