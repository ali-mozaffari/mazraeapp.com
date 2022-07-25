import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import calendarIcon from "../../assets/img/calendar.png";
import menuIcon from "../../assets/img/menu.png";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import copyIcon from "../../assets/img/copy-gray.png";
import editIcon from "../../assets/img/edit.png";
import trashIcon from "../../assets/img/trash.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivitiesList } from "../../redux/slice/activities/activitiesListBox";
import { toast } from "react-toastify";
import DateCalculator from "../tools/dateCalculator";

import { noe_faaliat_items, vaziat_items } from "../../assets/strings/strings";
import Loading from "../loading/loading";


const ITEM_HEIGHT = 48;

const WeatherListBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivitiesList());
  }, []);

  const activitiesList = useSelector((state) => state.activitiesList);
  const { data, loading } = activitiesList;
    // console.log(activitiesList)


  const vaziatColor = (vaziat) => {
    switch (vaziat) {
      case "anjamshode":
        return "#16db93";
      case "barname":
        return "#f29e4c";
      case "jari":
        return "#54478c";
      case "moavvagh":
        return "#f2634c";
      default:
        return "#2c6993";
    }
  };

  return (
    <div style={{ overflow: "overlay", marginBottom: "5%" }}>
      {loading ? (
        <div
          style={{
            height: "40%",
            width: "40%",
            margin: "0 auto",
            paddingTop: "30px",
          }}
        >
          <Loading />
        </div>
      ) : (
        <table className="table table-borderless d-md-table">
          <thead>
            <tr>
              <th className="py-3">نماد</th>
              <th className="py-3">تاریخ</th>
              <th className="py-3">نوع</th>
              <th className="py-3">بیشینه</th>
              <th className="py-3">کمینه</th>
              <th className="py-3">سرعت باد</th>
              <th className="py-3">جهت وزش باد</th>
              <th className="py-3">رطوبت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.details?.map((item, index) => (
              <tr key={index}>
                <td className="py-3" style={{ whiteSpace: "nowrap" }}>
                  <span
                    style={{
                      backgroundColor: `${vaziatColor(item.vaziat)}`,
                      borderRadius: "15px",
                      padding: "5px 10px",
                      fontSize: "13px",
                      color: "#fff",
                    }}
                  >
                    {vaziat_items.map((item2) =>
                      item2.key === item.vaziat ? item2.title : null
                    )}

                  </span>
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )}

                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* date subtraction Farsi */}
                  نوع
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )} */}
                  36.10 C
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )} */}
                  36.10 C
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )} */}
                  36.10 C
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )} */}
                  شمال غربی
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )} */}
                  22%
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default WeatherListBox;
