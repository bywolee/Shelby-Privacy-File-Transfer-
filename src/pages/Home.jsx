import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Headphones, Film, Upload } from 'lucide-react'
import PostCard from '../components/PostCard'
import { posts, categories } from '../utils/data'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featuredPosts = posts.filter(p => p.featured)
  const allPosts = posts

  const filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-400" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400">
                  Media · Culture · Sound
                </span>
              </div>
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-black text-frost mb-6">
                Where<br />
                <span className="text-amber-400 italic">stories</span><br />
                transmit.
              </h1>
              <p className="text-frost/50 font-body text-lg leading-relaxed max-w-md mb-8">
                Critical writing, audio essays, and video dispatches — with direct file transfer. No gatekeeper. No review.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/blog" className="btn-primary">
                  Read the Blog <ArrowRight size={14} />
                </Link>
                <Link to="/transfer" className="btn-ghost">
                  <Upload size={14} /> Transfer Files
                </Link>
              </div>
            </div>

            {/* Right — featured stack */}
            <div className="relative">
              <div className="space-y-4">
                {featuredPosts.slice(0, 2).map((post, i) => (
                  <div
                    key={post.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <PostCard post={post} featured={i === 0} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker / marquee ─────────────────────────────────────────── */}
      <div className="border-y border-amber-400/10 py-3 overflow-hidden">
        <div className="flex items-center gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="text-xs font-mono tracking-[0.2em] text-amber-400/40 uppercase">Music Essays</span>
              <span className="w-1 h-1 rounded-full bg-amber-400/20" />
              <span className="text-xs font-mono tracking-[0.2em] text-frost/20 uppercase">Film Criticism</span>
              <span className="w-1 h-1 rounded-full bg-amber-400/20" />
              <span className="text-xs font-mono tracking-[0.2em] text-amber-400/40 uppercase">Podcast Culture</span>
              <span className="w-1 h-1 rounded-full bg-amber-400/20" />
              <span className="text-xs font-mono tracking-[0.2em] text-frost/20 uppercase">MP3 · MP4 Transfer</span>
              <span className="w-1 h-1 rounded-full bg-amber-400/20" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats Row ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: TrendingUp, label: 'Articles Published', value: '120+' },
            { icon: Headphones, label: 'Audio Files Shared', value: '3.4K' },
            { icon: Film, label: 'Video Files Shared', value: '890' },
            { icon: Upload, label: 'Transfers Today', value: '47' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass p-5 text-center group hover:border-amber-400/20 transition-colors">
              <Icon size={20} className="text-amber-400/50 mx-auto mb-2 group-hover:text-amber-400 transition-colors" />
              <div className="font-display font-black text-3xl text-frost">{value}</div>
              <div className="text-xs font-mono text-frost/30 mt-1 tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── All Posts ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-2xl text-frost">Latest Posts</h2>
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 border transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'border-amber-400 text-amber-400 bg-amber-400/10'
                    : 'border-white/10 text-frost/40 hover:border-white/30 hover:text-frost/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(post => (
            <PostCard key={post.id} post={post} featured />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-frost/30 font-mono">
            No posts in this category yet.
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/blog" className="btn-ghost">
            View All Posts <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-b border-amber-400/10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-3xl text-frost mb-2">
              Share your audio & video<br />
              <span className="text-amber-400">— no gatekeeping.</span>
            </h2>
            <p className="text-frost/40 font-body">
              Drop your MP3 or MP4 files and transfer instantly. Zero review. Full control.
            </p>
          </div>
          <Link to="/transfer" className="btn-primary text-sm py-4 px-8 shrink-0">
            <Upload size={16} />
            Start Transferring
          </Link>
        </div>
      </section>
    </main>
  )
}
