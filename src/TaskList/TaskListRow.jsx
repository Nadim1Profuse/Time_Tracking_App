import React from "react";
import Button from 'react-bootstrap/Button';


const TaskListRow = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.time}</td>
      <td>
        <span>
          <Button value={props.index} onClick={props.edit} variant="outline-info">
            {" "}
            Edit
          </Button>{" "}
        </span>{" "}
        <span>
          <Button value={props.index} onClick={props.delete} variant="outline-danger">
            Delete
          </Button>{" "}
        </span>{" "}
      </td>
    </tr>
  );
};

export default TaskListRow;
