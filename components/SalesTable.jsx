import React from "react";

export const SalesTable = ({ sales }) => {
  return (
    <div>
      {sales.map((sale, i) => {
        return <div key={i}>{sale.item}</div>;
      })}
    </div>
  );
};
