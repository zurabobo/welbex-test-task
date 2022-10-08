import React from "react";
import "./Preloader.css";
import { Table } from "react-bootstrap";

const Preloader = () => {
  return (
    <Table
      striped
      bordered
      className="border-color text-center p-3 mx-auto mt-5 mb-4"
    >
      <thead>
        <tr>
          <th>Дата</th>
          <th>
            Название
            <button className="sort-button"></button>
          </th>
          <th>
            Количество
            <button className="sort-button"></button>
          </th>
          <th>
            Расстояние
            <button className="sort-button" data-type="distance"></button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="shimmer">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="shimmer">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="shimmer">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="shimmer">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="shimmer">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Preloader;
