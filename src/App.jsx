import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <nav className="nav">
        <a href="#" className="nav-item">Homepage</a>
        <a href="#" className="nav-item">About Me</a>
      </nav>
      {/* To use routes, type "npm i react-router-dom@6" in the console */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />}/>
      </Routes>
     <Homepage/>
     <AboutMe/>
    </div>
  )
}

export default App
