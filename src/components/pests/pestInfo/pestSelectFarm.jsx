import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import closeNotification from "./../../../assets/img/close-notification.png";

const PestSelectFarmModal = ({
  farmSelectionModal,
  setFarmSelectionModal,
  setSelectedFarm,
}) => {
  const [selected, setSelected] = useState("");
  const farmlist = useSelector((state) => state.farmlist.postList);
  const handleChange = (e) => {
    setSelected({ value: e.target.value, name: e.target.name });
    setSelectedFarm({ value: e.target.value, name: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // data(selected);
  };

  return (
    <Modal show={farmSelectionModal} className="farm-field-modal" centered>
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
            onClick={() => setFarmSelectionModal(false)}
          />

          <h6 style={{ fontWeight: "800", color: "#676767" }}>انتخاب مزرعه</h6>
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
            {/* <FormLabel classes={{ root: classes.formLabel }}>Options</FormLabel> */}

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              onChange={handleChange}
            >
              {farmlist.map((item) => (
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  name={item?.cultivation[0]?.mahsul?.title}
                  label={item?.cultivation[0]?.mahsul?.title}
                  className="farm-field-radio"
                  // classes={classes}
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
                onClick={() => {
                  setFarmSelectionModal(false);
                }}
              >
                ثبت
              </button>
            </div>
            <div className="mx-2 d-flex align-items-center">
              <button
                className="btn btn-md btn-block"
                type="button"
                onClick={() => setFarmSelectionModal(false)}
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

export default PestSelectFarmModal;
