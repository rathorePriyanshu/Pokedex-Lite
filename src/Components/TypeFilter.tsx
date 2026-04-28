const TypeFilter = () => {
  const types = ["fire", "water", "electric", "grass"];

  return (
    <div>
      <select className="w-full p-2 border rounded mb-4">
        <option value="">All Types</option>
        {types.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
