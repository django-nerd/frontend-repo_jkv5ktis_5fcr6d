function AnimeCard({ title, cover, score, episodes, year, studios, tags }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
          {score && (
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
              {score}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {year} • {episodes} eps
        </p>
        {studios && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-1">{studios.join(', ')}</p>
        )}
        {tags && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AnimeCard
