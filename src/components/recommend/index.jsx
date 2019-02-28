import React, {Component} from 'react';
import './css/index.scss'
/*推荐*/
class Recommend extends Component {
    render() {
        return (
            <div className={'recommend'}>
                <a href=""><img src={require('./img/3.jpg')} alt=""/></a>
               <div className={'left'}>
                <a href=""><img src={require('./img/a.jpg')} alt=""/></a>
                <a href=""><img src={require('./img/2.jpg')} alt=""/></a>
               </div>
            </div>
        );
    }
}

export default Recommend;