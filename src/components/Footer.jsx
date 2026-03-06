import { Link } from 'react-router-dom'
import { Radio, Github, Twitter, Rss } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-amber-400 rounded-sm rotate-45" />
                <Radio size={12} className="absolute inset-0 m-auto text-ink-950 z-10" />
              </div>
              <span className="font-display font-black text-lg text-frost">SIGNAL</span>
            </Link>
            <p className="text-frost/40 text-sm font-body leading-relaxed max-w-xs">
              A media blog for the discerning listener. Essays, criticism, and direct file sharing — no gatekeeping.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Github, Rss].map((Icon, i) => (
                <button key={i} className="w-8 h-8 flex items-center justify-center text-frost/30 hover:text-amber-400 transition-colors">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-amber-400/60 mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {['Home', 'Blog', 'Transfer', 'About'].map(item => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-frost/40 hover:text-frost text-sm font-body transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-[0.15em] uppercase text-amber-400/60 mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {['Music', 'Film', 'Podcast', 'Essay', 'Feature'].map(item => (
                <li key={item}>
                  <Link
                    to={`/blog?cat=${item}`}
                    className="text-frost/40 hover:text-frost text-sm font-body transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-frost/20 tracking-widest">
          <span>© {new Date().getFullYear()} SIGNAL MEDIA — ALL RIGHTS RESERVED</span>
          <span>BUILT WITH REACT + VITE + TAILWIND</span>
        </div>
      </div>
    </footer>
  )
}
