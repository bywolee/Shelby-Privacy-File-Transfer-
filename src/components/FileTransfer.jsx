import { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Upload, Music, Film, Download, Trash2, CheckCircle,
  AlertCircle, FileAudio, FileVideo, X, Copy, Check
} from 'lucide-react'
import { transferStore, formatBytes, isAudio, isVideo } from '../utils/data'
import clsx from 'clsx'

// ─── Waveform Visual ─────────────────────────────────────────────────────────
function Waveform() {
  const bars = Array.from({ length: 20 }, (_, i) => i)
  return (
    <div className="flex items-end gap-[2px] h-6">
      {bars.map(i => (
        <div
          key={i}
          className="waveform-bar w-[3px] bg-amber-400/70 rounded-full"
          style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.06}s` }}
        />
      ))}
    </div>
  )
}

// ─── File Card ────────────────────────────────────────────────────────────────
function FileCard({ entry, onRemove }) {
  const [copied, setCopied] = useState(false)
  const audio = isAudio(entry.type)
  const Icon = audio ? FileAudio : FileVideo
  const color = audio ? 'text-amber-400' : 'text-blue-400'
  const bgColor = audio ? 'bg-amber-400/10' : 'bg-blue-400/10'
  const borderColor = audio ? 'border-amber-400/20' : 'border-blue-400/20'

  const handleCopy = () => {
    navigator.clipboard.writeText(entry.url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={clsx(
      'file-card-enter glass p-4 border',
      borderColor,
      'flex flex-col sm:flex-row items-start sm:items-center gap-4'
    )}>
      {/* Icon */}
      <div className={clsx('w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0', bgColor)}>
        <Icon size={18} className={color} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-frost text-sm font-body font-medium truncate max-w-xs">{entry.name}</p>
        <div className="flex items-center gap-3 mt-0.5">
          <span className={clsx('text-xs font-mono uppercase tracking-widest', color)}>
            {audio ? 'MP3' : 'MP4'}
          </span>
          <span className="text-frost/30 text-xs font-mono">{formatBytes(entry.size)}</span>
          <div className="flex items-center gap-1 text-frost/30 text-xs font-mono">
            <CheckCircle size={10} className="text-green-400" />
            <span className="text-green-400/70">Ready</span>
          </div>
        </div>

        {/* Waveform for audio */}
        {audio && (
          <div className="mt-2">
            <Waveform />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <a
          href={entry.url}
          download={entry.name}
          className="btn-ghost py-1.5 px-3 text-xs"
          title="Download"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Download</span>
        </a>
        <button
          onClick={handleCopy}
          className="btn-ghost py-1.5 px-3 text-xs"
          title="Copy link"
        >
          {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
        </button>
        <button
          onClick={() => onRemove(entry.id)}
          className="w-8 h-8 flex items-center justify-center text-frost/30 hover:text-signal transition-colors"
          title="Remove"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FileTransfer() {
  const [files, setFiles] = useState(() => transferStore.getAll())
  const [error, setError] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => transferStore.subscribe(setFiles), [])

  const onDrop = useCallback((accepted, rejected) => {
    setError(null)
    if (rejected.length > 0) {
      setError('Only MP3 (audio) and MP4 (video) files are accepted.')
      return
    }
    setUploading(true)
    // Simulate slight delay for UX feedback
    setTimeout(() => {
      accepted.forEach(file => transferStore.add(file))
      setUploading(false)
    }, 600)
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'audio/mpeg': ['.mp3'],
      'video/mp4': ['.mp4'],
    },
    multiple: true,
  })

  const audioCount = files.filter(f => isAudio(f.type)).length
  const videoCount = files.filter(f => isVideo(f.type)).length

  return (
    <div className="space-y-8">
      {/* Stats row */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Total Files', value: files.length, icon: Upload },
            { label: 'Audio (MP3)', value: audioCount, icon: Music },
            { label: 'Video (MP4)', value: videoCount, icon: Film },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="glass p-4 text-center">
              <Icon size={16} className="text-amber-400 mx-auto mb-1.5" />
              <div className="font-display font-bold text-2xl text-frost">{value}</div>
              <div className="text-xs font-mono text-frost/30 tracking-widest uppercase mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={clsx(
          'relative cursor-pointer rounded-sm border-2 border-dashed transition-all duration-300 p-10 lg:p-16 text-center',
          isDragActive && !isDragReject && 'drop-zone-active border-amber-400',
          isDragReject && 'border-signal/50 bg-signal/5',
          !isDragActive && 'border-white/10 hover:border-amber-400/30 bg-ink-800/40',
        )}
      >
        <input {...getInputProps()} />

        {/* Animated ring */}
        <div className={clsx(
          'absolute inset-0 rounded-sm transition-opacity duration-300',
          isDragActive ? 'opacity-100' : 'opacity-0'
        )}>
          <div className="absolute inset-2 border border-amber-400/20 rounded-sm animate-ping" />
        </div>

        {uploading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-frost/60 font-body text-sm">Processing files...</p>
          </div>
        ) : (
          <>
            <div className={clsx(
              'w-16 h-16 mx-auto mb-5 rounded-sm flex items-center justify-center transition-all duration-300',
              isDragActive ? 'bg-amber-400/20 scale-110' : 'bg-ink-700/80'
            )}>
              {isDragReject ? (
                <AlertCircle size={28} className="text-signal" />
              ) : (
                <Upload size={28} className={isDragActive ? 'text-amber-400' : 'text-frost/40'} />
              )}
            </div>

            <h3 className="font-display font-bold text-xl text-frost mb-2">
              {isDragActive ? 'Drop to Transfer' : 'Drop Your Files Here'}
            </h3>
            <p className="text-frost/40 font-body text-sm mb-5">
              {isDragReject
                ? 'That file type is not supported'
                : 'Drag & drop MP3 or MP4 files, or click to browse'}
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-sm">
                <Music size={12} className="text-amber-400" />
                <span className="text-xs font-mono text-amber-400 tracking-widest">.MP3</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-400/10 border border-blue-400/20 rounded-sm">
                <Film size={12} className="text-blue-400" />
                <span className="text-xs font-mono text-blue-400 tracking-widest">.MP4</span>
              </div>
            </div>

            <p className="text-frost/20 text-xs font-mono mt-4 tracking-widest">
              NO SIZE LIMIT · NO REVIEW · INSTANT TRANSFER
            </p>
          </>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 p-4 border border-signal/30 bg-signal/5 text-signal text-sm font-body">
          <AlertCircle size={16} className="flex-shrink-0" />
          {error}
          <button onClick={() => setError(null)} className="ml-auto"><X size={14} /></button>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-frost/30">
              Transferred Files — {files.length}
            </h3>
            <button
              onClick={() => files.forEach(f => transferStore.remove(f.id))}
              className="text-xs font-mono text-frost/20 hover:text-signal transition-colors tracking-widest uppercase"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2">
            {files.map(entry => (
              <FileCard key={entry.id} entry={entry} onRemove={transferStore.remove} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
