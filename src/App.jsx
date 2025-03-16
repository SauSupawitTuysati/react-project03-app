import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import Login from './views/Login.jsx'
import Contact from './views/Contact.jsx'
import Register from './views/Register.jsx'
import About from './views/About.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
