/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import Result from "./result";

const Home = ({ result }) => {
  return (
    <section id="home">
      <div className="content">
        <>
          <div className="content__heading">
            <h2>
              Showing {result.items.length} products{" "}
              {result.searchTerm && <span>for "{result.searchTerm}"</span>}
            </h2>
          </div>
          {result.items.length > 0 && (
            <ul>
              {result.items.map((result) => (
                <li key={result._id}>
                  <Result result={result} />
                </li>
              ))}
            </ul>
          )}
        </>
      </div>
    </section>
  );
};

export default Home;
