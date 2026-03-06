import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import PostCard from '../components/PostCard'
import { posts, categories } from '../utils/data'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return posts.filter(post => {
      const matchCat = activeCategory === 'All' || post.category === activeCategory
      const matchQuery = !query || (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      )
      return matchCat && matchQuery
    })
  }, [query, activeCategory])

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400">The Archive</span>
          </div>
          <h1 className="hero-title text-5xl lg:text-6xl font-black text-frost">
            All Posts
          </h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-frost/30" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-ink-800 border border-white/10 text-frost placeholder-frost/20 text-sm font-body pl-9 pr-4 py-2.5 focus:outline-none focus:border-amber-400/40 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono tracking-widest uppercase px-3 py-2 border transition-all ${
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

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(post => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-frost/20 font-mono tracking-widest uppercase text-sm">
            No posts found
          </div>
        )}

        {/* Count */}
        <p className="text-xs font-mono text-frost/20 tracking-widest text-center mt-10 uppercase">
          Showing {filtered.length} of {posts.length} articles
        </p>
      </div>
    </main>
  )
}
