const CardSkeleton = () => {
    return (
        <div className="p-4 bg-gray-200 animate-pulse">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
    );
};

export default CardSkeleton;
