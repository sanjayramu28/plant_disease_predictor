"use client"
import Home from './Home/page.js';
import Upload from './Upload/page.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Feedback from './Feedback/Feedback.js';
// import  './Feedback/Feedback.css';
import Navbar from "../app/Navbar/Navbar.js"

export default function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Home />
    {/* <Upload/> */}
    </>
  );
}
