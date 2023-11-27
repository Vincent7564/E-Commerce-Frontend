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
                    <h1 className="px-2">Complain (xx)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardComplain />
                    </div>
                </div>

                <div>
                    <h1 className="px-2">Low on stock (xx)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardLowOnStock />
                    </div>
                </div>
            </div>

            <div className="rounded-lg p-5 w-[40%] mx-auto">
                <div>
                    <h1 className="px-2">New Order (xx)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardNewOrder />
                    </div>
                </div>

                <div>
                    <h1 className="px-2">Order on Process (xx)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardOrderOnProgress />
                    </div>
                </div>

                <div>
                    <h1 className="px-2">Order on Delivery (xx)</h1>
                    <div className="rounded-lg mb-5 p-5 bg-white w-[100%]">
                        <DashboardOrderOnDelivery />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default AdminDashboard;
