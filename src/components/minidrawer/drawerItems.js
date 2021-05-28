import React from "react";
import { Person, TableChart, Dashboard } from "@material-ui/icons";

export const drawerItems = [
  { title: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
  { title: "Table", icon: <TableChart />, link: "/table" },
  { title: "User", icon: <Person />, link: "/user" }
];
