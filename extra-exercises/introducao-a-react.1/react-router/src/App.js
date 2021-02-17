import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter >
      <div>
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
