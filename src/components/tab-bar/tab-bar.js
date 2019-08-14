import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '最新', path: '/news', icon: 'icon-homepage', selectIcon: 'icon-homepage_fill'},
        {id: 2, name: '图说', path: '/picture/1', icon: 'icon-createtask', selectIcon: 'icon-createtask_fill'},
        {id: 3, name: '发现', path: '/discover', icon: 'icon-integral', selectIcon: 'icon-integral_fill'},
        {id: 5, name: '我的', path: '/mine', icon: 'icon-addressbook', selectIcon: 'icon-addressbook_fill'}
    ];

    return (
        <nav className="tab-bar border-top">
        {
            navList.map(item=>(
                <NavLink className="tab-item" key={item.id} to={item.path}>
                    <span className={`iconfont nomal ${item.icon}`}></span>
                    <span className={`iconfont select ${item.selectIcon}`}></span>
                    <span>{item.name}</span>
                </NavLink>
            ))
        }
        </nav>
    )
}