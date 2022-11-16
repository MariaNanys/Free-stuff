import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home  from '../src/components/Home';
import  Navigation  from './components/Navigation';
import  HomeHeader  from './components/HomeHeader';
import  HomeThreeColumns  from './components/HomeThreeColumns';
import  HomeFourSteps  from './components/HomeFourSteps';
import HomeAboutUs from './components/HomeAboutUs';
import HomeWhoWeHelp from './components/HomeWhoWeHelp';
import HomeContact from './components/HomeContact';
import LogIn from './components/LogIn';
import Registration from './components/Registration';

export function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LogIn />}>
        </Route>
        <Route path="/registration" element={<Registration />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Navigate to="/" />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
