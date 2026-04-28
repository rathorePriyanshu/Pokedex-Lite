const PokemonCard = () => {
  return (
    <div className="bg-white rounded-xl cursor-pointer p-4 shadow">
      <img src="" alt="Pokemon Image" className="h-32 mx-auto" />
      <div className="flex justify-between mt-2">
        <p className="capitalize">Pokemon</p>
        <button>is Fav</button>
      </div>
    </div>
  );
};

export default PokemonCard;
