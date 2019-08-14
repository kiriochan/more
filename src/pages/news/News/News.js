import React from 'react'
import {Link, Switch} from 'react-router-dom'
import './style.scss'

import Header from '../../../components/app-header/app-header'

const Mine = (props)=>{
    let mineList = [
        {id: 1, name: '我的收藏', path: ''},
        {id: 2, name: '我的观点', path: ''},
        {id: 3, name: '我关注的用户', path: ''},
        {id: 4, name: '关注我的用户', path: ''},
        {id: 5, name: '我赞过的观点', path: ''},

    ];

    return (
        <div className="page" id="mine">
            <Header title="我的" />

            <div className="mine-banner">
                <Link>头像</Link>
                <Link><span>李雪琴</span><span>女</span></Link>
                <Link to="/home/coupon"><span>点击修改个人资料</span></Link>
            </div>

            <ul className="mine-nav">
            {
                mineList.map(item=>(
                    <li className="mine-items" key={item.id}>
                        <Link to={item.path}>
                            <span>{item.name}</span>
                            <span className="to-right">></span>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Mine;