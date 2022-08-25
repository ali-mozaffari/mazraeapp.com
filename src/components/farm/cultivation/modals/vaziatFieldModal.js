import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./farmModal.css";

const Data = [
  {
    id: 1,
    title: "تصمیم به کشت",
  },
  {
    id: 2,
    title: "محصول کشت شده",
  },
  {
    id: 3,
    title: "محصول برداشت شده",
  },
  {
    id: 4,
    title: "محصول از بین رفته",
  },
];

const VaziatFieldModal = ({ showModal, hideModal, data }) => {
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected({ value: e.target.value, name: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data(selected);
  };

  return (
    <Modal show={showModal} className="farm-field-modal">
      <form onSubmit={handleSubmit}>
        <div className="farm-field-modal-header justify-content-start">
          <img
            src={closeNotification}
            style={{
              position: "absolute",
              left: "25px",
              top: "30px",
              height: "16px",
              cursor: "pointer",
            }}
            onClick={hideModal}
          />

          <h6 style={{ fontWeight: "800", color: "#676767" }}>
            انتخاب وضعیت
          </h6>
        </div>
        {/* <hr style={{ height: "2px", margin: "0" }} /> */}
        <div className="farm-field-modal-body year-field-modal">
          {/* <Select data={data} onSelect={onSelect} /> */}
          <div
            style={{
              margin: "0",
              marginTop: "30px",
              // borderBottom: "1px solid #aeaeae",
              color: "#4A4A4A",
            }}
          >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              onChange={handleChange}
            >
              {Data?.map((item) => (
                <FormControlLabel
                  key={item.id}
                  value={item.id}
                  control={<Radio />}
                  name={item.title}
                  label={item.title}
                  className="farm-field-radio"
                />
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="farm-field-modal-footer justify-content-center border-top-0">
          <div
            className="col-12 d-flex mt-3"
            style={{ justifyContent: "space-around" }}
          >
            <div className="mx-2">
              <button
                className="farm-field-modal-btn btn btn-light-green"
                type="submit"
                onClick={hideModal}
              >
                ثبت
              </button>
            </div>
            <div className="mx-2 d-flex align-items-center">
              <button
                className="btn btn-md btn-block"
                type="button"
                onClick={hideModal}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default VaziatFieldModal;
