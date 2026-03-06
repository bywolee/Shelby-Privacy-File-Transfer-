import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import { formatDate } from '../utils/data'

export default function PostCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link
        to={`/post/${post.slug}`}
        className="group relative block overflow-hidden glass glass-hover"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="tag-pill">{post.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-frost/30 tracking-widest uppercase">{post.tag}</span>
            <span className="w-1 h-1 rounded-full bg-frost/20" />
            <span className="text-xs font-mono text-frost/30 tracking-widest flex items-center gap-1">
              <Clock size={10} /> {post.readTime}
            </span>
          </div>
          <h2 className="font-display font-bold text-xl text-frost leading-snug mb-3 group-hover:text-amber-400 transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-frost/50 text-sm font-body leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-body text-frost/30">{formatDate(post.date)}</span>
            <ArrowUpRight
              size={16}
              className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0"
            />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/post/${post.slug}`}
      className="group flex gap-5 glass glass-hover p-4"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-24 h-20 overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="tag-pill text-[10px] px-2 py-0">{post.category}</span>
          </div>
          <h3 className="font-display font-semibold text-sm text-frost leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[10px] font-mono text-frost/25 tracking-wide">{formatDate(post.date)}</span>
          <span className="text-[10px] font-mono text-frost/25 tracking-wide flex items-center gap-1">
            <Clock size={9} />{post.readTime}
          </span>
        </div>
      </div>
    </Link>
  )
}
