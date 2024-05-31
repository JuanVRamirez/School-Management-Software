import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import ClassPage from './pages/ClassPage';
import './App.css';

const App = () => {
  return (
  <div className='App'>
    <Router>
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/gestionar-estudiantes" element={<StudentsPage />} />
    <Route path="/gestionar-profesores" element={<TeachersPage />} />
    <Route path="/gestionar-clases" element={<ClassPage />} />
  </Routes>
</Router>
</div>
  );
};

export default App;