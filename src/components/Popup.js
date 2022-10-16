import React from "react";
import Provider from "./Provider";

function Popup({ selected, closePopup }) {
  // console.log("Popup title", selected.Title);

  return (
    <section className='popup'>
      <div className='content'>
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className='rating'>Rating: {selected.imdbRating}</p>
        <div className='plot'>
          <img src={selected.Poster} alt='text' />

          <p>{selected.Plot}</p>
        </div>
        <button className='close' onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
