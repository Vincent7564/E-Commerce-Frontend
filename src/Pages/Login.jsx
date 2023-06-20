import { Fragment } from "react";

const Login = () => {
  return (
    <>
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../Image/logo.png")} alt="" />
      </div>
      <div className=" flex justify-center">
        <h1 className=" text-[30px] font-sans">Sign In</h1>
      </div>
      <div className=" bg-cyan-300 pl-5 w-[25%] m-auto ">
        <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
          <div class="col-span-2">Username</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8" name="" id="" /></div>
          <div class=" col-span-2">Password</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8" name="" id="" /></div>
          <div class="col-span-2 text-center pt-10 pr-4"><button className="w-[95%] p-2 bg-red-600" >Submit</button></div>
          <div class="col-span-2 text-center pr-4">or</div>
          <div class="col-span-2 text-center pb-2 pr-4"><button className="w-[95%] p-2 bg-red-600" >Register</button></div>
        </div>
      </div>
    </>
  );
};

export default Login;
