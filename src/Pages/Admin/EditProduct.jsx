import { Fragment } from "react";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";

const EditProduct = (props) => {
  // routing id
  const params = useParams();
	const [products, setProducts] = useState({ 
      productName: "", 
      price: "",
      description: "",
      qty: "",
      productImage: "",
      discount: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Testing useEffect")
        console.log(params.id)
        const response = await axios.get('/api/product-detail-data', { params: { id: params.id } });
        console.log(response.data);
        console.log(response.status);
        setProducts(response.data);
        console.log("product:")
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
      
  const navigate = useNavigate();
  const FormSchema = yup.object().shape({
    Price : yup
    .number()
    .min(1000, "Minimum Price is Rp. 1.000"),
    Qty : yup
    .number()
    .min(1, "Minimum qty is 1"),
    Discount:yup
    .number()
    .min(0,"Minimum Discount is 0%")
    .max(100,"Maximum Discount is 100%")
  });
  const formik = useFormik({
    initialValues: {
      ProductName: products.productName,
      Price: products.price.$numberDecimal,
      Description: products.description,
      Qty: products.qty.$numberDecimal,
      ProductImage: products.productImage,
      Discount :products.discount.$numberDecimal,
    },
    validationSchema: FormSchema,
    validateOnChange: true,
    enableReinitialize: true,
    
    onSubmit:async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        formData.append("id", params.id)
        const response = await axios.patch('/edit-product', formData);
        
        console.log("Values:")
        console.log("Values is:"+ response.status);
        if(response.status === 200){
          toast.success('Product saved.',{
            position: toast.POSITION.TOP_CENTER
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Error: ', error);
        toast.error('Unable to save product, Please Check and Try Again',{
          position: toast.POSITION.TOP_CENTER
        })
        
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      
      <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../../Image/logo.png")} alt="" />
      </div>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className=" flex justify-center font-sans mb-3">
          <h1 className=" text-[30px] font-medium font-sans">
            Edit Product
          </h1>
        </div>
        <div className="rounded-lg bg-white pl-5 w-[50%] m-auto">
          <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
            <div class="col-span-2">Product Name</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
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
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
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
                className="w-[95%] rounded-md border-2 border-vnv-light-grey"
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
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Qty"
                id="Qty"
                onChange={formik.handleChange}
                value={formik.values.Qty}
              />
            </div>
            {formik.errors.Qty && <div className="col-span-2 text-red-600">*{formik.errors.Qty}</div>}
            <div class="col-span-2">Discount</div>
            <div class="col-span-2">
              <input
                type="text"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="Discount"
                id="Discount"
                onChange={formik.handleChange}
                value={formik.values.Discount}
              />
            </div>
            {formik.errors.Discount && <div className="col-span-2 text-red-600">*{formik.errors.Discount}</div>}
            <div class="col-span-2">Image</div>
            <div class="col-span-2">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                className="w-[95%] h-8 rounded-md border-2 border-vnv-light-grey"
                name="ProductImage"
                id="ProductImage"
                onChange={(e) =>
                  formik.setFieldValue('ProductImage', e.target.files[0]) 
                }
              />
            </div>

            <div class="col-span-2 text-right pt-5 pb-2 pr-4 mb-3">
              <button
                className="rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5"
                type="submit"
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
              >
                Save
              </button>
            </div>
            <redirect />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
