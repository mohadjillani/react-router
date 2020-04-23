import React from 'react';
import Navbar from './navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contect from './component/Contect';
import FAQ from './component/FAQ'
import Post from './component/post'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Switch>
     <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contect" component={Contect}></Route>
      <Route path="/faq" component={FAQ}></Route>
      <Route path="/:post_id" component={Post}></Route>
     </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
