import React from 'react'
import {connect} from 'react-redux'
import { startLoginCustomer } from '../../actions/customerAction'

class AddCustomer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:''

        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log('add custoomer',formData)
        const redirect=()=>{
            return this.props.history.push('/users/customer')
        }
        this.props.dispatch(startLoginCustomer(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    
    render()
    {
        // console.log('add customer',this.state)
        return(
            <div>
                <h2>Add Customer</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                        name='name'
                        id='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='customer name'
                    /><br/><br/>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                        name='email'
                        id='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='customer email'
                    /><br/><br/>
                    <label htmlFor='mobile'>Mobile</label>
                    <input type='text'
                        name='mobile'
                        id='mobile'
                        value={this.state.mobile}
                        onChange={this.handleChange}
                        placeholder='customer mobile'
                    /><br/><br/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        customer:state.customer
    }
}
export default connect(mapStateToProps)(AddCustomer)