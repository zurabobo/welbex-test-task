import React from "react";
import { Table } from "react-bootstrap";

const Info = ({ renderData }) => {
  return (
    <>
      {renderData.map((user, index) => (
        <tr key={index}>
          <td>{user.date_of_birth}</td>
          <td>{user.user_name}</td>
          <td>{user.quantity}</td>
          <td>{user.distance}</td>
        </tr>
      ))}
    </>
  );
};

export default Info;
