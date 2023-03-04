import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import TaskListHead from "./TaskListHead";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import TaskListRow from "./TaskListRow";
import { deleteTask } from "../features/taskDetails/taskDetailsSlice";
import ConfirmedModel from "../Model/ConfirmedModel";
import UpdateTaskModel from "../Model/UpdateTaskModel";

const TaskList = () => {
  const taskDetails = useSelector(
    (state) => state.taskDetailReducer.taskDetails
  );
  const [updateConfirmModelShow, setUpdateConfirmModelShow] = useState(false);
  const [deleteConfirmModalShow, setDeleteConfirmModalShow] = useState(false);
  const [updateModelShow, setUpdateModelShow] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    const clickedIndex = e.target.value;
    setUpdateIndex(clickedIndex);
    console.log("handleEdit trigred index id=", clickedIndex);
    setUpdateModelShow(true);
  };

  const handleDelete = (e) => {
    const clickedIndex = e.target.value;
    console.log("hanldeDelte trigred index value=", clickedIndex);
    dispatch(deleteTask(clickedIndex));
    setDeleteConfirmModalShow(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 1200,
          marginTop: "3rem",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          <CardContent alignItems="center">
            <Table style={{ textAlign: "center" }} striped bordered hover>
              <thead style={{ backgroundColor: "#1976d2", color: "white" }}>
                <TaskListHead />
              </thead>
              <tbody>
                {taskDetails.length > 0 &&
                  taskDetails.map((task, index) => (
                    <TaskListRow
                      key={index}
                      index={index}
                      id={index + 1}
                      title={task.title}
                      description={task.description}
                      time={task.time}
                      edit={handleEdit}
                      delete={handleDelete}
                    />
                  ))}
              </tbody>
            </Table>
          </CardContent>
        </CardActionArea>
      </Card>
      {deleteConfirmModalShow && (
        <ConfirmedModel
          show={deleteConfirmModalShow}
          onHide={() => setDeleteConfirmModalShow(false)}
          title="Successfully Deleted"
        />
      )}

      {updateConfirmModelShow && (
        <ConfirmedModel
          show={updateConfirmModelShow}
          onHide={() => setUpdateConfirmModelShow(false)}
          title="Successfully Updated"
        />
      )}
      {updateModelShow && (
        <UpdateTaskModel
          show={updateModelShow}
          onHide={() => setUpdateModelShow(false)}
          updateIndex={updateIndex}
          openConfirmModel={()=>setUpdateConfirmModelShow(true)}
        />
      )}
    </>
  );
};

export default TaskList;
