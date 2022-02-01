import React from 'react'
import Navbar from './components/navbar/Navbar'
import './app.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Registration from './components/registration/Registration'

function App() {
  return (
      <BrowserRouter>
        <div className="app">
         <Navbar/>
         <div className='wrap'>
          <Switch>
            <Route path="/registration" component={Registration}/>
          </Switch>
         </div>
        </div>
      </BrowserRouter>    
  );
}

export default App;
