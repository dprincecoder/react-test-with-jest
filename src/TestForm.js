import React, { useState } from "react";

const TestForm = () => {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const handleChange = (event) => setValueChange(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.text.value);
  };

  return (
    <div>
      <h1> React Hooks Form </h1>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor="text">Input Text:</label>
        <input id="text" onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form>
      <h3>React form State below</h3>
      <p>Change: {valueChange}</p>
      <p>Submit Value: {valueSubmit}</p>
      <br />
    </div>
  );
};

export default TestForm;
