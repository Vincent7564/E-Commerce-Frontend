import { Fragment } from "react";
import  axios  from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess,loginFailure } from "../Actions";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const AuthLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password
      });

      console.log(response.data);
      console.log(response.status);

      if (response.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data
        });
        localStorage.firstName = response.data.firstName
        localStorage.lastName = response.data.lastName
        localStorage.email = response.data.email
        // localStorage.user = response.data
        setTimeout(function() {
          navigate('/')}
          ,1000)
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.response.data.message
      });
      console.error(error);
    }
  };

  useEffect(() => {
    if (email && password) {
      AuthLogin();
    }
  }, []);
  
  const handleEmailChange =(event)=>{
    setEmail(event.target.value)
  }
  const handlePasswordChange =(event)=>{
    setPassword(event.target.value)
  }
  const handleSignIn = () => {
    AuthLogin(email, password);
    
  };

  return (
    <>
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../Image/logo.png")} alt="" />
      </div>
      <div className=" flex justify-center mb-3">
        <h1 className=" text-[30px] font-sans">Sign In</h1>
      </div>
      <div className=" bg-white pl-5 w-[25%] m-auto pb-3">
        <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
          <div class="col-span-2">Email</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey" name="" id="email" onChange={handleEmailChange} /></div>
          <div class="col-span-2">Password</div>
          <div class="col-span-2"><input type="password" className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey" name="" id="password" onChange={handlePasswordChange} /></div>
          <div class="col-span-2 text-center pt-10 pe-4"><button className="w-[95%] py-2 rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary" onClick={handleSignIn}>Sign in</button></div>
          <div class="col-span-2 text-center pr-4">or</div>
          <div class="col-span-2 text-center pb-2 pe-4"><button className="w-[95%] py-2 rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary" ><a href="/register">Register</a></button></div>
        </div>
      </div>
    </>
  );
};

export default Login;
