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

const DashboardOrderOnProgress = () => {
  return (
    <>
        <Carousel responsive={responsive}>
            <div className="mx-2 text-center">tes</div>
            <div className="mx-2 text-center">tes</div>
            <div className="mx-2 text-center">tes</div>
        </Carousel>
    </>
  );
};

export default DashboardOrderOnProgress;
