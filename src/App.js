import logo from './logo.svg';
import './App.css';
import Navbar from './Mycomponents/Navbar';
import Home from './Mycomponents/Home'
import About from './Mycomponents/About'
import Services from './Mycomponents/Services'
import Contact from './Mycomponents/Contact'
import Footer from './Mycomponents/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tools from './Mycomponents/Tools';

function App() {
  return (
     <>
      <Navbar/>
      
      <Route exact path="/" component={Home}/>          
      <Route exact path="#about" component={About}/>
      <Route exact path="#services" component={Services}/>
      <Route exact path="#contact" component={Contact}/>
      <Footer/>
     </>
  );
}

export default App;
