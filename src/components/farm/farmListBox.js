import React, { useState, useEffect } from "react";
import "./farm.css";
import "chart.js/auto";
import menuIcon from "../../assets/img/menu.png";
import ForecastCultivationProgressItem from "./progressBar";
import { CONST } from "../../assets/strings/strings";
import RainChart from "./rainChart";
import { useDispatch, useSelector } from "react-redux";
import { getFarmList } from "../../redux/slice/farm/farmListBox";
import { useNavigate, Link, NavLink } from "react-router-dom";
import DeleteConfirmationModal from "./modals/deleteConfirmationModal";
import { Dropdown, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../loading/loading";
import { getAccessList } from "../../redux/slice/access/accessListBox";
import moment from "moment-jalaali";
import {
  Menu,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   label: {
//     fontSize: "13px",
//   },
// });
const useStyles = makeStyles(theme => ({
  label: {
    fontSize: "13px !important",
    paddingLeft: "20px",
  }
}));

const ITEM_HEIGHT = 48;

const FarmListBox = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFarmList());
    dispatch(getAccessList());
  }, []);

  moment.loadPersian({ dialect: "persian-modern" });

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
              {/*  farm box header  */}
              <div className="d-flex justify-content-between align-items-center text-bold">
                <div>{item?.name}</div>
                {/* <div>مزرعه من 2</div> */}
                <div>
                  <div className="tableToolIconBgGray d-flex align-items-center">
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-toggle-icon">
                        <img src={menuIcon} alt="menu" className="mx-auto" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                      className="dropdown-menu-farm-box">
                        <Dropdown.Item className="dropdown-item-main">
                          <Link to={"/edit-farm"} className="dropdownItem">
                            <FormControlLabel
                              control={<Radio />}
                              label="ویرایش مشخصات مزرعه"
                              className="farm-field-radio"
                              classes={classes}
                              style={{width: "100%"}}
                            />
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item-main">
                          <Link to={"/edit-coordination-farm"} className="dropdownItem">
                            <FormControlLabel
                              control={<Radio />}
                              label="ویرایش مختصات مزرعه"
                              className="farm-field-radio"
                              classes={classes}
                              style={{width: "100%"}}
                            />
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item-main">
                          <Link to={"/cultivation"} className="dropdownItem">
                            <FormControlLabel
                              control={<Radio />}
                              label="کشت های کنونی مزرعه"
                              className="farm-field-radio"
                              classes={classes}
                              style={{width: "100%"}}
                            />
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item-main">
                          <Link to={"/history"} className="dropdownItem">
                            <FormControlLabel
                              control={<Radio />}
                              label="تاریخچه کشت های مزرعه"
                              className="farm-field-radio"
                              classes={classes}
                              style={{width: "100%"}}
                            />
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Item className="dropdown-item-main">
                          <div
                            className="dropdownItem"
                            onClick={() => showDeleteModal(item?.guid)}
                          >
                            <FormControlLabel
                              control={<Radio />}
                              label="حذف"
                              className="farm-field-radio"
                              classes={classes}
                              style={{width: "100%", border: 'none'}}
                            />
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                </div>
              </div>

              <p className="rain-title mt-3">بارش باران در 3 روز آینده</p>

              <div className="rain-3d-report d-flex">
                <div className="rain-unit">میلی لیتر</div>

                <div className="w-100 d-flex justify-content-around align-items-center">
                  {/* {item?.totalliquid_3_days?.map((day) => (
                    <div className="text-center">
                      {moment(day[0]).format('jD')}
                      <br />
                      <span className="chart-day">
                        {moment(day[1]).format("dddd")}
                      </span>
                    </div>
                  ))} */}
                  <div className="text-center">
                    18
                    <br />
                    <span className="chart-day">شنبه</span>
                  </div>
                  <div className="text-center">
                    23
                    <br />
                    <span className="chart-day">یکشنبه</span>
                  </div>
                  <div className="align-items-center text-center">
                    12
                    <br />
                    <span className="chart-day">دوشنبه</span>
                  </div>
                </div>
              </div>

              {/*<hr/>*/}
              <div style={{ paddingTop: "10px" }}>
                <RainChart data={item.totalliquid_3_days} />
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="wind-title small text-bold">میزان باد</span>
                  <span className="wind-duration-title small">
                    (در 24 ساعت آینده)
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <span className="wind-unit">کیلومتر بر ساعت</span>
                  {/* <span className="wind-speed">{item.windgust}</span> */}
                  <span className="wind-speed">24.34</span>
                </div>
              </div>

              <hr />

              <div></div>
              <div>
                <button
                  type="submit"
                  className="btn-dark-blue mx-1 mt-4"
                  style={{ width: "100%" }}
                  onClick={() => navigate("/add-cultivation")}
                >
                  افزودن کشت
                </button>
              </div>

              {/* <ForecastCultivationProgressItem
                        farm={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    /> */}
            </div>
          ))
        )}
      </div>

      <DeleteConfirmationModal
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        // type={type}
        id={id}
      />
      {/* <DeleteModal open={deleteModalOpen} handleClose={handleDeleteModalClose}/> */}
    </div>
  );

  function calculateFarmsProgressData(farms) {
    let data = {
      masahat: 0,
      years: [],
      mahsuls: [],
    };
    farms.forEach((item) => {
      data.masahat = data.masahat + item.masahat;
      item.cultivation_list.forEach((element) => {
        if (
          element.sal.title === CONST.LAST_YEAR_TITLE &&
          element.level === 1
        ) {
          let indexOfExist;
          data.mahsuls.forEach((el, index) => {
            if (el.product_id === element.mahsul.product_id) {
              indexOfExist = index;
            }
          });

          if (typeof indexOfExist === "number") {
            data.mahsuls[indexOfExist] = {
              ...data.mahsuls[indexOfExist],
              masahat:
                data.mahsuls[indexOfExist].masahat +
                parseFloat(element.sathe_zire_kesht),
            };
          } else {
            data.mahsuls.push({
              ...element.mahsul,
              masahat: parseFloat(element.sathe_zire_kesht),
            });
          }
        }
      });
    });

    return data;
  }
};

export default FarmListBox;
