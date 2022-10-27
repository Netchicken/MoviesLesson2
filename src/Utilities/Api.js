import axios from "axios";
const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";

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

//https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/


export const apiSearch = (search) => {
  let searchUrl = apiUrl + "&s=" + search;

  return new Promise((resolve, reject) => {
    //if no method is provided, GET will be used as the default value.
    axios
      .get(searchUrl)
      .then(({ data }) => {
        console.log("ApiResult raw data", data);
        //don't forget {data} to deconstruct down to the data layer else use data.data
        const result = data.Search;
        console.log("Api Result search ", result);
        resolve(result);
        return;
      })
      .catch((err) => {
        reject(err.message);
        return;
      });
  });
};
