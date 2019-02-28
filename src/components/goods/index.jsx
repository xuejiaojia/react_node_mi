import React, {Component} from 'react';
import './css/index.scss'
class Goods extends Component {
    render() {
        return (
            <div className={'goods'}>
                <div className={'selecte'}>
                    <a href="/"><img src={require('./img/Selected.jpg')} alt=""/></a>
                    <ul>
                        <li><a href="/">
                            <img src={require('./img/Selected1.jpg')} alt=""/>
                            <p className={'good_title'}>小米8 青春版</p>
                            <p className={'good_des'}>2400万旗舰自拍</p>
                            <p className={'good_price'}>1299起</p>
                        </a></li>
                        <li><a href="/">
                            <img src={require('./img/Selected2.jpg')} alt=""/>
                            <p className={'good_title'}>小米8 屏幕指纹版</p>
                            <p className={'good_des'}>压感屏幕指纹，手持超级夜景</p>
                            <p className={'good_price'}>2499起</p>
                        </a></li>
                        <li><a href="/">
                            <img src={require('./img/Selected3.jpg')} alt=""/>
                            <p className={'good_title'}>黑鲨游戏手机 Helo</p>
                            <p className={'good_des'}>双液冷，更能打</p>
                            <p className={'good_price'}>3199起</p>
                        </a></li>
                        <li><a href="/">
                            <img src={require('./img/Selected4.jpg')} alt=""/>
                            <p className={'good_title'}>红米6</p>
                            <p className={'good_des'}>小屏高性能的双摄手机</p>
                            <p className={'good_price'}>729起</p>
                        </a></li>
                    </ul>
                    <a href="/">
                        <img src={require('./img/more.jpg')} alt=""/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Goods;