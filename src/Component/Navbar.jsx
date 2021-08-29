import React from 'react';
const Navbar=()=>{
    return (
        <>
           <div className="navbar">
               <div className="navbar__text">
                   <div className="logo">
                 <img src="logo.jpg" alt="" />
                   </div>
                   <ul className='navbar__ul'>
                   
                       <li>  <a  href='#'>home</a></li>
                       <li>  <a href='#'>about</a></li>
                       <li>  <a href='#'>services</a></li>
                       <li>  <a href='#'>order</a></li>
                       <li>  <a href='#'>contact us</a></li>
                   </ul>
               </div>
           </div>
        </>
    )
}
export default Navbar;