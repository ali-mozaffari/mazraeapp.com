import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import "./farmModal.css";
import { ArrowSearchIcon, SearchIcon } from "../../../../assets/icon";

const Data = [
  {
    id: 1,
    title: "محصولات صنعتی",
  },
  {
    id: 2,
    title: "پنبه",
  },
  {
    id: 3,
    title: "کتان",
  },
  {
    id: 4,
    title: "نیشکر",
  },
  {
    id: 5,
    title: "توتون",
  },
  {
    id: 6,
    title: "خشخاش",
  },
  {
    id: 7,
    title: "نیشکر 2",
  },
  {
    id: 8,
    title: "شاهدانه",
  },
];

const ProductGroupFieldModal = ({ showModal, hideModal, data }) => {
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected({ value: e.target.value, name: e.target.name });
  };
  console.log(selected);

  const [dataList, setDataList] = useState("");
console.log(dataList)
  const handleSearch = (e) => {
    console.log(e.target.value);
    // setDataList(e.target.value);
    // const filterd = dataList?.filter(item =>  item.title.toLowerCase().includes(e.target.value));
    // Data?.filter(item =>  item.title.toLowerCase().includes(dataList));
    // console.log(filterd)
    // setDataList(filterd)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data(selected);
    console.log(selected);
  };

  return (
    <Modal show={showModal} className="farm-field-modal">
      <form onSubmit={handleSubmit}>
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
              انتخاب گروه محصول
            </h6>
          </div>

          <div className="search-field-modal">
            <span className="search-icon-modal">
              <SearchIcon />
            </span>

            <input
              className="search-input-field-modal w-100"
              type="search"
              placeholder="جستجو .."
              // onChange={handleSearch}
              onChange={(e) => setDataList(e.target.value)}
            />
            <button type="submit" className="searchButton-modal">
              <ArrowSearchIcon />
            </button>
          </div>
        </div>
        <div className="farm-field-modal-body product-field-modal">
          <div
            style={{
              margin: "0",
              marginTop: "30px",
              color: "#4A4A4A",
            }}
          >
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
              // onChange={(e) => setDataList(e.target.value)}
            >
              <FormControlLabel
                value=""
                control={<Radio />}
                name=""
                label="-"
                className="farm-field-radio"
              />
              {Data?.filter((item) =>
                item.title.toLowerCase().includes(dataList)
              ).map((item) => (
                <FormControlLabel
                  key={item.id}
                  value={item.id}
                  control={<Radio />}
                  name={item.title}
                  label={item.title}
                  className="farm-field-radio"
                />
              ))}

              {/* <FormControlLabel
                value="0"
                control={<Radio />}
                name="نیشکر"
                label="نیشکر"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                name="پنبه"
                label="پنبه"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="6"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="7"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="8"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="9"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              />
              <FormControlLabel
                value="10"
                control={<Radio />}
                name="کتان"
                label="کتان"
                className="farm-field-radio"
              /> */}
            </RadioGroup>
          </div>
        </div>
        <div className="modal-footer justify-content-center border-top-0">
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

export default ProductGroupFieldModal;
