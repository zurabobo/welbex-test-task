import './InfoTable.css';
import { Table } from "react-bootstrap";
import React from 'react';

function InfoTable({ data, onSort }) {
  const [order, setOrder] = React.useState({ name: 'asc', total: 'asc' });

  function handleClick({ target }) {
  
    if (target.nodeName === 'BUTTON') {
      const { dataset: { type } } = target;
      setOrder(prev => {
        const newOrder = prev[type] === 'asc' ? 'desc' : 'asc';
        return { ...prev, [type]: newOrder };
      });

    }
  }

  function getArrow(order) {
    if (order === 'asc') {
      return '↑'
    } else {
    return '↓';
    }
  }

  return (
    <Table onClick={handleClick} striped bordered className="border-dark text-center p-3 mx-auto mt-5">
      <thead>
        <tr>
        <th>Дата</th>
        <th>Название <button className="sort-button" data-type="name" onClick={() => onSort('name')}>{getArrow(order.name)}</button></th>
        <th>Количество <button className="sort-button" data-type="points" onClick={() => onSort('points')}>{getArrow(order.points)}</button></th>
        <th>Расстояние <button className="sort-button" data-type="distance" onClick={() => onSort('distance')}>{getArrow(order.distance)}</button></th>
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
