"use client";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";

type RouteType = {
  name: string;
};

export const routesArray: RouteType[] = [
    {
        name: "Home",
    },
    {
        name: "Crisis"
    },
  {
    name: "About",
  },
  {
    name: "Get Involved"
  }
];

const Route = ({ id, children }: { id: string; children: ReactNode }) => {
  const route = routesArray.find((target) => target.name === id);

  const routeName = route?.name || "Home";

  return (
    <Element name={routeName}>
      {children}
    </Element>
  );
};

export default Route;
