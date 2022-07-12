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


  const activitiesList = useSelector((state) => state.activitiesList);
  const { data, loading } = activitiesList;
  // console.warn(data)

  const items = [
    {
      name: "anjamshode",
      fName: 'انجام شده',
      numbers: [data?.total?.anjamshode, data?.total?.barname, data?.total?.jari, data?.total?.moavvagh],
      color: "#16db93",
      // count: data.total.anjamshode,
      count: data?.total?.anjamshode,
    },
    {
      name: "barname",
      fName: 'برنامه',
      // numbers: [25, 20, 20, 35],
      color: "#f29e4c",
      count: data?.total?.barname,
    },
    {
      name: "jari",
      fName: 'جاری',
      // numbers: [6, 12, 82, 20],
      color: "#2c699a",
      count: data?.total?.jari,
    },
    {
      name: "moavvagh",
      fName: 'معوق',
      // numbers: [6, 12, 82],
      color: "#f2634c",
      count: data?.total?.moavvagh,
    },
  ];
  
  const dataByName = new Map(
    Object.entries(
      items.reduce((o, c) => {
        o[c.name] = c.numbers;
        return o;
      }, {})
    )
  );


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
            شما با اضافه کردن فعالیت جدید میتوانید کارها رو بهتر مدیریت نمایید
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
        items={items}
        dataByName={dataByName}
      />

    </div>
  );
};

export default FilterActivitiesBar;
