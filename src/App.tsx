import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Home } from './components/Dash'
import { Projects } from './components/Profile';
import { Tecs } from './components/Tecs';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Projects/>
     <Tecs/>
    </>
    
  );
}

export default App;
