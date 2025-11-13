import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import AnimeCard from './components/AnimeCard'
import EmptyState from './components/EmptyState'

const SAMPLE = [
  {
    id: 1,
    title: 'Fullmetal Alchemist: Brotherhood',
    cover: 'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1dc?q=80&w=1200&auto=format&fit=crop',
    score: 9.2,
    episodes: 64,
    year: 2009,
    studios: ['Bones'],
    tags: ['Action', 'Adventure', 'Fantasy']
  },
  {
    id: 2,
    title: 'Attack on Titan',
    cover: 'https://images.unsplash.com/photo-1544991185-13fe5d113fe9?q=80&w=1200&auto=format&fit=crop',
    score: 8.9,
    episodes: 87,
    year: 2013,
    studios: ['MAPPA', 'Wit Studio'],
    tags: ['Action', 'Drama']
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    cover: 'https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1200&auto=format&fit=crop',
    score: 8.7,
    episodes: 47,
    year: 2020,
    studios: ['MAPPA'],
    tags: ['Action', 'Supernatural']
  },
  {
    id: 4,
    title: 'Your Name',
    cover: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop',
    score: 8.5,
    episodes: 1,
    year: 2016,
    studios: ['CoMix Wave Films'],
    tags: ['Romance', 'Drama']
  },
  {
    id: 5,
    title: 'Demon Slayer',
    cover: 'https://images.unsplash.com/photo-1543984613-75ca7c47f2fb?q=80&w=1200&auto=format&fit=crop',
    score: 8.5,
    episodes: 55,
    year: 2019,
    studios: ['ufotable'],
    tags: ['Action', 'Adventure']
  },
  {
    id: 6,
    title: 'Violet Evergarden',
    cover: 'https://images.unsplash.com/photo-1517055729445-fa7d27394b88?q=80&w=1200&auto=format&fit=crop',
    score: 8.6,
    episodes: 14,
    year: 2018,
    studios: ['Kyoto Animation'],
    tags: ['Drama', 'Slice of Life']
  }
]

function App() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('top')
  const [filterYear, setFilterYear] = useState('all')

  const filtered = useMemo(() => {
    let items = SAMPLE
    if (query) {
      const q = query.toLowerCase()
      items = items.filter(
        (a) => a.title.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))
      )
    }
    if (filterYear !== 'all') {
      items = items.filter((a) => String(a.year) === filterYear)
    }
    if (sort === 'top') items = [...items].sort((a, b) => b.score - a.score)
    if (sort === 'new') items = [...items].sort((a, b) => b.year - a.year)
    return items
  }, [query, sort, filterYear])

  const years = useMemo(() => {
    const set = new Set(SAMPLE.map(a => a.year))
    return ['all', ...Array.from(set).sort((a, b) => b - a).map(String)]
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [query, sort, filterYear])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar query={query} setQuery={setQuery} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <section className="py-6 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-600">Sort:</span>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button className={`px-3 py-1.5 ${sort === 'top' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setSort('top')}>Top</button>
            <button className={`px-3 py-1.5 ${sort === 'new' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setSort('new')}>Newest</button>
          </div>

          <span className="text-gray-600 ml-4">Year:</span>
          <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700">
            {years.map(y => (
              <option key={y} value={y}>{y === 'all' ? 'All' : y}</option>
            ))}
          </select>
        </section>

        {filtered.length === 0 ? (
          <EmptyState query={query} />
        ) : (
          <section className="pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map(a => (
              <AnimeCard key={a.id} {...a} />
            ))}
          </section>
        )}
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        Built with ❤️ — inspired by MyAnimeList
      </footer>
    </div>
  )
}

export default App
