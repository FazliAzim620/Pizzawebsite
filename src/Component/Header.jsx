import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="banner_content">
          <div className="container">
            <div className="banner__text">
              <h3>Pizza Delivery</h3>
              <h1>Hot & Spicy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione libero excepturi harum reprehenderit{" "}
              </p>
               <div className="banner__btn">
                <a href="" className="btn btn-smart">
                  DEVLERY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
