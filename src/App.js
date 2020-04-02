import React from 'react'
import { BrowserRouter,Route,Link } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'



function App (){
   
  return (
    <BrowserRouter>
    <div>
      <Link to='/'></Link>
      <Route path='/' component={Login} exact={true}></Route>
      <Route path="/dashboard" component={Dashboard}/>
    
    </div>
    </BrowserRouter>
  )
}
export default App
