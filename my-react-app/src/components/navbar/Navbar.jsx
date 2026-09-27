import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/coin.png'

const Navbar = ({ availableBalance }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
         <div className="flex-1">
           <a className=" text-xl"><img src={navImg} className="h-8 w-8" alt="Logo" /></a>
         </div>
         <div className="item-center flex gap-2">
           <img src={dollarImg} className="h-6 w-6" alt="Dollar" />
           <span>{availableBalance}</span>
           <span>crore</span>
         </div>
       </div>
    );
};

export default Navbar;