export default function SkeletonCard() {
  return (
    <>
      <div className="bg-black/90 rounded-lg py-2 w-full animate-pulse">
        <div className="w-full p-2">
          <div className="bg-gray-700 h-48 w-full rounded-lg"></div>
        </div>
        <div className="mx-2 mt-4">
          <div className="bg-gray-700 h-6 w-3/4 rounded-lg"></div>
          <div className="bg-blue-800 h-6 w-32 mt-2 rounded-lg"></div>
          <div className="bg-gray-700 h-4 w-full mt-2 rounded-lg"></div>
          <div className="bg-gray-700 h-4 w-1/2 mt-2 rounded-lg"></div>
          <div className="mt-4 flex items-center justify-between">
            <div className="bg-gray-700 h-6 w-1/2 rounded-lg"></div>
          </div>
          <div className="flex gap-x-2 justify-end mt-4">
            <div className="bg-green-600 h-10 w-10 rounded-xl"></div>
            <div className="bg-blue-600 h-10 w-10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
