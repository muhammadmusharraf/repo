import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {

  return (
    <>
 <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            
            </Routes>
            <Skill/>
            <Projects/>
            <Footer/>
        </Router>
            </>
  )
}

export default App
