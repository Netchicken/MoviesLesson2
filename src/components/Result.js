import React from "react";

function Result({ result, openPopup }) {
  //  console.log("result title ", result.Title);
  // console.log("result Poster ", result.Poster);
  //console.log("Popup ID ", result.imdbID);
  return (
    <div className='result' onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
      <h4>{result.Plot}</h4>
    </div>
  );
}

export default Result;
