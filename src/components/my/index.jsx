import React, {Component} from 'react';
import './css/index.scss'
import backImg from './img/1.png'
let topStyle={
    background: `#f37d0f url(${backImg})`
}

class My extends Component {
    render() {
        return (
            <div className={'my'}>
                <div className={'my_top'} style={topStyle}>
                    <a href="/"><img src={require('./img/user.png')} alt=""/></a>
                    <a href="/">注册</a>
                    <span>/</span>
                    <a href="/">登录</a>
                </div>
                <div className={'my_menu'}>
                    <div className={'my_order'}>
                        <p>我的订单</p>
                        <a href="">全部订单</a>
                    </div>
                    <div className={'my_server'}>
                        <a href="/" className={'iconfont icon-daifukuan'}><p className={'menu'}>待付款</p></a>
                        <a href="/" className={'iconfont icon-daishouhuo'}><p className={'menu'}>待收货</p></a>
                        <a href="/" className={'iconfont icon-tuihuanxiu'}><p className={'menu'}>退换修</p></a>
                    </div>
                </div>
                <ul>
                    <li className={'my_list'}>
                        {/*<div className={'tab'}>*/}
                            <a href="/" className={'iconfont icon-huiyuanzhongxin'}>会员中心</a>
                        {/*</div>
                        <div className={'tab'}>*/}
                            <a href="/" className={'iconfont icon-wodeyouhuiquan'}>我的优惠</a>
                      {/*  </div>*/}
                    </li>
                    <li className={'my_list'}>
                        <a href="/" className={'iconfont icon-fuwuzhongxin'}>服务中心</a>
                        <a href="/" className={'iconfont icon-jia'}>小米之家</a>
                    </li>
                    <li className={'my_list'}>
                        <a href="/" className={'iconfont icon-f'}>F码通道</a>
                    </li>
                    <li className={'my_list'}>
                        <a href="/" className={'iconfont icon-shezhi'}>设置</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default My;