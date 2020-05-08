import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetCustomer,startRemoveCustomer} from '../../actions/customerAction'

function Customer(props)
{
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure')
        if(confirmRemove)
        {
            props.dispatch(startRemoveCustomer(id))
        }
    }
    if(props.customer.length == 0) {
        props.dispatch(startSetCustomer())
    }
    console.log(props.customer)
    return(
        <div>
            <h2>Customers-{props.customer.length}</h2>
            <table border='0' style={{textAlign:"center",background:'rgb(219, 216, 35)'}}>
                <thead>
                    <tr style={{background:"blue"}}>
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
                                    <td><button style={{background:"rgb(18, 237, 14)",textDecoration:"none"}}>show</button></td>
                                    <td><button onClick={()=>handleRemove(ele._id)} style={{background:"red"}}>remove</button></td>
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