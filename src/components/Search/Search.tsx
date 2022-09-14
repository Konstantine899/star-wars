import React, { FC, useEffect, useState } from "react";
import { useStarWars } from "../../hooks/useStarWars";
import "./Search.css";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const { searchPeople, searchPlanet, searchStarship } = useStarWars();

  useEffect(() => {
    searchPeople(query);
    searchPlanet(query);
    searchStarship(query);
  }, [query]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="search-people">
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
