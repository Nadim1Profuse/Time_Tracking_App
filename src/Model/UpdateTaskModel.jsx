import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskDetails } from "../features/taskDetails/taskDetailsSlice";

export default function UpdateTaskModel(props) {
  const [taskArray] = useState(
    useSelector((state) => state.taskDetailReducer.taskDetails)
  );
  const [selectedTask] = useState(taskArray[parseInt(props.updateIndex)]);

  const [taskDetails, setTaskDetails] = useState({
    title: selectedTask.title,
    description: selectedTask.description,
    index: props.updateIndex,
  });

  console.log("task Array in update", taskArray);
  console.log("selected taske for update", selectedTask);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log("Task details  in updateTaskModel.jsx=", taskDetails);
    dispatch(updateTaskDetails(taskDetails));
    props.onHide();
    props.openConfirmModel()
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleTaskSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              name="title"
              value={taskDetails.title}
              required
              type="text"
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              name="description"
              value={taskDetails.description}
              required
              onChange={handleChange}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div style={{ textAlign: "end" }}>
            <Button
              style={{ marginInlineEnd: "1rem" }}
              type="submit"
              variant="outline-success"
            >
              Save{" "}
            </Button>{" "}
            <Button variant="outline-danger" onClick={props.onHide}>
              Cancle
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
