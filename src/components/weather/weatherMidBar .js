import React, { useState } from "react";
import filterIcon from "../../assets/img/filterIcon.png";
import sortIcon from "../../assets/img/sort-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const WeatherMidBar = () => {
  const navigate = useNavigate();

  const activitiesList = useSelector((state) => state.activitiesList);
  const { data, loading } = activitiesList;

  return (
    <div>
      <div
        className="d-md-flex justify-content-between"
        style={{ fontSize: "14px" }}
      >
        <div>
          <h6 className="fw-bolder">
            <strong>پیش بینی هواشناسی</strong>
          </h6>
          <br />
          <p>اخبار روز آب و هوایی کشور را از لیست زیر مشاهده کنید</p>
        </div>
        <Box
          className="d-flex align-items-center justify-content-end"
          sx={{ width: { xs: "100%", sm: "40%" } }}
        >
          <button
            className="btn mx-1"
            style={{ width: "70%", padding: "14px 10px", fontSize: "13px", border:"1px solid #136AF5", color:"#136AF5", borderRadius:"12px" }}
          >
            دانلود آخرین گزارش هواشناسی
          </button>
        </Box>
      </div>

      <hr />

    </div>
  );
};

export default WeatherMidBar;
