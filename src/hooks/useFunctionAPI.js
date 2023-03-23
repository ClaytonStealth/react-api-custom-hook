import React, { useState } from "react";

const useFunctionAPI = (route, id) => {
  const [data, setData] = useState("");
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const fetchData = (route, id) => {
    fetch(`${baseUrl}/${route}/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
    // async await
    // const fetchData = async () => {
    //   const response = await fetch(`${baseUrl}/${route}/${id}`);
    //   const responseJSON = await response.json();
    // setData(responseJSON)
    //return data
    // }
    return data;
  };
  return fetchData;
};
export default useFunctionAPI;
