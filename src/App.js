import "./App.css";
import TestHook from "./TestHook";
import { useState } from "react";
import TestHookReducer from "./TestHookReducer";
import Context from "./store/context";
import TestHookContext from "./TextHookContext";
import { example } from "./example";
import TestForm from "./TestForm";
import TestFetch from "./TestFetch";

function App() {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const ex = example("Squared", 6, 1);
  console.log(ex);

  const changeText = () => {
    setState("Some Other Text");
  };

  const changeName = () => {
    setName("Steve");
  };
  return (
    <div className="App">
      <header className="App-header">
        <TestHookReducer /> <br />
        <TestHook name={name} changeName={changeName} />
        <br />
        <h1> Basic Hook useContext</h1>
        <Context.Provider
          value={{ changeTextProp: changeText, stateProp: state }}
        >
          <TestHookContext />
        </Context.Provider>
        <br />
        <TestForm />
        <br />
        <TestFetch url="https://jsonplaceholder.typicode.com/posts/1" />
      </header>
    </div>
  );
}

export default App;
