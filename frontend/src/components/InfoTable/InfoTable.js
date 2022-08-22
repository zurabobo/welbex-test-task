// import './InfoTable.css';
// import { Table } from "react-bootstrap";
// import React from 'react';

// function InfoTable({ data, onSort }) {
//   const [order, setOrder] = React.useState({ name: 'asc', total: 'asc' });

//   function handleClick({ target }) {
  
//     if (target.nodeName === 'BUTTON') {
//       const { dataset: { type } } = target;
//       setOrder(prev => {
//         const newOrder = prev[type] === 'asc' ? 'desc' : 'asc';
//         return { ...prev, [type]: newOrder };
//       });

//     }
//   }

//   function getArrow(order) {
//     if (order === 'asc') {
//       return '↑'
//     } else {
//     return '↓';
//     }
//   }

//   return (
//     <Table onClick={handleClick} striped bordered className="border-dark text-center p-3 mx-auto mt-5">
//       <thead>
//         <tr>
//         <th>Дата</th>
//         <th>Название <button className="sort-button" data-type="user_name" onClick={() => onSort('user_name')}>{getArrow(order.user_name)}</button></th>
//         <th>Количество <button className="sort-button" data-type="quantity" onClick={() => onSort('quantity')}>{getArrow(order.quantity)}</button></th>
//         <th>Расстояние <button className="sort-button" data-type="distance" onClick={() => onSort('distance')}>{getArrow(order.distance)}</button></th>
//         </tr>
//       </thead>
//       <tbody>
//       {data.map((user, i) => (
// 					<tr key={i}>
// 						<td>{user.date_of_birth}</td>
// 						<td>{user.user_name}</td>
// 						<td>{user.quantity}</td>
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
import React, { useState, useEffect } from 'react';
import { QUANTIITY, QUANTITY_DATAS_TO_RENDER } from '../../utils/config';

function InfoTable({ data, onSort }) {
  const [order, setOrder] = useState({ name: 'asc', total: 'asc' });
  // const [dataToRender, setDataToRender] = useState([]);
  // const [quantityDataToRender, setQuantityDataToRender] = useState(0);

  // const countQuantityDataToRender = () => {
  //   setQuantityDataToRender(QUANTITY_DATAS_TO_RENDER)
  // };

  // useEffect(() => {
  //   countQuantityDataToRender();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // useEffect(() => {
  //   setDataToRender(data.slice(QUANTIITY, quantityDataToRender));
  // }, [data, quantityDataToRender])

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
        <th>Название <button className="sort-button" data-type="user_name" onClick={() => onSort('user_name')}>{getArrow(order.user_name)}</button></th>
        <th>Количество <button className="sort-button" data-type="quantity" onClick={() => onSort('quantity')}>{getArrow(order.quantity)}</button></th>
        <th>Расстояние <button className="sort-button" data-type="distance" onClick={() => onSort('distance')}>{getArrow(order.distance)}</button></th>
        </tr>
      </thead>
      <tbody>
      {data.map((user, i) => (
					<tr key={i}>
						<td>{user.date_of_birth}</td>
						<td>{user.user_name}</td>
						<td>{user.quantity}</td>
						<td>{user.distance}</td>
					</tr>
				))}
      </tbody>
    </Table>
  );
}

export default InfoTable;
