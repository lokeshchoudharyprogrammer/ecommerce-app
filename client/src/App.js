
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import { Policy } from './pages/Policy';
import { Pagenotefound } from './pages/Pagenotefound';
import AllRouter from './Router/AllRouter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <AllRouter />
    </>
  );


}

export default App;

