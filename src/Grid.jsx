import React from "react";

export default ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.length > 0 &&
          employees.map((e, i) => (
            <tr key={i}>
              <th>{e.id}</th>
              <th>{e.name}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
