import * as React from "react";

export function App() {
  const dynamicMessage = React.useState("Hello from App.jsx");
  return (
    <div>
      <h3>{dynamicMessage}</h3>
      <h4>Start editing at creinda/public/js/inventory/App.jsx</h4>
      <span>TEST!!!</span>
    </div>
  );
}
