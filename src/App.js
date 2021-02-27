import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route} from 'react-router-dom';
import Services from './components/Services/Services';
import withLazyComponent from './hoc/withLazyComponent';


//LazyLoading(Code Splitting)
const Home = withLazyComponent(React.lazy(()=> import('./components/Home/Home')));
const Store = withLazyComponent(React.lazy(()=> import('./components/Store/Store')));
const About = withLazyComponent(React.lazy(()=> import('./components/About/About')));
const FullService = withLazyComponent(React.lazy(()=> import('./components/Services/FullService/FullService')));
const Galary = withLazyComponent(React.lazy(()=> import('./components/Galary/Galary')));
const Contact = withLazyComponent(React.lazy(()=> import('./components/Contact/Contact')));
const BookAppointment = withLazyComponent(React.lazy(()=> import('./components/BookAppointment/BookAppointment')));


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/home"  component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
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
