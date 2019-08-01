import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar/nav";
import MainPage from './components/HomePage/Dashboard/MainPage'
import ProductDetails from './components/Product/ProductDetails';
import ControlDisplay from './controllers/control_display';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';

class App extends Component {
   state = {}
   render() {
      return (
         <BrowserRouter>
            <div>
               <NavBar />
               <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route path='/product/:id' component={ProductDetails} />
                  <Route path='/mantenimiento' component={ControlDisplay} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;