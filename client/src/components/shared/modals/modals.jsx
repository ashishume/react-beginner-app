import React from "react";
import { Modal,Button } from "react-bootstrap";
const Modals = props => {
  
  return (
    <Modal show={props.isVisible}>
      <Modal.Header closeButton>
        <Modal.Title>{props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.modalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;