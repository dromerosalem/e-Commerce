import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './page/homepage/HomePage'
import ShopPage from './page/shop/ShopPage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'



function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
