import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import content from "../content";

export default function Navigation() {
  return (
    <div
      style={{
        background: "#091C29",
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
       <div className="flex items-center w-10/12  mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-pink-500 inline-block ml-2  rounded-full"></span>
          </h1>
        </ScrollLink>

        <nav className="text-white text-xl">
        <ul>
          <li className="inline-block pt-4 pb-4">
            <Link to="/" className="pl-6 pr-6 rounded-lg mt-6 hover:bg-indigo-300">
              Home
            </Link>
          </li>          
          <li className="inline-block pt-4 pb-4">
            <Link to="/Articles-list" className="pl-6 pr-6 rounded-lg mt-6 hover:bg-indigo-300">
              Articles
            </Link>
          </li>
          <li className="inline-block pt-4 pb-4">
            <Link to="/About" className="pl-6 pr-6 rounded-lg mt-6 hover:bg-indigo-300">
              About
            </Link>
          </li>
        </ul>
      </nav>


        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="cursor-pointer pl-6 pr-6 rounded-lg mt-6 hover:bg-indigo-300" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>    
     
    </div>
  );
}
