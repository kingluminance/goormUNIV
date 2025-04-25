//3주차 코드에요
import { useState } from "react";
import "./App.css";

function App3() {
  return (
    <div>
      <Asd>
        <h4>hello</h4>
      </Asd>
    </div>
  );
}

function Asd({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default App3;
