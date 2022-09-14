import React, { FC, useState } from "react";
import { useStarWars } from "../../hooks/useStarWars";
import "./Search.css";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const { searchPeople, searchPlanet } = useStarWars();
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    searchPeople(query);
    searchPlanet(query);
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
