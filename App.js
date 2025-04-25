import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Routes from "./src/routes";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return <Routes />;
}
