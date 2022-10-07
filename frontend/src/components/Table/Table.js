import React, { useState } from 'react';
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import { useSortableTable } from "../../hooks/useSortableTable";
import "./Table.css";
import { Table as BootstrapTable } from "react-bootstrap";

const Table = ({ data, columns, handleSorting }) => {

  // const  [tableData, handleSorting] = useState(useSortableTable(data, columns));
  

  return (
    <BootstrapTable
      // onClick={handleClick}
      striped
      bordered
      className="border-color text-center p-3 mx-auto mt-5"
    >
      {/* <TableHead {...{ columns, handleSorting }} />
      <TableBody {...{ columns, tableData}} /> */}
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={data} />
    </BootstrapTable>
  );
};

export default Table;

// import TableBody from "../TableBody/TableBody";
// import TableHead from "../TableHead/TableHead";
// import "./Table.css";
// import {Table as BootstrapTable} from "react-bootstrap";

// const Table = ({ tableData }) => {
//   //  const [tableData, setTableData] = useState(tableData1);

//   const columns = [
//     { label: "Дата", accessor: "date_of_birth" },
//     { label: "Название", accessor: "user_name" },
//     { label: "Количество", accessor: "quantity" },
//     { label: "Расстояние", accessor: "distance" },
//   ];

//   return (
//     <BootstrapTable
//       // onClick={handleClick}
//       striped
//       bordered
//       className="border-dark text-center p-3 mx-auto mt-5"
//     >
//       <TableHead columns={columns} />
//       <TableBody columns={columns} tableData={tableData} />
//     </BootstrapTable>
//   );
// };

// export default Table;

