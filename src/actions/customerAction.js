import axios from '../config/axios'

export const setCustomer = (customer) => {
    return { 
        type: 'SET_CUSTOMERS', 
        payload: customer
    }
}

export const startSetCustomer = () => {
    return (dispatch) => {
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const customer = response.data 
                dispatch(setCustomer(customer))
            })
    }
}

export const addCustomer = (customer) => {
    return {
        type: 'ADD_CUSTOMER', 
        payload: customer 
    }
}

export const startLoginCustomer=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/customers',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                alert('successfully added')
                const customer = response.data
                dispatch(addCustomer(customer))
                // props.history.push('/users/login')
                redirect()
            }
        })
        .catch(err=>{
            console.log(err)
        })
        // console.log('action generator',formData)
    }
}
