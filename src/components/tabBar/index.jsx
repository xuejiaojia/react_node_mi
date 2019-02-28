import React, {Component} from 'react';
import './css/index.scss'
class TabBar extends Component {
    render() {
        return (
            <div className={'bar'}>
                <div className={'content'}>
                <a href="/" className={'iconfont icon-index'}><p className={'menu'}>首页</p></a>
                <a href="/" className={'iconfont icon-fenleichaxun'}><p className={'menu'}>分类</p></a>
                <a href="/" className={'iconfont icon-qicheqianlian-1-copy'}><p className={'menu'}>购物车</p></a>
                <a href="/" className={'iconfont icon-wode'}><p className={'menu'}>我的</p></a>
                </div>
            </div>
        );
    }
}

export default TabBar;