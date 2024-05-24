import React from "react";

export const booleanCellRender = ({ value }) => {
  return (
    <div
      style={{
        color: value ? "#2e7d32" : "#d32f2f",
        fontWeight: "bold",
      }}
    >
      {value ? "Active" : "Not Active"}
    </div>
  );
};
