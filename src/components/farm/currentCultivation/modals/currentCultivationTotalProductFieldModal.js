import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import * as persianTools from "@persian-tools/persian-tools";
import closeNotification from "./../../../../assets/img/close-notification.png";
import { useDispatch, useSelector } from "react-redux";
// import "./../../cultivation/modals/farmModal.css";
import { InfoLigthIcon } from "../../../../assets/icon";

const CurrentCultivationTotalProductFieldModal = ({
  showModal,
  hideModal,
  data,
  tonKg,
}) => {
  const [textInput, setTextInput] = useState("");

  const [division, setDivision] = useState("");
  const [remain, setRemain] = useState("");
  const num = 1000;
  const handleText = (e) => {
    setTextInput(e.target.value);
    let divisionResult = Math.floor(e.target.value / num);
    setDivision(divisionResult);
    setRemain(e.target.value % num);
  };
  // console.log(division)
  // console.log(remain)

  const handleSubmit = (e) => {
    e.preventDefault();
    data(textInput);
    tonKg({ division: division, remain: remain });
  };

  return (
    <Modal show={showModal} className="farm-field-modal">
      <form onSubmit={handleSubmit}>
        <div
          className="farm-field-modal-header"
          style={{ boxShadow: "none", padding: "30px 15px 5px 35px" }}
        >
          <div>
            <img
              src={closeNotification}
              alt=""
              style={{
                position: "absolute",
                left: "40px",
                top: "30px",
                height: "16px",
                cursor: "pointer",
              }}
              onClick={hideModal}
            />

            <h6 style={{ fontWeight: "800", color: "#676767" }}>
              تولید کل (کیلوگرم در هکتار)
            </h6>
          </div>
        </div>
        <div
          className="farm-field-modal-body product-field-modal"
          style={{ overflowY: "auto", direction: "rtl" }}
        >
          <div
            style={{
              margin: "0",
              marginTop: "10px",
              color: "#4A4A4A",
            }}
          >
            <div
              style={{
                marginRight: "15px",
              }}
            >
              <input
                name="workerName"
                type="number"
                autoComplete="off"
                className="search-input-field-modal w-100"
                placeholder="تولید کل (کیلوگرم در هکتار)"
                style={{ borderRadius: "8px", padding: "8px 15px" }}
                value={textInput}
                onChange={handleText}
              />
              {textInput ? (
                <span>
                  <span>
                    <InfoLigthIcon />
                  </span>
                  <span className="persianToolsText">
                    {division ? (
                      <span>
                        {persianTools.numberToWords(division)} <span>تن</span>
                      </span>
                    ) : (
                      ""
                    )}
                    {division && remain ? <span> و </span> : ""}
                    {remain ? (
                      <span>
                        {persianTools.numberToWords(remain)}{" "}
                        <span>کیلوگرم</span>
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          className="farm-field-modal-footer justify-content-center border-top-0"
          style={{ boxShadow: "none" }}
        >
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

export default CurrentCultivationTotalProductFieldModal;
