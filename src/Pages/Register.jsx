import { Fragment } from "react";

const Register = () => {
  return (
    <>
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../Image/logo.png")} alt="" />
      </div>
      <div className=" flex justify-center font-sans">
        <h1 className=" text-[30px] font-medium font-sans">Create Your Account</h1>
      </div>
      <div className=" bg-cyan-300 pl-5 w-[25%] m-auto ">
        <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
          <div class="col-span-2">Username</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8" name="" id="" /></div>
          <div class=" col-span-1 ">First Name</div>
          <div class=" col-span-1">Last Name</div>
          <div class="col-span-1"><input type="text" className="w-[90%] h-8" name="" id="" /></div>
          <div class="col-span-1"><input type="text" className="w-[90%] h-8" name="" id="" /></div>
          <div class="col-span-2">Email</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8" name="" id="" /></div>
          <div class=" col-span-1">Password</div>
          <div class=" col-span-1">Confirm Password</div>
          <div class="col-span-1"><input type="text" className="w-[90%] h-8" name="" id="" /></div>
          <div class="col-span-1"><input type="text" className="w-[90%] h-8" name="" id="" /></div>
          <div class="col-span-2">Address</div>
          <div className="col-span-2"><textarea name="" id="" className="w-[95%] " cols="30" rows="5"></textarea></div>
          <div class="col-span-2">Phone</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8" name="" id="" /></div>
          <div class="col-span-2 text-right pt-5 pb-2 pr-4"><button className=" p-3 bg-red-600" >Submit</button></div>
        </div>
      </div>
    </>
  );
};

export default Register;
