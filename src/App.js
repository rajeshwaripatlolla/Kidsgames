import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";

import Profile from "./Components/Profile/Profile";
import GamesPage from "./Components/GamePage/GamePage";
import ResourcesPage from "./Components/Resource/Resource";
import Registration from "./Components/Rigistration/Registration";
import Settings from "./Components/Theme/SettingsPage";
import Search from "./Components/Search";
import Notifications from "./Components/Notifications/Notifications";
import QuizGame from "./Components/GamePage/QuizGame";
import MathGame from "./Components/Math/MathChallenge";
import LearningAdventure from "./Components/Learning/LearningAdventure";
import Logout from "./Components/Logout";
import ColorsAndShapesGame from "./Components/Colors/Colors";
import Dashboard from "./Components/Dashboard/Dashboard";


const App = () => {
  return (
    <Router>
      <Navbar userType="parent" /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="resources" element={<ResourcesPage/>} />
        <Route path="registration" element={<Registration/>} />
      <Route path="games" element={<GamesPage/>} /> 
      <Route path="settings" element={<Settings/>} />
      <Route path="search" element={<Search/>} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/" element={<GamesPage />} />
        <Route path="/games/quiz" element={<QuizGame />} />
        <Route path="/games/math" element={<MathGame />} />
        <Route path="/games/colors-shapes" element={<ColorsAndShapesGame/>} />
        <Route path="/games/adventure" element={<LearningAdventure />} />
        <Route path="/register" element={<Registration />} />
        <Route path="Logout"element={<Logout/>} />
      <Route path="/Dashboard"element={<Dashboard/>} />
      </Routes>
    </Router>
  ); 
};

export default App;
