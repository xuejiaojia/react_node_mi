import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Head from './components/head'
import Banner from './components/banner'
import Category from './components/cateGory'
import Recommend from './components/recommend'
import Conference from './components/conference'
import Goods from './components/goods'
import TabBar from './components/tabBar'
import My from './components/my'


class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Head/>
          <Banner/>
          <Category/>
          <Recommend/>
          <Conference/>
          <Goods/>
          <TabBar/>
          <My/>
      </div>
        </Router>
    );
  }
}

export default App;
