import axios from "axios";
import React, { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { productApiUrl } from "../shared/constants";

const Menu = ({ setResult }) => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  //   throttling API requests
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const clearSearch = async () => {
    const { data } = await axios.get(productApiUrl);
    setTerm("");
    setResult({
      searchTerm: "",
      items: data,
    });
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(productApiUrl, {
        params: {
          search: debouncedTerm,
        },
      });
      setResult({
        searchTerm: debouncedTerm,
        items: data,
      });
    };
    search();
  }, [debouncedTerm]);

  const showSearchContainer = (e) => {
    e.preventDefault();
    setShowingSearch(!showingSearch);
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(e) => showSearchContainer(e)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>

      <div className={(showingSearch ? "showing " : "") + "search-container"}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search products..."
        />
        {debouncedTerm && (
          <button onClick={() => clearSearch()}>Clear search</button>
        )}
        <a href="#" onClick={(e) => showSearchContainer(e)}>
          <i className="material-icons close">close</i>
        </a>
      </div>
    </header>
  );
};

export default Menu;
