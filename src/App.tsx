
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Bunner } from "./components/Bunner"
import { Header } from "./components/Header"
import './styles/All.css'
import { HomePage } from "./pages/HomePage"

function App() {
 
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/calculator" element={<Bunner />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
