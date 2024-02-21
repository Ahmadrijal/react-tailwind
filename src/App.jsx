import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import homepage from "./pages/homepage"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={homepage}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
