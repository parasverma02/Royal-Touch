import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route} from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';

import Galary from './components/Galary/Galary';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services}/>
        <Route path="/galary" component={Galary} />
        <Route path="/contact" component={Contact} />
        <Switch>
          <Redirect from="/" to="/home" />
        </Switch>
          
      </Layout>
    </BrowserRouter>
      
  );
}

export default App;
