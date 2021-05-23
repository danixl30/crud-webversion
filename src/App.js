import logo from './logo.svg';
import './App.css';
//import { Router, Route } from 'react-router';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import mainComponent from './components/main';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Create from './components/create';
import Edit from './components/edit';
//import { Switch } from '@headlessui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navegation from './components/navbar';
import Footer from './components/footer';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navegation/>
      <div className = "containerAll">
        <ToastContainer/>
        <Switch>
          {/* <Route path = "/" component = {navBar}/>           */}
          <Route path= "/" exact component={mainComponent}/>
          <Route path = "/user/login" component={Login} />
          <Route path = "/user/signup" component = {Signup}/>
          <Route path = "/home" exact component = {Home}/>
          <Route path = "/newnote" component = {Create}/>
          <Route path = "/edit/:id" component = {Edit}/>    
        </Switch>
      </div>
        
      <Footer/>             
      </Router>
    </div>
  );
}

export default App;
