import React from "react";

function Result({ result, openPopup }) {
  //  console.log("result title ", result.Title);
  // console.log("result Poster ", result.Poster);
  //console.log("Popup ID ", result.imdbID);
  return (
    <div className='result' onClick={() => openPopup(result.imdbID)}>
      <div className='row'>
        <div className='col'>
          <img src={result.Poster} />
        </div>
        <div className='col'>
          <h3>{result.Title}</h3>
          <h3>{}</h3>
          <h4>{result.Plot}</h4>
        </div>
      </div>
    </div>
  );
}

export default Result;
