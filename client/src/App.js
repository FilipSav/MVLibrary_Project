import React from 'react'
import './App.css';
import Main from "./pages/Main";
import AddVideos from "./pages/AddVideos";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Menu from "./componnents/Menu";
const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <Switch>
      <Route exact path ="/" component={Main}/>
      <Route exact path ="/add-video" component={AddVideos}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
