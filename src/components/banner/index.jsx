import React, {Component} from 'react';
import './css/index.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css' /*引入才可使用分页器样式*/
class Banner extends Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',  //分页器 ，使用需要引入css
            },
        })
    }
    render() {
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'}>
                    <li className={'swiper-slide'}><a href="/"><img src={require('./img/banner1.jpg')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href="/"><img src={require('./img/banner2.jpg')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href="/"><img src={require('./img/banner3.jpg')} alt=""/></a></li>
                </ul>
                <div class="swiper-pagination"></div>
            </div>
        );
    }
}

export default Banner;