import React from "react";
import { Route, Routes } from "react-router-dom";
import DrawerModel from "../components/DrawerModel";
import ClientView from "../pages/ClientView";
import Items from "../pages/Items";

function RouterApp() {
  return (
    <Routes>
      <Route path="*" element={<h1>No encontrado... (404)</h1>}></Route>
      <Route path="/" element={<DrawerModel />}></Route>
      <Route path="/ClientView" element={<ClientView/>}></Route>
      <Route path="/Items" element={<Items/>}></Route>
    </Routes>
  );
}

export default RouterApp;
