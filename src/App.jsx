import { Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login.component"
import Navigation from "./routes/navigation/navigation.component"
import Home from "./routes/home/home.component"
import Contact from "./routes/Contact/Contact.component"

const About = () => {
  return <h1>This Is About</h1>
  
}

function App () {
return (
  <Routes>
    <Route  path='/' element={<Login />} ></Route>
    <Route path='/' element={<Navigation />}>
    <Route  path='Home' element={<Home  />} />
    <Route  path='About' element={<About />} />
    <Route path='Contact' element={<Contact/>}/>
    </Route>
  </Routes>
  
  )
}

  

export default App
