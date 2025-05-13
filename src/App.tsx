
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import './styles/All.css'
import { HomePage } from "./pages/HomePage"
import { CalculatePage } from "./pages/CalculatePage"
import { TariffPage } from "./pages/TariffPage"

function App() {
 
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/calculator" element={<CalculatePage />} />
        <Route path="/tariffs" element={<TariffPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
