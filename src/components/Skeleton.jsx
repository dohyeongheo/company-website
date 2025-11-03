const Skeleton = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} aria-hidden="true"></div>
  )
}

// 카드 스켈레톤
export const CardSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

// 이미지 그리드 스켈레톤
export const ImageGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      ))}
    </div>
  )
}

export default Skeleton

