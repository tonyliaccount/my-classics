import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage.jsx";
import ReaderPage from "./Pages/ReaderPage/ReaderPage.jsx";

import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <MainPage/> } />
      <Route path='/search' element={ <MainPage/> } />
      <Route path='/search/:query' element={ <MainPage/> } />
      <Route path='/book/:id' element={ <ReaderPage/> } />
      {/* <Route path='/inventory' element={InventoryPage} /> */}
    </Routes>
  );
}

export default App;
