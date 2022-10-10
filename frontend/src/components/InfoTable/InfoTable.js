import "./InfoTable.css";
import { Table as BootstrapTable } from "react-bootstrap";
import React, { useState } from "react";

function InfoTable({ data, columns, onSort, isNotSorted }) {
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
            const arrowClassName = sortable
              ? sortField === accessor && order === "asc"
                ? "arrow-up"
                : sortField === accessor && order === "desc"
                ? "arrow-down"
                : "arrow-default"
              : "";
            return (
              <th
                key={accessor}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
                className={
                  isNotSorted && sortable ? "arrow-default" : arrowClassName
                }
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
