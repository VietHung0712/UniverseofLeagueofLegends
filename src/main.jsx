import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <RouterCustom />
  </BrowserRouter>
)