import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import WebRoutes from './routes';

function App() {
  return (
   <BrowserRouter>
      <WebRoutes/>
   </BrowserRouter>
  );
}

export default App;
