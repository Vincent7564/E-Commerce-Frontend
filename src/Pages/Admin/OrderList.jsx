import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import "../Admin/OrderList.css";

// const MENU_ACTIVE = ""

// const MENU_NEW = "MENU_NEW"
// const MENU_ON_PROGRESS = "MENU_ON_PROGRESS"
// const MENU_SENT = "MENU_SENT"
// const MENU_DELIVERED = "MENU_DELIVERED"
// const MENU_COMPLETE = "MENU_COMPLETE"
// const MENU_CLOSED = "MENU_CLOSED"
// const MENU_COMPLAIN = "MENU_COMPLAIN"

function tes(){
    console.log("tes")
}

const OrderList = () => (

    <>
        <div className=" flex justify-center font-sans mb-3">
            <h1 className=" text-[30px] font-medium font-sans">
                Order List
            </h1>
        </div>
        <div className=" flex justify-center font-sans mb-3">
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>New</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>On Progress</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>Sent</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>Delivered</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>Complete</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>Closed</button>
            <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={tes}>Complain</button>
        </div>
        
    </>
);

export default OrderList;
