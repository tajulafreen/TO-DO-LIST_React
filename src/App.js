import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import './styles/App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
