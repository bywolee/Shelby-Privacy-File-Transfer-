import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import { posts, formatDate } from '../utils/data'
import PostCard from '../components/PostCard'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-frost/30 hover:text-amber-400 transition-colors tracking-widest uppercase mb-10 group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Category + tag */}
        <div className="flex items-center gap-3 mb-5">
          <span className="tag-pill">{post.category}</span>
          <span className="text-xs font-mono text-frost/30 tracking-widest">{post.tag}</span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-black text-frost mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/5">
          <div className="flex items-center gap-2 text-frost/40 text-sm font-body">
            <User size={13} />
            <span>{post.author.name}</span>
            <span className="text-frost/20">·</span>
            <span className="text-frost/25">{post.author.role}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-frost/30">
            <span className="flex items-center gap-1"><Calendar size={11} /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
          </div>
        </div>

        {/* Cover */}
        <div className="relative overflow-hidden mb-10 aspect-[16/9]">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        </div>

        {/* Excerpt */}
        <p className="text-frost/60 font-body text-lg leading-relaxed italic border-l-2 border-amber-400/40 pl-5 mb-8">
          {post.excerpt}
        </p>

        {/* Content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <div className="divider my-12" />

        {/* Author card */}
        <div className="glass p-6 flex items-center gap-5">
          <div className="w-12 h-12 rounded-sm bg-amber-400/10 flex items-center justify-center flex-shrink-0">
            <User size={20} className="text-amber-400" />
          </div>
          <div>
            <div className="font-display font-semibold text-frost">{post.author.name}</div>
            <div className="text-xs font-mono text-frost/30 tracking-widest uppercase">{post.author.role}</div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-frost/30 mb-5">
              More from {post.category}
            </h3>
            <div className="space-y-3">
              {related.map(r => (
                <PostCard key={r.id} post={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
