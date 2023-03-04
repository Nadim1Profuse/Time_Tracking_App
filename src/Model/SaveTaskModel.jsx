import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskDetails } from "../features/taskDetails/taskDetailsSlice";

export default function SaveTaskModel(props) {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    time: props.trackedTime,
  });

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
    console.log("Task details  in saveTaskModel.jsx=", taskDetails);
    props.onHide();
    dispatch(addTaskDetails(taskDetails));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Save Task</Modal.Title>
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
