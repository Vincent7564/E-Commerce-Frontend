import { useFormik, Field } from "formik";
import { useParams } from "react-router";
import axios from "axios";
import * as yup from "yup";

const ChangePassword = () => {
    // const FormSchema = yup.object().shape({
    //     Password: yup
    //       .string()
    //       .required("Password Must Be Filled")
    //       .min(8, "Password must be 8 characters long")
    //       .matches(/[0-9]/, "Password requires a number")
    //       .matches(/[a-z]/, "Password requires a lowercase letter")
    //       .matches(/[A-Z]/, "Password requires an uppercase letter")
    //       .matches(/[^\w]/, "Password requires a symbol"),
    //     cpassword: yup
    //       .string()
    //       .required("Confirm Password Must Be Filled")
    //       .oneOf([yup.ref("Password"), null], 'Must match "Password" field value'),
    //   });

    // const formik = useFormik({
    //     initialValues: {
    //       Password: "",
    //     },
    //     validationSchema: FormSchema,
    //     validateOnChange: true,
    //     onSubmit:async (values, { setSubmitting }) => {
    //       try {
    //         const formData = new FormData();
    //         for (let value in values) {
    //           formData.append(value, values[value]);
    //         }
    //         formData.append("id", params.id)
    //         const response = await axios.patch('/change-password', formData);
    
    //         console.log("Values:")
    //         console.log("Values is:"+ response.status);
    //         if(response.status === 200){
    //           toast.success('Update Password Success!!!',{
    //             position: toast.POSITION.TOP_CENTER
    //           })
    //         }
    //       } catch (error) {
    //         console.error('Error: ', error);
    //         toast.success('Update Password Error :(, Please Check and Try Again',{
    //           position: toast.POSITION.TOP_CENTER
    //         })
    //       } finally {
    //         setSubmitting(false);
    //       }
    //     },
    //   });
  return (
    <>
    {/* <form onSubmit={formik.handleSubmit}>
        <div className=" flex justify-center font-sans mb-3">
            <h1 className=" text-[30px] font-medium font-sans">
                Change Password
            </h1>
        </div>
        <div className=" bg-white pl-5 w-[40%] m-auto ">
            <div class="col-span-2">New Password <span className=" text-red-600">*</span></div>
                <div class="col-span-2">
                    <input
                        type="password"
                        className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                        name="Password"
                        id="Password"
                        onChange={formik.handleChange}
                        value={formik.values.Password}
                    />
                </div>
            {formik.errors.Password && <div className="col-span-2 text-red-600">*{formik.errors.Password}</div>}

            <div class="col-span-2">Confirm New Password<span className=" text-red-600">*</span></div>
                <div class="col-span-2">
                    <input
                        type="password"
                        className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                        name="cpassword"
                        id="cpassword"
                        onChange={formik.handleChange}
                        // value={formik.values.Email}
                    />
                </div>
            {formik.errors.Email && <div className="col-span-2 text-red-600">*{formik.errors.Email}</div>}

            <div class="col-span-2 text-right pt-5 pb-2 pr-4">
              <button
                className="rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5"
                type="submit"
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
              >
                Save
              </button>
            </div>
        </div>
    </form> */}
    </>
  );
};

export default ChangePassword;
