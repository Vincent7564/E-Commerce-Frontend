const data ={
    user:null,
    error:null
}

const userReducer = (state = data, action) => {
    console.log("User Reducer Below")
    console.log(state)
    console.log(action)
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return { ...state, user: action.payload, error: null };
      case "LOGIN_FAILURE":
        return { ...state, user: null, error: action.payload };
      default:
        return state;
    }
  };
export default userReducer;