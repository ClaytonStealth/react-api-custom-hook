import "./App.css";
import useAPI from "./hooks/useAPI";
import useInput from "./hooks/useInput";
import { useState } from "react";
function App() {
  // console.log(useAPI("users", 2));
  const [query, setQuery] = useState("query");
  //custom Hook for input
  const route = useInput("route");
  const id = useInput("id");
  const name = useAPI(route.value, id.value).name;
  const API = useAPI(route.value, id.value);
  //custom Hook for function

  const queryFunc = () => {
    setQuery(API);
  };
  return (
    <div className='App App-header'>
      <h1>Custom API Hooks</h1>
      input Route
      <input {...route} />
      input ID
      <input {...id} />
      <p>{name}</p>
      <p>title: {API.title}</p>
      <p>-------------------------------------</p>
    </div>
  );
}

export default App;
