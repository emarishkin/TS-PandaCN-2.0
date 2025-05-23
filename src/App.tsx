
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import './styles/All.css'
import { HomePage } from "./pages/HomePage"
import { CalculatePage } from "./pages/CalculatePage"
import { TariffPage } from "./pages/TariffPage"
import { ServicePage } from "./pages/ServicePage"
import { MorePage } from "./pages/MorePage"
import { ContactPage } from "./pages/ContactPage"
import { Footer } from "./components/Footer"

function App() {
 
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/calculator" element={<CalculatePage />} />
        <Route path="/tariffs" element={<TariffPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/contacts" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
