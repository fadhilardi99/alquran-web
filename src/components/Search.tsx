// src/components/Search.tsx
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  onSearch: (query: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full px-5 pt-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari surah..."
          className="w-full p-3 pl-10 rounded-lg bg-dark dark:bg-dark-card text-light"
        />
        <FaSearch className="absolute left-3 text-light" />
        <button
          type="submit"
          className="absolute right-3 bg-primary dark:bg-dark-primary px-3 py-1 rounded-md text-light text-sm"
        >
          Cari
        </button>
      </div>
    </form>
  );
}

export default Search;
