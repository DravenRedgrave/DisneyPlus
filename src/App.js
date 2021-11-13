import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detalis from './components/Detalis';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="detalis" element={<Detalis />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
