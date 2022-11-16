import React, { useState, useEffect } from "react";

const TestFetch = (props) => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json)
      .then((data) => setState(data))
      .catch((err) => console.error(err));
  }, [props.url]);

  return (
    <div>
      <h1> fetch Test </h1>
      {state ? <p data-testid="title">{state.title}</p> : <p>...Loading</p>}
    </div>
  );
};

export default TestFetch;
