import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage.jsx";

import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <MainPage/> } />
      {/* <Route path='/warehouse' component={WarehousePage} /> */}
      {/* <Route path='/inventory' component={InventoryPage} /> */}
    </Routes>
  );
}

export default App;
