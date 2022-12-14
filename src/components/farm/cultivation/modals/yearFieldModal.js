import React, { useState, memo, useEffect } from "react";
import { Modal } from "react-bootstrap";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { getYearList } from "../../../../redux/slice/farm/cultivation/yearList";
// import "./farmModal.css";
// import "./../../../../assets/css/modals.css";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(theme => ({
//   label: {
//     '&.Mui-focused': {
//       color: "#16DB93 !important",
//     }
//   }
// }));

const styles = {
  formLabel: {
    color: "#000",
    "&.Mui-focused": {
      color: "#000",
    },
  },
};

const YearFieldModal = ({ showModal, hideModal, data }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const { year } = useSelector((state) => state.yearList);
  // console.log(year);
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected({ value: e.target.value, name: e.target.name });
  };
  console.log(selected);
  useEffect(() => {
    dispatch(getYearList());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    data(selected);
  };

  return (
    <Modal
      show={showModal}
      className="farm-field-modal"
      aria-labelledby="child-modal-title"
    >
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
            انتخاب سال زراعی
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
            {/* <FormLabel classes={{ root: classes.formLabel }}>Options</FormLabel> */}
            {year?.map((item) => (
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                key={item.guid}
                value={item.guid}
                control={<Radio />}
                name={item.title}
                label={item.title}
                className="farm-field-radio"
                // classes={classes}
              />

              {/* <FormControlLabel
                value="2"
                control={<Radio />}
                name="1398-1399"
                label="1398-1399"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                name="1399-1400"
                label="1399-1400"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                name="1400-1401"
                label="1400-1401"
                className="farm-field-radio"
              /> */}
            </RadioGroup>
            ))}
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

export default YearFieldModal;
