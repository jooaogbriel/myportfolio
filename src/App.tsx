import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Home } from './components/Dash'
import { Projects } from './components/Profile';
import { Tecs } from './components/Tecs';
import { Final } from './components/Final';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Projects/>
     <Tecs/>
     <Final/>
     
    </>
    
  );
}

export default App;
