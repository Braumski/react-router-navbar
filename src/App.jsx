import Homepage from './components/Homepage'
import AboutMe from './components/AboutMe'
import ConditionalRender from './conditional-rendering/ConditionalRender'
import {Routes, Route, Link} from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link> 
        {/* Link Tags replace Anchor or <a href> tags in React */}
        <Link to="/about-me" className="nav-item">About me</Link>
        <Link to="/conditional-render" className="nav-item">Conditional Render</Link>
      </nav>
      {/* To use routes, type "npm i react-router-dom@6" in the console */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/conditional-render" element={<ConditionalRender/>} />
      </Routes>
    </div>
  )
}
