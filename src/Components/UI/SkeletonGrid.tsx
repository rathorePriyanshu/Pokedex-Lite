import Skeleton from "./Skeleton";

const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
