import React, {Component} from 'react';
import './css/index.scss'
class Category extends Component {
    render() {
        return (
            <div className={'category'}>
                <a href="/"><img src={require('./img/1.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/2.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/3.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/4.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/5.jpg')} alt=""/></a>
            </div>
        );
    }
}

export default Category;