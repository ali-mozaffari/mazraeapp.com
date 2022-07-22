import React, { useState } from "react";
import filterIcon from "../../assets/img/filterIcon.png";
import sortIcon from "../../assets/img/sort-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const AccessTopBar = () => {
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
            <strong>دسترسی ها</strong>
          </h6>
          <br />
          <p>افراد دیگر را به مزرعه خود وارد کنید</p>
          <p>
            افزودن افراد به مزرعه می تواند به شما در مدیریت بهتر فعالیت های
            مزرعه کمک کند
          </p>
        </div>
        <Box
          className="d-flex align-items-center justify-content-end"
          sx={{ width: { xs: "100%", sm: "40%" } }}
        >
          <button
            className="btn-dark-blue mx-1"
            style={{ width: "70%", padding: "14px 10px", fontSize: "13px" }}
            onClick={() => navigate("/add-access")}
          >
            ایجاد کاربر
          </button>
        </Box>
      </div>

      <hr />

    </div>
  );
};

export default AccessTopBar;
