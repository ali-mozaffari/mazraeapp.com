import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./farmModal.css";
import { ArrowSearchIcon, SearchIcon } from "../../../../assets/icon";

const ProductFieldModal = ({
  showModal,
  hideModal,
  confirmModal,
  id,
  items,
  dataByName,
}) => {
  // const dispatch = useDispatch();
  const handleDelete = (id) => {
    // dispatch(deleteFarmList(id));
    confirmModal();
    hideModal();
    items();
    dataByName();
  };

  const [selected, setSelected] = useState();
  const onSelect = (name) => {
    console.log(name);
    setSelected(name);
  };
  // console.warn(items)
  // console.log(items)

  return (
    <Modal show={showModal} className="farm-field-modal">
      <div className="farm-field-modal-header">
        <div>
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
            انتخاب محصول
          </h6>
        </div>

        <div className="search-field-modal" >
          <span className="search-icon-modal">
            <SearchIcon />
          </span>

          <input
            className="search-input-field-modal w-100"
            type="search"
            placeholder="جستجو .."
          />
          <button type="submit" className="searchButton-modal">
            <ArrowSearchIcon />
          </button>
        </div>
      </div>
      {/* <hr style={{ height: "2px", margin: "0" }} /> */}
      <Modal.Body className="farm-field-modal-body product-field-modal">
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
            // onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="-"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="6"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="7"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="8"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="9"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="محصولات صنعتی"
              className="farm-field-radio"
            />
          </RadioGroup>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer justify-content-center border-top-0">
        {/* <Button
          onClick={hideModal}
          style={{
            fontWeight: "800",
            padding: "15px",
            width: "90%",
            borderRadius: "10px",
            backgroundColor: "#B7B7B7",
            border: "none",
          }}
        >
          باشه
        </Button> */}

        <div
          className="col-12 d-flex mt-3"
          style={{ justifyContent: "space-around" }}
        >
          <div className="mx-2">
            <button
              className="farm-field-modal-btn btn btn-light-green"
              type="submit"
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
      </Modal.Footer>
    </Modal>
  );
};

export default ProductFieldModal;
