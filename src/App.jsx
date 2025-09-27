import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Index from './pages/Index'
import Footer from './component/Footer'
import ChatbotPage from './pages/AIChat'
import BookSessionPage from './pages/Book'
import Resources from './pages/WellnessResources'
import CommunityForum from './pages/Community'
import AppointmentsPage from './pages/Appointment'
import AuthSection from './component/AuthSection'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/chat' element={<ChatbotPage />} />
        <Route path="/book" element={<BookSessionPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path='/community' element={<CommunityForum />} />
        <Route path='/appointments' element={<AppointmentsPage />} />
        <Route path='/auth' element={<AuthSection />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App