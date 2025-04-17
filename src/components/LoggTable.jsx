import React from "react";

const LoggTable = ({ logs }) => (
  <table className="logg-table">
    <thead>
      <tr>
        <th>Dato</th>
        <th>Navn</th>
        <th>Oppgave</th>
        <th>Timer</th>
      </tr>
    </thead>
    <tbody>
      {logs.map((log, index) => (
        <tr key={index}>
          <td>{log.date}</td>
          <td>{log.name}</td>
          <td>{log.task}</td>
          <td>{log.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LoggTable;