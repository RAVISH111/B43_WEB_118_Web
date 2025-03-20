import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

const Header = () => (
  <header className="header">
    <h1>EduQuest</h1>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  </header>
);

export default App;
