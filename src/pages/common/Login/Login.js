import React from 'react';
import Header from '../../../components/app-header/app-header'
import './style.scss'

export default (props)=>{
    const loginWays = [
        {id: 'weixin', name: '微信', url: '/images/weixin.png'},
        {id: 'qq', name: 'QQ', url: '/images/qq.png'},
        {id: 'weibo', name: '微博', url: '/images/weibo.png'}
    ];

    return (
        <div id="login" className="page subpage">
            <Header title="喜茶时光"/>

            <div className="content">
                <img className="logo" src="/images/logo.jpg" alt="logo"/>

                <div className="input-wrap phone-input">
                    <label>手机号：</label>
                    <input type="text"/>
                    <span>发送验证码</span>
                </div>
                <div className="input-wrap code-input">
                    <label>验证码：</label>
                    <input type="text"/>
                </div>
                <div className="login-btn">
                    登录
                </div>

                <div className="other-login-ways">
                    <p className="title">其他登录方式</p>
                    <ul className="login-ways">
                    {
                        loginWays.map(item=>(
                            <li className="login-item" key={item.id}>
                                <img src={item.url} alt=""/>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>

        </div>
    )
}