"use client";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";

type RouteType = {
  name: string;
};

const routesArray: RouteType[] = [
    {
        name: "home",
    },
    {
        name: "problem"
    },
  {
    name: "about",
  },
];

const Route = ({ id, children }: { id: string; children: ReactNode }) => {
  const route = routesArray.find((target) => target.name === id);

  const routeName = route?.name || "home";

  return (
    <Element name={routeName}>
      {children}
    </Element>
  );
};

export default Route;
