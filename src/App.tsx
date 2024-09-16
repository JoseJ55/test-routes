
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useAuthRoutes } from './Auth/index';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        {useAuthRoutes()}
      </Routes>
    </Router>
  )
}

export default App
