import React, { useState, useEffect } from "react";

const useAPI = (route, id) => {
  //fetch data
  useEffect(() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    fetch(`${baseUrl}/${route}/${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, [route, id]);
  //async await
  // const fetchData = async () => {
  //   const baseUrl = "https://jsonplaceholder.typicode.com";
  //   const response = await fetch(`${baseUrl}/${route}/${id}`);
  //   const data = await response.json();
  //   return data;
  // }
  // fetchData();
  return <div>useAPI</div>;
};

export default useAPI;
