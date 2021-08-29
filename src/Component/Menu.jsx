import React from "react";
import pizza from './Images/pizza.jpg';

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
      
          
          <div className="col-6">
            <div className="menu__img">
              <img src={pizza} alt="pizza" style={{padding:'0 20px '}}/>
            </div>
          </div>
          <div className="col-6">
            <h3>The Piza Menu</h3>
            <h1>Chicago thin crust</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut
              numquam molestias amet nesciunt dicta magnam quibusdam soluta
              molestiae quod!
            </p>
            <div className="menu__btn">
              <a href="#" className="btn btn-smart">
               Visit More
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Menu;
