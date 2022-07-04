import React from "react";
import { Modal, Button } from "react-bootstrap";
import warning from "./../../../assets/img/warning.png";
import closeNotification from "./../../../assets/img/close-notification.png";
// import { borderBottom, grid, padding } from "@mui/system";
import "./deleteConfirmationModal.css";
import { deleteFarmList } from "./../../../redux/slice/farm/farmListBox";
import { useDispatch } from "react-redux";

const DeleteConfirmationModal = ({
  showModal,
  hideModal,
  confirmModal,
  id,
//   deleteFarmStore,
  //   type,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFarmList(id));
    confirmModal();
    hideModal();
    // deleteFarmStore(id);
  };

  return (
    <Modal
      show={showModal}
      sx={{ borderRadius: "25px !important" }}
      style={{ borderRadius: "25px !important" }}
    >
      <div className="modal-header">
        <img
          src={closeNotification}
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={hideModal}
        />
        <img
          src={warning}
          style={{ padding: "45px" }}
          className="d-block mx-auto"
        />
        <h4
          style={{ textAlign: "center", fontWeight: "800", color: "#676767" }}
        >
          اطمینان به حذف دارید؟
        </h4>
      </div>
      <Modal.Body
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "16px",
          color: "#aeaeae",
        }}
      >
        <div>داده های حذف شده قابل بازیابی نمی باشند</div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-top-0">
        <Button
          variant="danger"
          //   onClick={() => confirmModal(id)}
          onClick={() => handleDelete(id)}
          style={{
            fontWeight: "800",
            backgroundColor: "#f1634b",
            padding: "10px",
            width: "25%",
            borderRadius: "10px",
          }}
        >
          حذف
        </Button>
        <Button
          variant="default"
          onClick={hideModal}
          style={{
            color: "#676767",
            fontWeight: "800",
            width: "25%",
            padding: "10px",
          }}
        >
          انصراف
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
