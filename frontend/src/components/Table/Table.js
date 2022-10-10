import React from "react";
import "./Table.css";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import { Table as BootstrapTable } from "react-bootstrap";

const Table = ({ data, columns, onSort, isNotSorted }) => {
  return (
    <BootstrapTable
      striped
      bordered
      className="border-color text-center p-3 mx-auto mt-5"
    >
      <TableHead
        columns={columns}
        isNotSorted={isNotSorted}
        onSort={onSort}
      />
      <TableBody columns={columns} tableData={data} />
    </BootstrapTable>
  );
};

export default Table;
