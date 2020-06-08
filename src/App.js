import React from "react";
import "./styles.css";
import ControlPanel from "./ControlPanel";

export default function App() {
  const employees = [];

  for (let i = 0; i < 23; i++) {
    employees.push({ id: i + 1, name: Math.random(1000, 9999) });
  }

  return (
    <div className="App">
      <ControlPanel employees={employees} />
    </div>
  );
}
