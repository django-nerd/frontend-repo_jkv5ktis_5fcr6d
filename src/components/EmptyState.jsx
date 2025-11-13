function EmptyState({ query }) {
  return (
    <div className="text-center py-20">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-gray-800">No results</h3>
      <p className="text-sm text-gray-500 mt-1">We couldn't find anything for "{query}"</p>
    </div>
  )
}

export default EmptyState
