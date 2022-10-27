import { React, useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import { Popup } from "./components/Popup";
import { apiSearch, apiOpenPopup } from "./Utilities/Api";

function App() {
  const [search, setSearch] = useState(""); //search term
  const [selected, setSelected] = useState(""); //shows the popup if true, otherwise closes it
  const [apiResults, setApiResults] = useState([]); //results from the api

  //pass in to the search component
  //need async to get .then to work
  const searchCall = async (event) => {
    if (event.key === "Enter") {
      apiSearch(search) //run the search from api.js
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
    console.log("handleInput event", event.target.value);
    setSearch(event.target.value);
  };

  const openPopup = (id) => {
    console.log("openPopupid ", id);

    apiOpenPopup(id) //run the search from api.js
      .then((result) => {
        console.log("apiOpenPopup  from Api.js ", result);
        setSelected(result);
      })
      .catch((error) => {
        console.log("apiOpenPopup error ", error);
        return;
      });
    console.log("apiOpenPopup  ", selected);

    return { selected };
  };

  //controls the close button, clears selected state and so if statement doesn't run ... sneeky
  const closePopup = () => {
    setSelected("");
    return { selected };
  };

  return (
    <div>
      <header>
        <h1>Movie Database</h1>
        <h4>Search and then click on a movie to see the plot</h4>
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
