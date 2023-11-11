import React from "react";
import "./tooltip.css";

export default function ProfileTooltip_x({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip my-11 mx-2 w-[300px] text-vnv-green-dark bg-vnv-light border-vnv-light-grey border-2" style={show ? { visibility: "visible" } : {}}>
        {/* {text} */}
        <div className="text-vnv-black"><b>FirstName LastName</b></div>
        <div className="text-vnv-dark-grey">View Profile</div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            >
            setting
            </button>

            <button
            className="border-2 my-2 mx-5 p-3 w-40% rounded border-vnv-green-primary text-vnv-green-primary hover:text-vnv-green-dark hover:bg-vnv-green-dark py-2 px-5"
            >
            logout
            </button>
        </div>

        <div>
            <button
            className="border-2 my-2 mx-5 p-3 rounded bg-vnv-green-primary text-vnv-green-dark hover:text-vnv-light hover:bg-vnv-green-dark py-2 px-5"
            >
            View Transaction
            </button>
        </div>
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
