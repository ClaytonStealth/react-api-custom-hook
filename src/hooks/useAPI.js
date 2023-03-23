import React, { useState, useEffect } from "react";

const useAPI = (route, id) => {
  const [data, setData] = useState("");
  //fetch data
  useEffect(() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    fetch(`${baseUrl}/${route}/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
    // async await
    // const fetchData = async () => {
    //   const baseUrl = "https://jsonplaceholder.typicode.com";
    //   const response = await fetch(`${baseUrl}/${route}/${id}`);
    //   const data = await response.json();
    //   return data;
    // }
    // fetchData();
  }, [route, id]);
  switch (route) {
    case "users":
      let newData = {
        ...data,
      };
      if (newData.name === undefined) {
        newData.name = "No Data";
      }
      return newData;
    case "todos":
      return {
        name: "empty",
        title: data.title,
      };
    case "posts":
      return {
        name: "empty",
        ...data,
      };
    default:
      return data;
  }
};

export default useAPI;
