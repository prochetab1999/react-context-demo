import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";

function App() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);
        console.log(json);
      });
  },[]);
  return <div className="App">
    <Form options={response}/>
  </div>;
}

export default App;
