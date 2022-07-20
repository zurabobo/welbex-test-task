// import './InfoTable.css';
// import { Table } from "react-bootstrap";
// import { TABLE_COLUMNS } from '../../utils/config';

// function InfoTable({ data, onSort }) {
//   return (
//     <Table striped bordered className="border-dark text-center p-3 mx-auto mt-5">
//       <thead className="table-dark">
//         <tr>
//         <th>Дата</th>
//           {TABLE_COLUMNS.map((el, i) => (
//             <th key={i}>{el.label}<i className="fa fa-fw fa-sort" onClick={() => onSort('name')}></i></th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//       {data.map((user, i) => (
// 					<tr key={i}>
// 						<td>{user.date}</td>
// 						<td>{user.name}</td>
// 						<td>{user.points}</td>
// 						<td>{user.distance}</td>
// 					</tr>
// 				))}
//       </tbody>
//     </Table>
//   );
// }

// export default InfoTable;


import './InfoTable.css';
import { Table } from "react-bootstrap";
import React from 'react';

function InfoTable({ data, onSort }) {
  const [order, setOrder] = React.useState({ name: 'asc', total: 'asc' });

  function handleClick({ target }) {
  
    // Instead of attaching a handler to each button,
    // there is one on the table, and we simply need to check
    // that the element we've clicked on is a button instead.
    if (target.nodeName === 'BUTTON') {

      // Grab the type (name, total etc) from the data attribute
      const { dataset: { type } } = target;

      // Set the state of the new order
      setOrder(prev => {
        const newOrder = prev[type] === 'asc' ? 'desc' : 'asc';
        return { ...prev, [type]: newOrder };
      });

    }
  }
  function getArrow(order) {
    if (order === 'asc') {
      return <i class="bi bi-sort-up"></i>
    } else {
    return <i class="bi bi-sort-down-alt"></i>;
    }
  }
  return (
    <Table onClick={handleClick} striped bordered className="border-dark text-center p-3 mx-auto mt-5">
      <thead>
        <tr>
        <th>Дата</th>
            <th>Название<button className="sort-button" data-type="name" onClick={() => onSort('name')}>{getArrow(order.name)}</button></th>
            <th>Количество<button className="sort-button" data-type="points" onClick={() => onSort('points')}>{getArrow(order.points)}</button></th>
            <th>Расстояние<button className="sort-button" data-type="distance" onClick={() => onSort('distance')}>{getArrow(order.distance)}</button></th>
        </tr>
      </thead>
      <tbody>
      {data.map((user, i) => (
					<tr key={i}>
						<td>{user.date}</td>
						<td>{user.name}</td>
						<td>{user.points}</td>
						<td>{user.distance}</td>
					</tr>
				))}
      </tbody>
    </Table>
  );
}

export default InfoTable;
