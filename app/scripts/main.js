/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
const App = () => {
  const [result, setResult] = useState({
    searchTerm: "",
    items: [],
  });

  return (
    <div className="App">
      <Menu setResult={setResult} />
      <Home result={result} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
