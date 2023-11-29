import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import "../Admin/OrderList.css";

export default function OrderList() {
    let MENU_ACTIVE = ""
    let MENU_TITLE = ""

    const MENU_NEW = "MENU_NEW"
    const MENU_ON_PROGRESS = "MENU_ON_PROGRESS"
    const MENU_SENT = "MENU_SENT"
    const MENU_DELIVERED = "MENU_DELIVERED"
    const MENU_COMPLETE = "MENU_COMPLETE"
    const MENU_CLOSED = "MENU_CLOSED"
    const MENU_COMPLAIN = "MENU_COMPLAIN"

    function setMenau(menu){
        MENU_ACTIVE = menu
        console.log(MENU_ACTIVE)
    }

    const [menu, setMenu] = useState(MENU_NEW)
    const [title, setTitle] = useState("New Order")
    
    React.useEffect(() => {
        if (menu === MENU_NEW) {
          MENU_TITLE = 'New Order';
        } else {
          MENU_TITLE = 'tes';
        }
        console.log(MENU_TITLE)

        setTitle(MENU_TITLE)
      }, [menu]);
    
    return (
        <>
            <div className=" flex justify-center font-sans mb-3">
                <h1 className=" text-[30px] font-medium font-sans">
                    Order List
                </h1>
            </div>
            <div className=" flex justify-center font-sans mb-3">
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_NEW)}>New</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_ON_PROGRESS)}>On Progress</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_SENT)}>Sent</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_DELIVERED)}>Delivered</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_COMPLETE)}>Complete</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_CLOSED)}>Closed</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_COMPLAIN)}>Complain</button>
            </div>

            <div className="bg-white">
                <div className=" flex justify-center font-sans mb-3">
                    <h1 className=" text-[30px] font-medium font-sans">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    )
}

