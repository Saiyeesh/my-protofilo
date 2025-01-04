import {Routes, Route} from "react-router-dom";
import "./App.css"


import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";

function App() {
  return (
     <>
        <Routes>
           <Route path='/' element={<About></About>}></Route>
           <Route path='/contact' element={<Contact></Contact>}></Route>
           <Route path='/skills' element={<Skills></Skills>}></Route>
           <Route path='/experience' element={<Experience></Experience>}></Route>
           <Route path="/projects" element={<Projects></Projects>}></Route>
           <Route path="/education" element={<Education></Education>}></Route>
        </Routes>
     </>
  )
}

export default App 