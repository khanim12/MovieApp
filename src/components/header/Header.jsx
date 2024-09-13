import React, { useState } from "react";

import "./header.css";
import SearchBtn from "./SearchBtn";
import SignUp from "./SignUp";
import Login from "./Login";
function Header({onInput}) {
  const [showModal, setShowModal] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const isOpen = () => setShowModal(true);
  const isClose = () => setShowModal(false);
  const Open = () => setShowLog(true);
  const Close = () => setShowLog(false);

  return (
    <div className="header   flex gap-x-96 lg:justify-between	items-center  ">
      <h3 className="header-heading">Moodvies</h3>

      <div className=" header-left flex gap-x-16  ">
        <div >
          <SearchBtn onInput={onInput} />
        </div>

        <div className="flex gap-8 header-auth ">
          <button className="sign-btn" onClick={Open}>
          
            Login
          </button>
          {showLog && <Login close={Close} />}

          <button className="sign-btn" onClick={isOpen}>
            Sign Up
          </button>
          {showModal && <SignUp isClose={isClose} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
