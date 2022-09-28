import React from "react";

function App() {
  return (
    <div className="App">
      <h3>react: {process.env.REACT_APP_VAR}</h3>
      <h3>common: {process.env.COMMON_VAR}</h3>
      <h3>environment: {process.env.ENV_VAR}</h3>
    </div>
  );
}

export default App;
