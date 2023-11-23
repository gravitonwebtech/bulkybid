

import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { useTypewriter, Cursor } from "react-simple-typewriter";



const Navbar = () => {

  const [text] = useTypewriter({
    words: [
      "Your trusted bidding Platform.",
      "Providing the best user experience for customers.",
      "Delivery on time on demand.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });


  return (
    <>
    <div className="w-full bg-banner-bg bg-center">
        <div className="w-full bg-black opacity-80 text-white">
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">BulkyBid</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">Home</li>
          <li className="navbarLi">Pages</li>
          <li className="navbarLi">Services</li>
          <li className="navbarLi">Portfolio</li>
          <li className="navbarLi">Blog</li>
          <li className="navbarLi">Shop</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-hoverColor" />
          <div className="relative">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
            Get in Touch
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>

    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl uppercase font-bold">
        Bulkybid
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
    </div>
  </div>
    </>
  )
}

export default Navbar