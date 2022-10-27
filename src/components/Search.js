import React from "react";
//instead of going search(props) and then getting out the props.handleInput, we can DESTRUCTURE the props (pull them apart) and instead just get out the one we want. We do this by just adding {} in the search

//onKeyPress={search} is only looking for the enter key press in the search function

export const Search = ({ handleInput, search }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search for a movie ... '
        className='searchbox'
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
};
