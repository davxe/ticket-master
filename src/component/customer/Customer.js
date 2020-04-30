import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetCustomer} from '../../actions/customerAction'

function Customer(props)
{
    if(props.customer.length == 0) {
        props.dispatch(startSetCustomer())
    }
    console.log(props.customer)
    return(
        <div>
            <h2>Customers-{props.customer.length}</h2>
            <table border='0'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.customer.map((ele,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.mobile}</td>
                                    <td><button>show</button></td>
                                    <td><button>remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to='/users/customer/addcustomer'>Add Customer</Link>
            
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        customer:state.customer
    }
}
export default connect(mapStateToProps)(Customer)