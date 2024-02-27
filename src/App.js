import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import login from './components/pages/Login';
import Footer from './components/Footer';
import chatbot from './components/pages/chatbot';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={login} />
          <Route path = '/chatbot' component = {chatbot} />
        </Switch>
        {/* <Footer/> */}
      </Router>
      
    </>
  );
}

export default App;
