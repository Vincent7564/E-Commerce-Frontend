import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1152 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1152, min: 768 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 384 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 384, min: 0 },
      items: 1
    }
  };

const DashboardComplain = () => {
  return (
    <>
        <Carousel responsive={responsive}>
            <div>
                <p className="text-vnv-green-dark"><b>Order no. ORD/240112/0012</b></p>
                <p className="text-vnv-dark-grey">Complain Date: 12 Jan 2024</p>
            </div>

            <div>
                <p className="text-vnv-green-dark"><b>Order no. ORD/240112/0012</b></p>
                <p className="text-vnv-dark-grey">Complain Date: 12 Jan 2024</p>
            </div>
        </Carousel>
    </>
  );
};

export default DashboardComplain;
