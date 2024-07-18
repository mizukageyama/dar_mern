import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Tasks from './pages/Tasks';
import DAR from './pages/DAR';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="dar" element={<DAR />} />
    </Routes>
  );
}

export default App;
