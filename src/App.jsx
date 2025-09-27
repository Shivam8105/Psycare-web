import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Index from './pages/Index'
import LenisProvider from './component/LenisProvider'
// import Footer from './component/Footer'


function App() {
  return (
    <LenisProvider>
      <div className="w-full min-h-screen">
        <Router>
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </Router>
      </div>
    </LenisProvider>
  )
}

export default App