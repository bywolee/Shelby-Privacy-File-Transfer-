import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Upload, Radio } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Transfer', to: '/transfer' },
    { label: 'About', to: '/about' },
  ]

  const isActive = (to) => location.pathname === to

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-amber-400/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-amber-400 rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-300" />
                <Radio size={14} className="absolute inset-0 m-auto text-ink-950 z-10" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-frost">
                SIGNAL
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                    isActive(link.to) ? 'text-amber-400' : 'text-frost/60 hover:text-frost'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-200 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/transfer" className="btn-primary text-xs py-2 px-4">
                <Upload size={13} />
                Upload File
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 text-frost/70 hover:text-frost transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 glass border-b border-amber-400/10 transition-all duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body font-medium py-3 border-b border-white/5 text-sm tracking-wide transition-colors ${
                  isActive(link.to) ? 'text-amber-400' : 'text-frost/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/transfer" className="btn-primary mt-4 justify-center text-sm">
              <Upload size={14} /> Upload File
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
