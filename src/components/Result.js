import React from "react";

function Result({ result, openPopup }) {
  //  console.log("result title ", result.Title);
  // console.log("result Poster ", result.Poster);
  //console.log("Popup ID ", result.imdbID);
  return (
    <div className='result' onClick={() => openPopup(result.imdbID)}>
      <h3>{result.Title}</h3>
      <img src={result.Poster} />
         
    </div>
  );
}

export default Result;
