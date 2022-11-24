
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Score from './components/Score';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
   const [modal, setModal] = useState(false);
  return (
    <Router>
      <div className="flex h-screen justify-between flex-col">
        <Navbar modal={modal} setModal={setModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
