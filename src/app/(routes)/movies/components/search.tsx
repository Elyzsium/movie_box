

const Search = () => {
  return (
    <div>
    <div className="relative flex items-center rounded-lg bor ">
      {/* Icon on the right side */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
       
         
      </div>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-12 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Search..."
      />

      {/* Button on the left side */}
      <button
        type="button"
        className="absolute inset-y-0 left-0 flex items-center pl-3 text-white rounded-lg w-50 f bg-rose-700"
      >
        Search
      </button>
    </div>
    
    {/* <Command className="max-md:hidden bg-transparent border-2 w-[300px] min-[900px]:w-[500px]">
      <CommandInput
        className="text-white border-none"
        placeholder="What do you want to watch?"
      />
      <button
        className="p-2 text-white h-40px bg-primary rounded-r-md"
        // onClick={handleSearch}
      >
        {/* <Search className="w-5 h-5" /> */}
      {/* </button>
    </Command> */} 
  </div>
  );
};

export default Search;
