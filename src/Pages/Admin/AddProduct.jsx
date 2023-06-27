import { Fragment } from "react";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const FormSchema = yup.object().shape({
    Price : yup
    .number()
    .min(1000, "Minimum Price is Rp. 1.000"),
    Qty : yup
    .number()
    .min(1, "Minimum qty is 1"),
  });

  const formik = useFormik({
    initialValues: {
      ProductName: "",
      Price: "",
      Description: "",
      Qty: "",
      ProductImage: ""
    },
    validationSchema: FormSchema,
    validateOnChange: true,
    
    onSubmit:async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        const response = await axios.post('/add-product', formData);
        
        // const response = await axios.post('/add-product', values);
        console.log("Values:")
        console.log("Values is:"+ response.status);
        if(response.status === 200){
          toast.success('Product added.',{
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error: ', error);
        toast.success('Unable to add product, Please Check and Try Again',{
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
        <img className=" w-60 h-50" src={require("../../Image/logo.png")} alt="" />
      </div>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className=" flex justify-center font-sans">
          <h1 className=" text-[30px] font-medium font-sans">
            Add New Product
          </h1>
        </div>
        <div className=" bg-cyan-300 pl-5 w-[25%] m-auto ">
          <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
            <div class="col-span-2">Product Name</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="ProductName"
                id="ProductName"
                onChange={formik.handleChange}
                value={formik.values.ProductName}
              />
            </div>

            <div class="col-span-2">Price</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="Price"
                id="Price"
                onChange={formik.handleChange}
                value={formik.values.Price}
              />
            </div>
            {formik.errors.Price && <div className="col-span-2 text-red-600">*{formik.errors.Price}</div>}
            
            <div class="col-span-2">Description</div>
            <div className="col-span-2">
              <textarea
                name="Description"
                id="Description"
                className="w-[95%]"
                cols="30"
                rows="5"
                onChange={formik.handleChange}
                value={formik.values.Description}
              ></textarea>
            </div>

            <div class="col-span-2">Qty</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8"
                name="Qty"
                id="Qty"
                onChange={formik.handleChange}
                value={formik.values.Qty}
              />
            </div>
            {formik.errors.Qty && <div className="col-span-2 text-red-600">*{formik.errors.Qty}</div>}
            
            <div class="col-span-2">Image</div>
            <div class="col-span-2">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                className="w-[95%] h-8"
                name="ProductImage"
                id="ProductImage"
                // onChange={formik.handleChange}
                onChange={(e) =>
                  formik.setFieldValue('ProductImage', e.target.files[0]) 
                }
              />
            </div>

            <div class="col-span-2 text-right pt-5 pb-2 pr-4">
              <button
                className=" p-3 bg-red-600"
                type="submit"
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
              >
                Add
              </button>
            </div>

          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
