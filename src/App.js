import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route} from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import FullService from './components/Services/FullService/FullService'
import Galary from './components/Galary/Galary';
import Contact from './components/Contact/Contact';
import BookAppointment from './components/BookAppointment/BookAppointment';
// import ServicesRoute from './components/Routes/ServicesRoutes/ServicesRoutes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/home"  component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        
        {/* <ServicesRoute subPath="/services" /> */}
        <Route path="/galary" component={Galary} />
        <Route path="/contact" component={Contact} />  
        <Route path="/book" component={BookAppointment} />
        <Switch>
          <Route path={'/services/:id'} exact component={FullService} />
          <Route path="/services" component={Services}/>
          <Redirect from="/" exact to="/home" />
        </Switch>
          
      </Layout>
    </BrowserRouter>
      
  );
}

export default App;
