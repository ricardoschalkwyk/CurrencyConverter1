import React from "react";
import { Button, Modal } from "react-bootstrap";

function ModalAlert({
  handleClose,
  handleReject,
  handleSuccess,
  modalText,
  show,
  title,
}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalText}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleReject();
            handleClose();
          }}
        >
          Quit game
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSuccess();
            handleClose();
          }}
        >
          New Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlert;
