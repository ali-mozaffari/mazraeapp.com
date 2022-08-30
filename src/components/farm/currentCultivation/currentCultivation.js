import React, { useState, useEffect } from "react";
import "./../farm.css";
import "chart.js/auto";
import menuIcon from "../../../assets/img/menu.png";
// import ForecastCultivationProgressItem from "./progressBar";
import { CONST } from "../../../assets/strings/strings";
//import RainChart from "./rainChart";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFarmList } from "../../../redux/slice/farm/farmListBox";
import { useNavigate, Link, NavLink } from "react-router-dom";
import DeleteConfirmationModal from "./../modals/deleteConfirmationModal";
import { Dropdown, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../../loading/loading";
import { getAccessList } from "../../../redux/slice/access/accessListBox";
import {
  CurrentCultivationDeleteIcon,
  CurrentCultivationEditIcon,
  FarmShape,
} from "../../../assets/icon";
import "./currentCultivation.css";

const ITEM_HEIGHT = 48;

const CurrentCultivation = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFarmList());
    dispatch(getAccessList());
  }, []);

  const farmlist = useSelector((state) => state.farmlist);
  const { postList, loading } = farmlist;

  // const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (id) => {
    setId(id);

    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (id) => {
    toast.success("مزرعه حذف شد");

    setDisplayConfirmationModal(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row d-md-flex justify-content-between">
        {loading ? (
          <div style={{ height: "40%", width: "40%", paddingTop: "30px" }}>
            <Loading />
          </div>
        ) : (
          postList?.map((item) => (
            <div
              key={item?.guid}
              className="col-11 col-md-3 mx-md-4 farm-item-box"
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: "10px", marginTop: "7px" }}>
                  <FarmShape />
                </div>
                <p
                  style={{
                    marginRight: "10px",
                    marginTop: "12px",
                    color: "#4A4A4A",
                    fontSize: "14px",
                    fontWeight: "800",
                    fontFamily: "IRANSans",
                  }}
                >
                  مزرعه سازی
                </p>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    className="currentCultivationFonts"
                    style={{ marginTop: "10px", marginRight: "13px" }}
                  >
                    سطح زیر کشت
                  </p>
                  <div
                    className="currentCultivationFonts"
                    style={{ color: "#676767" }}
                  >
                    200 <span style={{ color: "#A2A2A2" }}>هکتار</span>
                  </div>
                </div>
                <div>ProgressBar</div>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">سال کشت</p>
                <div className="currentCultivationFonts">۱۴۰۰-۱۴۰۱</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">تاریخ کاشت</p>
                <div className="currentCultivationFonts">۱۴۰۰/۰۱/۲۲</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">تاریخ برداشت</p>
                <div className="currentCultivationFonts">-</div>
              </div>

              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">وضعیت کشت</p>
                <div className="currentCultivationFonts">کشت شده</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">
                  تولید کل{" "}
                  <span style={{ color: "#A2A2A2" }}>(کیلوگرم در هکتار)</span>
                </p>
                <div className="currentCultivationFonts">-</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="currentCultivationFonts">
                  قیمت <span style={{ color: "#A2A2A2" }}>(تومان/کیلوگرم)</span>
                </p>
                <div className="currentCultivationFonts">-</div>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "none",
                    backgroundColor: "white",
                  }}
                  onClick={() => navigate("/current-cultivation-edit")}
                >
                  <div>
                    <CurrentCultivationEditIcon />
                  </div>
                  <div
                    style={{ marginRight: "6px" }}
                    className="currentCultivationFonts"
                  >
                    ویرایش کشت
                  </div>
                </button>
                <button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    <CurrentCultivationDeleteIcon />
                  </div>
                  <div
                    style={{ marginRight: "6px" }}
                    className="currentCultivationFonts"
                  >
                    حذف
                  </div>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CurrentCultivation;
