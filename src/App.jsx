import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Transfer from './pages/Transfer'
import About from './pages/About'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      {/* Film grain overlay */}
      <div className="noise-overlay" />

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}
