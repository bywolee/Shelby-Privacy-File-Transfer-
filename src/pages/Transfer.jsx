import FileTransfer from '../components/FileTransfer'
import { ShieldOff, Zap, Lock, Infinity } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Transfer',
    desc: 'Files are available immediately after upload — no processing queue, no waiting.',
  },
  {
    icon: ShieldOff,
    title: 'No Content Review',
    desc: 'Your files are transferred directly. We do not inspect, review, or analyze content.',
  },
  {
    icon: Lock,
    title: 'Session Only',
    desc: 'Files exist in your browser session. Nothing is sent to any server — full local control.',
  },
  {
    icon: Infinity,
    title: 'Unlimited Transfers',
    desc: 'No caps. Upload as many MP3 and MP4 files as your session needs.',
  },
]

export default function Transfer() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-400">Direct Transfer</span>
          </div>
          <h1 className="hero-title text-5xl lg:text-6xl font-black text-frost mb-4">
            File Transfer
          </h1>
          <p className="text-frost/40 font-body text-lg max-w-lg">
            Share MP3 audio and MP4 video files instantly. No review. No upload to servers. No gatekeeping.
          </p>
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass p-4 group hover:border-amber-400/20 transition-colors">
              <Icon size={18} className="text-amber-400/60 mb-2 group-hover:text-amber-400 transition-colors" />
              <div className="text-frost text-sm font-body font-semibold mb-1">{title}</div>
              <div className="text-frost/30 text-xs font-body leading-relaxed hidden sm:block">{desc}</div>
            </div>
          ))}
        </div>

        {/* Transfer Widget */}
        <FileTransfer />

        {/* Notice */}
        <div className="mt-8 p-4 border border-amber-400/10 bg-amber-400/5 text-xs font-mono text-amber-400/50 tracking-widest leading-relaxed">
          ℹ TECHNICAL NOTE — Files are handled entirely in your browser via the Web File API and Object URLs.
          No data leaves your device. All transfers are cleared when the session ends.
        </div>
      </div>
    </main>
  )
}
