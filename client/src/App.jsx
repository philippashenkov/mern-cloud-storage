import React from 'react'
import Navbar from './components/navbar/Navbar'
import './app.css'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import Registration from './components/autorization/Registration'
import Login from './components/autorization/Login'
import {useSelector} from 'react-redux'
import Disk from './components/disk/Disk'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
      <BrowserRouter>
        <div className="app">
         <Navbar/>
         <div className='wrap'>
           {!isAuth ?
            <Switch>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
            <Redirect to="/login"/>
          </Switch>
          :
          <Switch>
            <Route path="/" component={Disk}/>
            <Redirect to="/"  />
          </Switch>
          }
         </div>
        </div>
      </BrowserRouter>    
  );
}

export default App;
