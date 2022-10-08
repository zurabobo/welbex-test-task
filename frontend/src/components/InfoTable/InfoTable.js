import "./InfoTable.css";
import { Table as BootstrapTable } from "react-bootstrap";
import React, { useState } from "react";

function InfoTable({ data, columns, onSort }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    onSort(accessor, sortOrder);
  };

  return (
    <BootstrapTable
      striped
      bordered
      className="border-color text-center p-3 mx-auto mt-5"
    >
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            const clName = sortable
              ? sortField === accessor && order === "asc"
                ? "up"
                : sortField === accessor && order === "desc"
                ? "down"
                : "default"
              : "";
            return (
              <th
                key={accessor}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
                className={clName}
              >
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((data) => {
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
}

export default InfoTable;
