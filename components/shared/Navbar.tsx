"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { routesArray } from "@/app/routes/Routes";
import { Link } from "react-scroll";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navbar = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "power2.out",
        duration: 2,
        y: 30,
      },
    });
    tl.from(navbar.current, { y: -10, delay: 3, opacity: 0 });
  }, []);
  return (
    <header
      className="navbar bg-transparent fixed top-0 z-10 justify-between backdrop-blur-sm py-0"
      ref={navbar}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-sans"
          >
            {
              routesArray.map(
                (each, i) => (
                  <li key={i}>
                      <Link to={each.name}>
                          {each.name}
                      </Link>
                  </li>
                )
              )
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BlueSanctuary</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-sans py-0">
        {
              routesArray.map(
                (each, i) => (
                  <li key={i}>
                      <Link to={each.name} duration={1000} smooth className="py-1">
                          {each.name}
                      </Link>
                  </li>
                )
              )
            }
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
