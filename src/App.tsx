import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Home } from './components/Dash'
import { Projects } from './components/Profile';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Projects/>
    </>
    
  );
}

export default App;
