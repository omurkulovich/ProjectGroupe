import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add/Add";
import AddList from "./components/AddList/AddList";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";



const Routing = () => {
  return (
    <>
      <BrowserRouter>
     
       <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<AddList />} />
          <Route path="/edit/:id" element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;