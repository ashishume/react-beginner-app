import React from "react";
import { Modal, Button } from "react-bootstrap";
const Modals = props => {
  return (
    <div>
      <Modal backdrop="static" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Stream</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={props.handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modals;
