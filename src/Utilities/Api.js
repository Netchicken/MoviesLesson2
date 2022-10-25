import axios from "axios";

//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";

// export const apiOpenPopup = (id) => {
//   console.log("apiOpenPopup ", id);
//   let searchUrl = apiUrl + "&i=" + id;
//   console.log("apiOpenPopup searchURL", searchUrl);
//   axios(searchUrl).then(({ data }) => {
//     let result = data;
//     console.log("apiOpenPopup search result", result);

//     return { result };
//   });
// }

export const apiOpenPopup = (id) => {
  let searchUrl = apiUrl + "&i=" + id;

  return new Promise((resolve, reject) => {
    //if no method is provided, GET will be used as the default value.
    axios
      .get(searchUrl)
      .then(({ data }) => {
        const result = data;
        console.log("Api apiOpenPopup ", result);
        resolve(result);
        return;
      })
      .catch((err) => {
        reject(err.message);
        return;
      });
  });
};

//need async to get .then on app.js
export const apiSearch = (search) => {
  let searchUrl = apiUrl + "&s=" + search;

  return new Promise((resolve, reject) => {
    //if no method is provided, GET will be used as the default value.
    axios
      .get(searchUrl)
      .then(({ data }) => {
        //   console.log("ApiResult raw data", data);
        //don't forget {data} to deconstruct down to the data layer else use data.data
        const result = data.Search;
        // console.log("Api Result search ", result);
        resolve(result);
        return;
        //return result; //this is what the json tree is returning data/data/Search/all the results

        //   console.log("Search data", result);
        //     return result;
      })
      .catch((err) => {
        reject(err.message);
        return;
      });
  });
};
