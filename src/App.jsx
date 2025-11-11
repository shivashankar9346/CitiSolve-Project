import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Mycomplaints from './pages/mycomplaints'
import SubmitComplaint from './pages/submitComplaint'
import './App.css'

const App = () => {
  
  const Router = createBrowserRouter([
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/login',
      element :
      <div>
        <Navbar/>
        <Login/>
      </div>
    },
    {
      path:'/register',
      element :
      <div>
        <Navbar/>
        <Register/>
      </div>
    },{
      path:'/mycomplaints',
      element:
      <div>
        <Navbar/>
        <Mycomplaints/>
      </div>
    },
    {
      path:'/submitComplaint',
      element:
      <div>
        <Navbar/>
        <SubmitComplaint/>
      </div>
    }
  ])
  return (
    <RouterProvider router={Router}/>
  )
}

export default App