import { useState } from "react";
import "./TableHead.css";

const TableHead = ({ columns, onSort, isNotSorted }) => {
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
  );
};

export default TableHead;
