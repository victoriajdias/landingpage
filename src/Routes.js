import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom"

import Home from "./Home"
import Sobre from "./Sobre"
import Company from "./Company"




const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Company" element={<Company />} />
        
      </RoutesDom>
  )
}

export default Routes