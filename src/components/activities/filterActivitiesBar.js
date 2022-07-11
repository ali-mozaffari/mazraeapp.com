import React, { useState } from "react";
import filterIcon from "../../assets/img/filterIcon.png";
import sortIcon from "../../assets/img/sort-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ActivitiesReportModal from "./modals/activitiesReportModal";
import { Box } from "@mui/material";

const FilterActivitiesBar = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  // Handle the displaying of the modal based on type and id
  const showActivitiesModal = (id) => {
    setId(id);
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (id) => {
    toast.success("فعالیت حذف شد");
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
      <div
        className="d-md-flex justify-content-between"
        style={{ fontSize: "14px" }}
      >
        <div>
          <h6 className="fw-bolder">
            <strong>فعالیت</strong>
          </h6>
          <br />
          <p>
            شما با اضافه کردن فعالیت حدید میتوانید کارها رو بهتر مدیریت نمایید
          </p>
        </div>
        <Box
          className="d-flex align-items-center justify-content-end"
          sx={{ width: { xs: "100%", sm: "40%" } }}
          onClick={() => showActivitiesModal()}
        >
          <button
            className="btn-outline-light-blue mx-1"
            style={{ width: "70%", padding: "14px 10px", fontSize: "13px" }}
          >
            گزارش فعالیت ها
          </button>
          <button
            className="btn-dark-blue mx-1"
            style={{ width: "70%", padding: "14px 10px", fontSize: "13px" }}
            onClick={() => navigate("/add-activity")}
          >
            فعالیت جدید
          </button>
        </Box>
      </div>

      <hr />

      <div className="row d-flex align-items-center">
        <div className="col-md-6 mx-auto">
          <input
            className="search-input w-100"
            type="search"
            placeholder="جستجو . . ."
          />
        </div>
        <div className="col-md-6 mx-auto d-flex justify-content-around mt-3 mt-md-0">
          <div>
            <img src={filterIcon} alt="filter" className="mx-2" />
            <p className="d-inline">فیلتر کردن</p>
          </div>
          <div>
            <img src={sortIcon} alt="filter" className="mx-2" />
            <p className="d-inline">مرتب سازی</p>
          </div>
        </div>
      </div>

      <ActivitiesReportModal
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={id}
      />

    </div>
  );
};

export default FilterActivitiesBar;
