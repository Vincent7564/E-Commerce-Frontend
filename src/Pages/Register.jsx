import { Fragment } from "react";
import { useFormik, Field } from "formik";
import * as yup from "yup";

const Register = () => {
  const FormSchema = yup.object().shape({
    Password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], 'Must match "Password" field value'),
    Email : yup
      .string()
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,"Please Enter The Correct Email!"),
    Phone : yup
      .string()
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
  });

  return (
    <>
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../Image/logo.png")} alt="" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className=" flex justify-center font-sans">
          <h1 className=" text-[30px] font-medium font-sans">
            Create Your Account
          </h1>
        </div>
        <div className=" bg-cyan-300 pl-5 w-[25%] m-auto ">
          <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
            <div class="col-span-2">Username</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="Username"
                id="Username"
                onChange={formik.handleChange}
                value={formik.values.Username}
              />
            </div>
            <div class=" col-span-1 ">First Name</div>
            <div class=" col-span-1">Last Name</div>
            <div class="col-span-1">
              <input
                type="text"
                className="w-[90%] h-8"
                name="FirstName"
                id="FirstName"
                onChange={formik.handleChange}
                value={formik.values.FirstName}
              />
            </div>
            <div class="col-span-1">
              <input
                type="text"
                className="w-[90%] h-8"
                name="LastName"
                id="LastName"
                onChange={formik.handleChange}
                value={formik.values.LastName}
              />
            </div>
            <div class="col-span-2">Email</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="Email"
                id="Email"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
            </div>
            {formik.errors.Email && <div className="col-span-2 text-red-600">*{formik.errors.Email}</div>}
            <div class=" col-span-1">Password</div>
            <div class=" col-span-1">Confirm Password</div>
            <div class="col-span-1">
              <input
                type="password"
                className="w-[90%] h-8"
                name="Password"
                onChange={formik.handleChange}
                value={formik.values.Password}
              />
            </div>

            <div class="col-span-1">
              <input
                type="password"
                className="w-[90%] h-8"
                name="cpassword"
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.Password && <div className="col-span-2 text-red-600">*{formik.errors.Password}</div>}
            {formik.errors.cpassword && <div className="col-span-2 text-red-600">*{formik.errors.cpassword}</div>}
            <div class="col-span-2">Address</div>
            <div className="col-span-2">
              <textarea
                name="Address"
                id="Address"
                className="w-[95%]"
                cols="30"
                rows="5"
                onChange={formik.handleChange}
                value={formik.values.Address}
              ></textarea>
            </div>
            <div class="col-span-2">Phone</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="Phone"
                id="Phone"
                onChange={formik.handleChange}
                value={formik.values.Phone}
              />
            </div>
            {formik.errors.Phone && <div className="col-span-2 text-red-600">*{formik.errors.Phone}</div>}
            <div class="col-span-2 text-right pt-5 pb-2 pr-4">
              <button
                className=" p-3 bg-red-600"
                type="submit"
                onChange={formik.handleChange}
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
