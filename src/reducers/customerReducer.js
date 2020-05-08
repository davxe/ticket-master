const customerInitialState=[]
const customerReducer=(state=customerInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_CUSTOMER' : {
            return [...state, action.payload]
        }
        case 'SET_CUSTOMERS': {
            return [...action.payload]
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(ele=>ele._id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default customerReducer