import { Search } from 'lucide-react'

function Navbar({ query, setQuery }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍥</span>
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">AniList</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 ml-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Seasonal</a>
          <a href="#" className="hover:text-gray-900">Top</a>
          <a href="#" className="hover:text-gray-900">Upcoming</a>
        </nav>

        <div className="ml-auto flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search anime, studios, tags..."
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 text-sm"
            />
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
          <button className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg shadow-sm">Sign up</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
