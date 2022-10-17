import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import axios from "axios";
import Popup from "./components/Popup";
import { apiSearch } from "./Api";

function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(""); //shows the popup if true, otherwise closes it
  const [apiResults, setApiResults] = useState([]);

  //passed in to the search component
  const searchCall = async (event) => {
    if (event.key === "Enter") {
      apiSearch(search)
        .then((result) => {
          console.log("Api Search  from Api.js ", result);
          setApiResults(result);
        })
        .catch((error) => {
          console.log("Api Search error ", error);
          return;
        });
      console.log("apiResults  ", apiResults);
    }
  };

  //handleInput gets the value from the search box and passes it to state where its stored before pushing to the API above
  const handleInput = (event) => {
    setSearch(event.target.value);
    return { search };
  };

  function openPopup(id) {
    const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";
    console.log("openPopup ", id);
    let searchUrl = apiUrl + "&i=" + id;
    console.log("openPopup searchURL", searchUrl);
    axios(searchUrl).then(({ data }) => {
      let result = data;
      console.log("openPopup search result", result);
      setSelected(result);
      return { selected };
    });
    // movieProviders(result.Title); //get the provider data for the movie selected
  }

  const closePopup = () => {
    setSelected("");
    return { selected };
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movie Database</h1>
        <h4>Click on a movie to see the plot</h4>
      </header>
      <main>
        <Search handleInput={handleInput} search={searchCall} />
        <Results resultData={apiResults} openPopup={openPopup} />

        {typeof selected.Title != "undefined" ? ( //if its not equal to undefined show popup
          <Popup selected={selected} closePopup={closePopup} /> //show popup
        ) : (
          false //otherwise show nothing
        )}
      </main>
    </div>
  );
}

export default App;
