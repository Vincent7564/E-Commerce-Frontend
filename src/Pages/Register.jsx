import { Fragment } from "react";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
  const FormSchema = yup.object().shape({
    Password: yup
      .string()
      .required("Password Must Be Filled")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    cpassword: yup
      .string()
      .required("Confirm Password Must Be Filled")
      .oneOf([yup.ref("Password"), null], 'Must match "Password" field value'),
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
      Username: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Address: "",
      Phone: "",
    },
    validationSchema: FormSchema,
    validateOnChange: true,
    onSubmit:async (values, { setSubmitting }) => {
      try {
        console.log('Form values:', values);
        const response = await axios.post('/register', values);
        console.log("Values:")
        console.log("Values is:"+ response.status);
        if(response.status === 200){
          props.setToastMessage('Registration Success!!!')
          toast.success('Registration Success!!!',{
            position: toast.POSITION.TOP_CENTER,
            autoClose:3000
          })
          setTimeout(function() {
            window.location.href=`/`}
            ,3000)
        }
        
      } catch (error) {
        if (error.response && error.response.status === 403) {
          // Handle custom error message from the backend
          toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000
          });
        }else {
          console.error('Error: ', error);
          toast.error('Registration Error :(, Please Check and Try Again', {
              position: toast.POSITION.TOP_CENTER
          });
      }
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
            Create Your Account
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
            <div class=" col-span-1">Password <span className=" text-red-600">*</span></div>
            <div class=" col-span-1">Confirm Password <span className=" text-red-600">*</span></div>
            <div class="col-span-1">
              <input
                type="password"
                className="w-[90%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Password"
                onChange={formik.handleChange}
                value={formik.values.Password}
              />
            </div>

            <div class="col-span-1">
              <input
                type="password"
                className="w-[90%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="cpassword"
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.Password && <div className="col-span-2 text-red-600">*{formik.errors.Password}</div>}
            {formik.errors.cpassword && <div className="col-span-2 text-red-600">*{formik.errors.cpassword}</div>}
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

export default Register;
