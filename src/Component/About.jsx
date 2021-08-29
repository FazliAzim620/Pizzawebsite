import React from 'react';
import pizza from './Images/pizza.jpg'

const About = () => {
    return (
        <>
        <div className='about'>
            <div className="container">
              <div className="row">
                  <div className="col-6">
                  <h3>About Us</h3>
                <h1>Welcome to Hot & Spicy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut numquam molestias amet nesciunt dicta magnam quibusdam soluta molestiae quod!</p>
            <div className="about__btn">
                <a href="#" className='btn btn-smart'>Order Now</a>
            </div>
                  </div>
                  <div className="col-6">
                      <div className="about__img">
                          <img src={pizza} alt="pizza" />
                      </div>
                  </div>
              </div>
            </div>
        </div>
            
        </>
    )
}

export default About
