import React, { FC, useState } from "react";
import { useStarWars } from "../../hooks/useStarWars";
import "./Search.css";

interface ISearch {
  loading: boolean;
}

const Search: FC<ISearch> = ({ loading }) => {
  const [query, setQuery] = useState("");
  const { searchPeople } = useStarWars();
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    searchPeople(query);
  };
  return (
    <>
      {loading ? null : (
        <input
          className=" col-md-4"
          type="text"
          value={query}
          placeholder="Search"
          onChange={onSearch}
        />
      )}
    </>
  );
};

export default Search;
