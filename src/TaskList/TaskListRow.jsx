import React from "react";
import Button from "react-bootstrap/Button";

const TaskListRow = (props) => {
  const { id, title, description, time, index, editTask, deleteTask } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{time}</td>
      <td>
        <span>
          <Button value={index} onClick={editTask} variant="outline-info">
            {" "}
            Edit
          </Button>{" "}
        </span>{" "}
        <span>
          <Button
            value={props.index}
            onClick={deleteTask}
            variant="outline-danger"
          >
            Delete
          </Button>{" "}
        </span>{" "}
      </td>
    </tr>
  );
};

export default TaskListRow;
