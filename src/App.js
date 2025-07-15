import React from 'react';


import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import RoboSharePage from './pages/RoboSharePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/roboshare' element={<RoboSharePage/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
