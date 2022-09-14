import React from "react";
import Search from "../Search/Search";
import RowHeader from "./RowHeader/RowHeader";
import HeaderList from "./HeaderList/HeaderList";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <>
      <RowHeader
        left={
          <div className="header">
            <Logo />
            <HeaderList />
          </div>
        }
        right={<Search />}
      />
    </>
  );
};

export default Header;
