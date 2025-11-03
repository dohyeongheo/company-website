const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy-900 mb-4"></div>
        <p className="text-gray-600 text-sm">로딩 중...</p>
      </div>
    </div>
  )
}

export default Loading

