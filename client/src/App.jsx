import React from 'react'
import Navbar from './components/navbar/Navbar'
import './app.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Registration from './components/autorization/Registration'
import Login from './components/autorization/Login'
import {useSelector} from 'react-redux'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
      <BrowserRouter>
        <div className="app">
         <Navbar/>
         <div className='wrap'>
           {!isAuth && 
            <Switch>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
          </Switch>
          }
         
         </div>
        </div>
      </BrowserRouter>    
  );
}

export default App;
