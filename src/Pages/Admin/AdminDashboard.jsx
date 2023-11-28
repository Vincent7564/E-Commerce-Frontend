import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import DashboardComplain from "../../Component/Dashboard/DashboardComplain";
import DashboardNewOrder from "../../Component/Dashboard/DashboardNewOrder";
import DashboardOrderOnProgress from "../../Component/Dashboard/DashboardOrderOnProgress";
import DashboardOrderOnDelivery from "../../Component/Dashboard/DashboardOrderOnDelivery";
import DashboardLowOnStock from "../../Component/Dashboard/DashboardLowOnStock";

const AdminDashboard = () => (
    <>
        <div className=" flex justify-center font-sans mb-3">
            <h1 className=" text-[30px] font-medium font-sans">
                Admin Dashboard
            </h1>
        </div>
        <div className="flex">
            <div className="rounded-lg p-5 w-[40%] mx-auto">
                <div>
                    <button className="mb-5 w-[100%] p-3 rounded bg-vnv-green-primary text-vnv-light hover:bg-vnv-green-dark">Open Order Detail</button>
                </div>

                <div>
                    <div className="flex mb-1 me-1">
                        <h1 className="w-[70%] px-2">Complain (2)</h1>
                        <button className="w-[30%] px-1  rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary">See All</button>
                    </div>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardComplain />
                    </div>
                </div>

                <div>
                    <h1 className="px-2 mb-1">Low on stock (2)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardLowOnStock />
                    </div>
                </div>
            </div>

            <div className="rounded-lg p-5 w-[40%] mx-auto">
                <div>
                    <div className="flex mb-1 me-1">
                        <h1 className="w-[70%] px-2">New Order (2)</h1>
                        <button className="w-[30%] px-1  rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary">See All</button>
                    </div>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardNewOrder />
                    </div>
                </div>

                <div>
                    <div className="flex mb-1 me-1">
                        <h1 className="w-[70%] px-2">Order on Process (2)</h1>
                        <button className="w-[30%] px-1  rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary">See All</button>
                    </div>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardOrderOnProgress />
                    </div>
                </div>

                <div>
                    <div className="flex mb-1 me-1">
                        <h1 className="w-[70%] px-2">Order on Delivery (2)</h1>
                        <button className="w-[30%] px-1 rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary">See All</button>
                    </div>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardOrderOnDelivery />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default AdminDashboard;
