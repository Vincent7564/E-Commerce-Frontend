import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DashboardLowOnStock = () => {
  return (
    <>
        <div>
            <div className="flex my-1">
                <p className="text-vnv-green-dark w-[60%]"><b>sepatu baru</b></p>
                <p className="text-vnv-green-dark w-[20%]"><b>2</b></p>
                <div className="w-[20%]">
                    <button className="w-[95%] rounded bg-vnv-green-primary text-vnv-light hover:bg-vnv-green-dark">Add</button>
                </div>
            </div>

            <div className="flex my-1">
                <p className="text-vnv-green-dark w-[60%]"><b>sepatu lama</b></p>
                <p className="text-vnv-green-dark w-[20%]"><b>3</b></p>
                <div className="w-[20%]">
                    <button className="w-[95%] rounded bg-vnv-green-primary text-vnv-light hover:bg-vnv-green-dark">Add</button>
                </div>
            </div>

            <div className="flex my-1">
                <p className="text-vnv-green-dark w-[60%]"><b>sepatu bekas</b></p>
                <p className="text-vnv-green-dark w-[20%]"><b>5</b></p>
                <div className="w-[20%]">
                    <button className="w-[95%] rounded bg-vnv-green-primary text-vnv-light hover:bg-vnv-green-dark">Add</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default DashboardLowOnStock;
