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
import DeleteConfirmationModal from "./modals/deleteConfirmationModal";
import { noe_faaliat_items, vaziat_items } from "../../assets/strings/strings";
import Loading from "../loading/loading";

const options = [
  "علامت گذاری به عنوان انجام شده",
  "علامت گذاری به عنوان لغو شده",
  "جزئیات",
];

const ITEM_HEIGHT = 48;

const ActivitiesListBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivitiesList());
  }, []);

  const activitiesList = useSelector((state) => state.activitiesList);
  const { data, loading } = activitiesList;
    // console.log(activitiesList)

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
    toast.success("فعالیت حذف شد");
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
    <div style={{ overflow: "overlay", marginBottom: "15%" }}>
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
              <th className="py-3">وضعیت</th>
              <th className="py-3">نوع</th>
              <th className="py-3">مهلت انجام</th>
              <th className="py-3">محصول</th>
              <th className="py-3">فعالیت ها</th>
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
                    {/* {item.vaziat} */}
                  </span>
                  {/* <Badge pill bg={"success"} className="p-2">
                  {item.vaziat}
                </Badge> */}
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {noe_faaliat_items.map((item3) =>
                    item3.key === item.noe_faaliat ? item3.title : null
                  )}
                  {/* {item.noe_faaliat} */}
                </td>
                <td
                  className="py-3"
                  style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                >
                  {/* date subtraction Farsi */}
                  <span className="d-inline-flex">
                    <DateCalculator remainingDate={item.tarikh_mohlat_anjam} />
                    {/* <DateCalculator /> */}
                    {/* {item.tarikh_mohlat_anjam} */}
                  </span>

                  <span className="px-1">روز دیگر</span>

                  <img src={calendarIcon} alt="calendar" className="mx-2" />
                </td>
                <td className="py-3" style={{ whiteSpace: "nowrap" }}>
                  {item.cultivation.map((item2, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: `${item2.mahsul.color}`,
                        color: "#fff",
                        borderRadius: "15px",
                        padding: "7px 10px",
                        fontSize: "13px",
                      }}
                    >
                      <span> {item2.sathe_zire_kesht} </span>
                      <span> {item2.mahsul.title} </span>
                    </span>
                  ))}
                </td>
                <td className="d-flex">
                  <div
                    className="btn tableToolIconBgGray d-flex align-items-center"
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <img src={menuIcon} alt="menu" className="mx-auto" />
                  </div>

                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 5,
                        width: "40ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        style={{ paddingTop: "20px", paddingBottom: "20px" }}
                        onClick={() => console.log(option)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>

                  <Tooltip title="کپی کردن فعالیت">
                    <div
                      // activityId={item.guid}
                      className="btn tableToolIconBgGray d-flex align-items-center justify-content-center"
                      onClick={() => navigate(`/edit-activity/${item?.guid}`)}
                    >
                      <img src={copyIcon} alt="menu" className="mx-auto" />
                    </div>
                  </Tooltip>
                  <Tooltip title="ویرایش فعالیت">
                    <div
                      className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                      onClick={() => navigate(`/edit-activity/${item?.guid}`)}
                    >
                      <img src={editIcon} alt="menu" className="mx-auto" />
                      {/* {item?.guid} */}
                    </div>
                  </Tooltip>
                  <Tooltip title="حذف فعالیت">
                    <div
                      className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                      onClick={() => showDeleteModal(item?.guid)}
                    >
                      {/* {item.guid} */}
                      <img src={trashIcon} alt="menu" className="mx-auto" />
                    </div>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <DeleteConfirmationModal
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={id}
      />
    </div>
  );
};

export default ActivitiesListBox;
