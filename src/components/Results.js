import React from "react";
import { Result } from "./Result";
//rafc
export const Results = ({ resultData, openPopup }) => {
  return (
    <section className='results'>
      {typeof resultData != "undefined" ? ( //  "undefined"  data not passing through
        resultData.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      ) : (
        <p>No data</p>
      )}
    </section>
  );
};
