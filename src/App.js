import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './component/static/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Customer from './component/customer/Customer'
import AddCustomer from './component/customer/AddCustomer'
import {connect} from 'react-redux'
import { startUserLogout } from './actions/userAction'
function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                <h2>Ticket Master</h2>
                {
                    Object.keys(props.user).length!==0?(
                        <div>
                            <Link to='/'  style={{color:'blue',margin:'10px'}}>Home</Link>
                            <Link to='/users/customer' style={{color:'blue',margin:'10px'}}>Customer</Link>
                            <Link to='/users/department' style={{color:'blue',margin:'10px'}}>Department</Link>
                            <Link to='/users/employees' style={{color:'blue',margin:'10px'}}>Employees</Link>
                            <Link to='/users/tickets' style={{color:'blue',margin:'10px'}}>Tickets</Link>                            
                            <Link to='#' style={{color:'blue',margin:'10px'}} onClick={handleLogout}>Logout</Link>
                        </div>
                    ):(
                        <div>
                            <Link to='/'  style={{color:'blue'}}>Home</Link>
                            <Link to='/users/login' style={{color:'blue',margin:'10px'}}>Login</Link>
                            <Link to='/users/register' style={{color:'blue'}}>Register</Link>
                        </div>
                    )
                }
                
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
                    <Route path='/users/customer' component={Customer} exact={true}/>
                    <Route path='/users/customer/addcustomer' component={AddCustomer}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user,
        customer:state.customer
    }
}

export default connect(mapStateToProps)(App)