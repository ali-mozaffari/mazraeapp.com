import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
// import "./farmModal.css";
// import "./../../../../assets/css/modals.css";
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

const SubProductFieldModal = ({ showModal, hideModal, data }) => {
  const { subMahsul } = useSelector((state) => state.subMahsuls);
  // console.log(subMahsul)
  // const [textInput, setTextInput] = useState("");
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected({ value: e.target.value, name: e.target.name });
    // setTextInput("");
  };

  // const handleText = (e) => {
  //   setTextInput({ value: e.target.value, name: e.target.value });
  //   setSelected("");
  // };
  // console.log(textInput);
  // console.log(selected);

  const [dataList, setDataList] = useState("");

  const handleClick = () => {
    hideModal();
    setTimeout(() => setDataList(""), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data(selected);
    // if(textInput === ''){
    //   data(selected);
    // }else{
    //   data(textInput)
    // }
    
  };

  return (
    <Modal show={showModal} className="farm-field-modal">
      <form onSubmit={handleSubmit}>
        <div className="farm-field-modal-header">
          <div>
            <img
              src={closeNotification}
              alt=""
              style={{
                position: "absolute",
                left: "25px",
                top: "30px",
                height: "16px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            />

            <h6 style={{ fontWeight: "800", color: "#676767" }}>
              انتخاب زیر محصول
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
              // color: "#4A4A4A",
            }}
          >
            {/* <div
              style={{
                marginRight: "15px",
                borderBottom: "1px solid #aeaeae",
                paddingBottom: "20px",
              }}
            >
              <input
                name="workerName"
                type="text"
                autoComplete="off"
                className="search-input-field-modal w-100"
                placeholder="نام ببرید.."
                style={{ borderRadius: "8px", padding: "8px 15px" }}
                value={textInput.value}
                onChange={handleText}
              />
            </div> */}
            {/* {textInput === '' || textInput.value === '' ? ( */}
            <RadioGroup
              className="redio-box"
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
              // style={{margin: "0"}}
                value=""
                control={<Radio />}
                name=""
                label="-"
                className="farm-field-radio"
              />
              {subMahsul?.filter((item) =>
                item.title.toLowerCase().includes(dataList)
              ).map((item) => (
                <FormControlLabel
                  key={item.guid}
                  value={item.guid}
                  control={<Radio />}
                  name={item.title}
                  label={item.title}
                  className="farm-field-radio"
                />
              ))}
              {/* {Data?.filter((item) =>
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
              ))} */}
            </RadioGroup>
            {/* ): ''} */}
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
                onClick={handleClick}
              >
                ثبت
              </button>
            </div>
            <div className="mx-2 d-flex align-items-center">
              <button
                className="btn btn-md btn-block"
                type="button"
                onClick={handleClick}
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

export default SubProductFieldModal;
