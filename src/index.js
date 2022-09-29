import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Access from './access';
import Contact from './contact';
import Success1 from './success1';
import Success2 from './success2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/access" element={<Access />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/success1" element={<Success1 />} />
    <Route path="/success2" element={<Success2 />} />
  </Routes>
</BrowserRouter>
);

