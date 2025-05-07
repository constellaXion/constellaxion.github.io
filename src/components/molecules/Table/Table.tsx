import React from "react";
import TableProps from "./types";

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <table style={{ fontFamily: "Monospace" }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
