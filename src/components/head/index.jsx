import React, {Component} from 'react';
import './css/index.scss'
class Head extends Component {
    render() {
        return (
            <div className={'index_top'}>
                <div className={'logo'}>
                    <img src={require('./img/logo.png')} alt="" width={'100%'}/>
                </div>
                <div className={'search'}>
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>搜索商品名称</span>
                </div>
                <div className={'login iconfont icon-wode'}>
                </div>
            </div>
        );
    }
}

export default Head;