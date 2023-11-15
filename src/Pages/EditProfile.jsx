import { Fragment } from "react";
import { useFormik, Field } from "formik";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";

const EditProfile = () => {
  const [user, setUser] = useState({ 
    Username: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    Phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile-detail-data', { params: { email: localStorage.email } });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  const FormSchema = yup.object().shape({
    Username: yup
      .string()
      .required("Username Must Be Filled"),
    FirstName: yup
      .string()
      .required("First Name Must Be Filled"),
    Email : yup
      .string()
      .required("Email Must Be Filled")
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,"Please Enter The Correct Email!"),
    Phone : yup
      .string()
      .required("Phone Number Must Be Filled")
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"Please Enter A Valid Phone Number!")
  });

  const formik = useFormik({
    initialValues: {
      Username: user.username,
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email,
      Address: user.address,
      Phone: user.phone,
    },
    validationSchema: FormSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit:async (values, { setSubmitting }) => {
      try {
        const response = await axios.patch('/edit-profile', values);
        console.log("Values is:"+ response.status);
        if(response.status === 200){
          toast.success('Update Profile Success!!!',{
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error: ', error);
        toast.success('Update Profile Error :(, Please Check and Try Again',{
          position: toast.POSITION.TOP_CENTER
        })
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../Image/logo.png")} alt="" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className=" flex justify-center font-sans mb-3">
          <h1 className=" text-[30px] font-medium font-sans">
            Edit Profile
          </h1>
        </div>
        <div className=" bg-white pl-5 w-[40%] m-auto ">
          <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
            <div class="col-span-2">Username <span className=" text-red-600">*</span></div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Username"
                id="Username"
                onChange={formik.handleChange}
                value={formik.values.Username}
              />
            </div>
            <div class=" col-span-1 ">First Name <span className=" text-red-600">*</span></div>
            <div class=" col-span-1">Last Name <span className=" text-red-600">*</span></div>
            <div class="col-span-1">
              <input
                type="text"
                className="w-[90%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="FirstName"
                id="FirstName"
                onChange={formik.handleChange}
                value={formik.values.FirstName}
              />
            </div>
            <div class="col-span-1">
              <input
                type="text"
                className="w-[90%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="LastName"
                id="LastName"
                onChange={formik.handleChange}
                value={formik.values.LastName}
              />
            </div>
            <div class="col-span-2">Email <span className=" text-red-600">*</span></div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Email"
                id="Email"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
            </div>
            {formik.errors.Email && <div className="col-span-2 text-red-600">*{formik.errors.Email}</div>}
            <div class="col-span-2">Address <span className=" text-red-600">*</span></div>
            <div className="col-span-2">
              <textarea
                name="Address"
                id="Address"
                className="w-[95%] rounded-md border-2 border-vnv-light-grey"
                cols="30"
                rows="5"
                onChange={formik.handleChange}
                value={formik.values.Address}
              ></textarea>
            </div>
            <div class="col-span-2">Phone <span className=" text-red-600">*</span></div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Phone"
                id="Phone"
                onChange={formik.handleChange}
                value={formik.values.Phone}
              />
            </div>
            {formik.errors.Phone && <div className="col-span-2 text-red-600">*{formik.errors.Phone}</div>}
            <div class="col-span-2 text-right pt-5 pb-2 pr-4">
              <button
                className="rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5"
                type="submit"
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
