// ─── Mock Blog Posts ─────────────────────────────────────────────────────────
export const posts = [
  {
    id: '1',
    slug: 'the-rise-of-lo-fi-hip-hop',
    title: 'The Rise of Lo-Fi Hip-Hop: How a Subgenre Became the Internet\'s Soundtrack',
    excerpt: 'From late-night study sessions to millions of simultaneous listeners — exploring how lo-fi became the defining ambient genre of a generation.',
    category: 'Music',
    tag: 'Essay',
    date: '2024-02-14',
    readTime: '8 min',
    author: { name: 'Maren Voss', role: 'Music Editor' },
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    featured: true,
    content: `
      <h2>An Unlikely Genesis</h2>
      <p>In the early 2010s, a loosely affiliated group of producers on SoundCloud began sharing tracks with an unmistakable quality: dusty vinyl crackle, jazz-inflected chord progressions, and a tempo that felt engineered to slow the pulse. No one had a name for it yet. The algorithm hadn't learned to suggest it. And yet, word spread.</p>
      <blockquote>There's something about imperfection that the internet latched onto — a rejection of the hyper-polished mainstream in favor of something that felt handmade, intimate, almost accidental.</blockquote>
      <h2>The Study Stream Phenomenon</h2>
      <p>The moment lo-fi transcended niche was the 24/7 YouTube live stream. "Lo-fi hip hop radio — beats to relax/study to" accumulated hundreds of millions of views and, crucially, stayed live. It became a destination, not just a playlist. Listeners weren't curating — they were tuning in, the way previous generations turned on the radio.</p>
      <p>What followed was a genre codification unlike anything in recent music history. Producers reverse-engineered the aesthetic, distributors created dedicated channels, and the anime girl studying at a rainy window became one of the internet's most recognizable images.</p>
      <h2>A Tool, Not a Genre</h2>
      <p>Critics have argued lo-fi isn't really a genre at all — it's a function. It exists not to be heard, but to be present. It fills the silence of focused work without demanding attention. In this framing, it has more in common with Muzak or Brian Eno's ambient work than traditional hip-hop. And perhaps that's exactly what made it so culturally durable.</p>
    `
  },
  {
    id: '2',
    slug: 'documentary-film-in-the-streaming-age',
    title: 'Documentary Film in the Streaming Age: Between Reach and Rigor',
    excerpt: 'Streaming has given documentary filmmakers unprecedented audiences — but at what cost to the form itself?',
    category: 'Film',
    tag: 'Analysis',
    date: '2024-02-08',
    readTime: '11 min',
    author: { name: 'Dae-jung Kim', role: 'Film Critic' },
    cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    featured: true,
    content: `
      <h2>The Netflix Effect</h2>
      <p>When Netflix began commissioning and acquiring documentary features at scale, the reaction was understandably mixed. On one hand, films that might have languished in festival circuits now found audiences of millions. On the other, a set of invisible pressures emerged: episode counts inflated to fill series slots, subjects were incentivized toward the dramatic arc, complexity was sanded smooth for algorithmic consumption.</p>
      <blockquote>The documentary has always been in tension with spectacle. Streaming didn't create that tension — it amplified it with data and distribution power.</blockquote>
      <h2>What Gets Made vs What Gets Seen</h2>
      <p>The more interesting story isn't the prestige true-crime series. It's the independent documentary that, bypassing traditional distribution entirely, finds its audience through direct file sharing, Vimeo, Substack premieres, and niche platforms built for exactly this kind of work. The infrastructure of independent film distribution is being rebuilt from scratch — and it looks less like a studio and more like a network.</p>
    `
  },
  {
    id: '3',
    slug: 'podcast-economy-creators-and-corporations',
    title: 'The Podcast Economy: What Happens When Corporations Buy Your Favorite Show',
    excerpt: 'A deep dive into the acquisitions, exclusives, and identity crises reshaping the medium.',
    category: 'Podcast',
    tag: 'Reported',
    date: '2024-01-29',
    readTime: '14 min',
    author: { name: 'Anika Brandt', role: 'Media Reporter' },
    cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    featured: false,
    content: `
      <h2>The Acquisition Wave</h2>
      <p>Between 2019 and 2023, Spotify acquired over a dozen podcast companies and networks, committing hundreds of millions to exclusive deals with names ranging from Joe Rogan to Michelle Obama. The pitch was simple: own the relationship with listeners the way Netflix owned the relationship with viewers. Audio was the new streaming frontier.</p>
      <blockquote>What the acquisitions revealed wasn't just a land grab — it was a fundamental misunderstanding of why podcasting worked in the first place.</blockquote>
    `
  },
  {
    id: '4',
    slug: 'indie-game-soundtracks-new-art-form',
    title: 'Indie Game Soundtracks: The Quiet Revolution in Interactive Music',
    excerpt: 'How small studios are producing some of the most inventive music in any medium right now.',
    category: 'Music',
    tag: 'Feature',
    date: '2024-01-20',
    readTime: '9 min',
    author: { name: 'Maren Voss', role: 'Music Editor' },
    cover: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    featured: false,
    content: `
      <h2>Composers Without Constraints</h2>
      <p>The AAA game industry has increasingly leaned on orchestral scores that mimic cinema — grand, sweeping, emotionally legible. The indie scene has gone the opposite direction. With no publisher mandates and often a single composer working alone, the music in games like Celeste, Disco Elysium, and Hades experiments with form in ways mainstream game scores rarely do.</p>
    `
  },
  {
    id: '5',
    slug: 'vertical-video-aesthetic',
    title: 'The Vertical Video Aesthetic: How TikTok Rewired Visual Grammar',
    excerpt: 'From stigmatized format error to dominant visual language — the strange journey of the vertical frame.',
    category: 'Film',
    tag: 'Essay',
    date: '2024-01-10',
    readTime: '6 min',
    author: { name: 'Yuki Tanaka', role: 'Visual Culture Writer' },
    cover: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    featured: false,
    content: `
      <h2>The Error That Won</h2>
      <p>For most of cinema and television history, vertical framing was a mistake — the hallmark of a novice who didn't rotate their phone. Then came a generation of creators for whom the phone screen, held upright, was the primary canvas. And something interesting happened: the format developed its own grammar.</p>
    `
  },
]

// ─── Categories ──────────────────────────────────────────────────────────────
export const categories = ['All', 'Music', 'Film', 'Podcast']

// ─── File Transfer Store (in-memory, no backend) ─────────────────────────────
let _transfers = []
let _listeners = []

export const transferStore = {
  getAll: () => [..._transfers],

  add: (file) => {
    const entry = {
      id: crypto.randomUUID(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
      url: URL.createObjectURL(file),
      status: 'ready',
    }
    _transfers = [entry, ..._transfers]
    _listeners.forEach(fn => fn(_transfers))
    return entry
  },

  remove: (id) => {
    const entry = _transfers.find(t => t.id === id)
    if (entry) URL.revokeObjectURL(entry.url)
    _transfers = _transfers.filter(t => t.id !== id)
    _listeners.forEach(fn => fn(_transfers))
  },

  subscribe: (fn) => {
    _listeners.push(fn)
    return () => { _listeners = _listeners.filter(l => l !== fn) }
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
export const formatBytes = (bytes) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}

export const isAudio = (type) => type.startsWith('audio/')
export const isVideo = (type) => type.startsWith('video/')
