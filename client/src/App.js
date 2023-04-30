
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import { Policy } from './pages/Policy';
import { Pagenotefound } from './pages/Pagenotefound';
import AllRouter from './Router/AllRouter';

function App() {

  return (
    <>
      <AllRouter />
    </>
  );


}

export default App;

