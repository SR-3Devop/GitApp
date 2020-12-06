import React,{useState} from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import Singup from './pages/Singup'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Home from './pages/Home'
import { UserContext } from './Context/UserContext'
import Footer from './layout/Footer'
import Header from './layout/Header'
import firebaseConfig from './config/firebaseConfig'
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user,setUser] = useState(null)
  return (
  <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Singup}/>
        <Route exact path="*" component={ErrorPage}/>
      </Switch>
      <Footer/>
    </UserContext.Provider>
  </Router>
  )
}

export default App
