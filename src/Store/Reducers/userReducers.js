const data ={
    user:null,
    error:null
}

const userReducer = (state = data,action) =>{
    switch(action.command){
        case "SUCCESS":
            return{...state,user:action.payload, error:null};
        case "FAILED":
            return{...state,error:action.payload};
        default:
            return state;
    }
}

export default userReducer;