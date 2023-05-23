import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";
import InfoCard from "./InfoCard";

function App() {
  const [response, setResponse] = useState([]);
  const [personSelected, setPersonSelected] = useState("");
  const onPersonSelected = (personName) => {
    setPersonSelected(personName);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setResponse(json);
      });
  }, []);
  return (
    <div className="App">
      <Form options={response} onFormUpdate={onPersonSelected} />
      <InfoCard personName={personSelected} />
    </div>
  );
}

export default App;
