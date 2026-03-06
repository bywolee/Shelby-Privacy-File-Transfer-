import { Link } from 'react-router-dom'
import { ArrowRight, Radio } from 'lucide-react'

const team = [
  { name: 'Maren Voss', role: 'Music Editor', bio: 'Covers electronic, ambient, and the intersections of music with technology.' },
  { name: 'Dae-jung Kim', role: 'Film Critic', bio: 'Documentary specialist and narrative film essayist based in Seoul.' },
  { name: 'Anika Brandt', role: 'Media Reporter', bio: 'Tracks the business and culture of podcasting, streaming, and audio media.' },
  { name: 'Yuki Tanaka', role: 'Visual Culture Writer', bio: 'Explores how platforms reshape aesthetics, format, and visual grammar.' },
]

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Masthead */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-amber-400 rounded-sm rotate-45" />
              <Radio size={32} className="absolute inset-0 m-auto text-ink-950 z-10" />
            </div>
          </div>
          <h1 className="hero-title text-6xl lg:text-7xl font-black text-frost mb-4">
            About SIGNAL
          </h1>
          <div className="h-px w-20 bg-amber-400/40 mx-auto" />
        </div>

        {/* Mission */}
        <div className="glass p-8 mb-8">
          <p className="font-display text-xl text-frost/80 italic leading-relaxed mb-4">
            "We built SIGNAL because media criticism deserved a platform that took its content seriously — and so did its readers."
          </p>
          <p className="font-body text-frost/50 text-sm leading-relaxed">
            SIGNAL is an independent media blog covering music, film, and podcast culture. We publish essays, reported pieces, and deep criticism from writers who care about the work. We also believe in direct access: our file transfer tool lets you share MP3 and MP4 files without intermediaries, without review, and without compromise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          <div className="glass p-6">
            <h3 className="font-display font-bold text-frost text-lg mb-3">The Writing</h3>
            <p className="text-frost/40 font-body text-sm leading-relaxed">
              We cover music essays, film criticism, and the shifting economics of podcast media. Everything is original, deeply reported, and editorially independent.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="font-display font-bold text-frost text-lg mb-3">The Transfer</h3>
            <p className="text-frost/40 font-body text-sm leading-relaxed">
              Our file transfer feature runs entirely in your browser. No server upload. No content review. Drop an MP3 or MP4 and transfer it directly — session-local and private.
            </p>
          </div>
        </div>

        {/* Team */}
        <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-frost/30 mb-6">The Team</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {team.map(member => (
            <div key={member.name} className="glass p-5 flex items-start gap-4 hover:border-amber-400/15 transition-colors">
              <div className="w-10 h-10 rounded-sm bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-display font-bold text-sm">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-display font-semibold text-frost">{member.name}</div>
                <div className="text-xs font-mono text-amber-400/60 tracking-widest uppercase mb-1.5">{member.role}</div>
                <div className="text-frost/35 text-xs font-body leading-relaxed">{member.bio}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/blog" className="btn-primary mr-3">
            Read the Blog <ArrowRight size={14} />
          </Link>
          <Link to="/transfer" className="btn-ghost">
            Try File Transfer
          </Link>
        </div>
      </div>
    </main>
  )
}
