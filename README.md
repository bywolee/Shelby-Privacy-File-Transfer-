# SIGNAL — Media Blog with MP3/MP4 File Transfer
## Step-by-Step Setup Guide

---

## ✅ Prerequisites

Before starting, make sure you have these installed:

| Tool | Version | Check |
|------|---------|-------|
| Node.js | 18+ | `node -v` |
| npm | 9+ | `npm -v` |

Download Node.js from [nodejs.org](https://nodejs.org) if needed.

---

## 📁 Step 1: Extract & Navigate

```bash
# Unzip the downloaded folder
unzip mediablog.zip

# Enter the project directory
cd mediablog
```

---

## 📦 Step 2: Install Dependencies

```bash
npm install
```

This installs:
- **React 18** — UI framework
- **React Router DOM** — Client-side routing
- **React Dropzone** — Drag-and-drop file upload
- **Vite** — Ultra-fast build tool
- **TailwindCSS** — Utility-first CSS framework
- **Lucide React** — Icon set
- **clsx** — Conditional classnames utility

---

## 🚀 Step 3: Start the Development Server

```bash
npm run dev
```

Your browser will open automatically at **http://localhost:5173**

---

## 🏗️ Step 4: Project Structure Explained

```
mediablog/
├── index.html                  # HTML entry point (loads fonts)
├── vite.config.js              # Vite config (port 5173, auto-open)
├── tailwind.config.js          # Custom theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS for Tailwind processing
├── package.json                # Dependencies
│
└── src/
    ├── main.jsx                # React root, wraps in BrowserRouter
    ├── App.jsx                 # Routes + layout (Navbar, Footer)
    ├── index.css               # Global styles, Tailwind layers, animations
    │
    ├── utils/
    │   └── data.js             # Blog posts, file transfer store, helpers
    │
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav with mobile menu
    │   ├── Footer.jsx          # Site footer
    │   ├── PostCard.jsx        # Blog post card (featured & compact variants)
    │   └── FileTransfer.jsx    # Drop zone + file list component
    │
    └── pages/
        ├── Home.jsx            # Landing page with hero + post grid
        ├── Blog.jsx            # All posts with search & category filter
        ├── Post.jsx            # Single post view with related posts
        ├── Transfer.jsx        # File transfer page (wraps FileTransfer)
        └── About.jsx           # About page with team grid
```

---

## 🔄 Step 5: How File Transfer Works

The file transfer is **100% browser-local** — no server required.

### How it works:
1. User drops an `.mp3` or `.mp4` file onto the drop zone
2. `react-dropzone` validates the MIME type (`audio/mpeg` or `video/mp4`)
3. `URL.createObjectURL(file)` generates a temporary local URL
4. The file entry is stored in the `transferStore` (in-memory JS object)
5. Any component subscribing to the store re-renders with the new file list
6. The user can **download** the file or **copy its local URL**

### Key file: `src/utils/data.js`
```js
export const transferStore = {
  add: (file) => { /* creates Object URL, stores entry */ },
  remove: (id) => { /* revokes Object URL, removes entry */ },
  subscribe: (fn) => { /* reactivity pattern */ },
}
```

> ⚠️ Files are stored in the browser session only. Refreshing the page clears all transfers.

---

## 🎨 Step 6: Design System

### Color Palette
| Token | Hex | Use |
|-------|-----|-----|
| `ink-950` | `#050508` | Background |
| `ink-800` | `#16161f` | Cards |
| `amber-400` | `#fbbf24` | Primary accent |
| `frost` | `#e8e8f0` | Text |
| `signal` | `#ff4d4d` | Error/danger |

### Typography
| Font | Use |
|------|-----|
| **Playfair Display** | Headings, display text |
| **DM Sans** | Body copy, UI |
| **JetBrains Mono** | Tags, labels, metadata |

### Custom CSS Classes (in `index.css`)
- `.glass` — Frosted glass card style
- `.glass-hover` — Hover lift effect
- `.btn-primary` — Amber clipped-corner button
- `.btn-ghost` — Outlined ghost button
- `.tag-pill` — Category badge
- `.hero-title` — Large editorial heading

---

## ✏️ Step 7: Add Your Own Blog Posts

Open `src/utils/data.js` and add to the `posts` array:

```js
{
  id: '6',                           // Unique ID
  slug: 'my-post-url',              // URL slug
  title: 'My Post Title',
  excerpt: 'Short description...',
  category: 'Music',                 // Music | Film | Podcast
  tag: 'Essay',                      // Essay | Feature | Analysis | Reported
  date: '2024-03-01',               // YYYY-MM-DD
  readTime: '7 min',
  author: { name: 'Your Name', role: 'Your Role' },
  cover: 'https://your-image-url.jpg',
  featured: false,                   // Show on homepage hero?
  content: `
    <h2>Section Title</h2>
    <p>Your paragraph content here.</p>
    <blockquote>A pull quote.</blockquote>
  `
}
```

---

## 📤 Step 8: Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy to:

| Platform | Command |
|----------|---------|
| **Vercel** | `vercel deploy` or drag `/dist` to dashboard |
| **Netlify** | Drag `/dist` folder to netlify.com/drop |
| **GitHub Pages** | Push `/dist` contents to `gh-pages` branch |

---

## 🌐 Step 9: Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

---

## 🔧 Step 10: Customization Quick Reference

### Change the site name
Edit `index.html` `<title>` and `src/components/Navbar.jsx` logo text.

### Add a new page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`

### Change accent color
In `tailwind.config.js`, update `amber` values. Then find/replace `amber-400` and `amber-500` in the CSS and components.

### Make transfers persistent
Replace the in-memory `transferStore` in `data.js` with `localStorage`:
```js
// In transferStore.add():
localStorage.setItem('transfers', JSON.stringify(_transfers))

// In getAll():
return JSON.parse(localStorage.getItem('transfers') || '[]')
```
Note: Object URLs won't persist across sessions — you'd need a real backend for true persistence.

---

## 🐞 Troubleshooting

| Issue | Fix |
|-------|-----|
| `npm install` fails | Run `node -v` — must be Node 18+ |
| Fonts not loading | Check internet connection (fonts load from Google) |
| Port 5173 in use | Edit `vite.config.js`, change `port: 5173` to another port |
| Tailwind styles missing | Make sure `postcss.config.js` exists and `npm install` completed |
| MP4 file rejected | Check the file's MIME type is `video/mp4` (not `.mov` or `.avi`) |

---

## 📋 Available npm Scripts

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Production build → /dist
npm run preview  # Preview the production build locally
```

---

*Built with React 18 · Vite 5 · TailwindCSS 3 · React Router 6 · React Dropzone 14*
