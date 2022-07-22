import React, { useEffect, useState } from "react";
import { Box, Menu, MenuItem, Tooltip } from "@mui/material";
import editIcon from "../../assets/img/edit.png";
import trashIcon from "../../assets/img/trash.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "./modals/deleteAccessModal";
import { noe_faaliat_items, vaziat_items } from "../../assets/strings/strings";
import Loading from "../loading/loading";
import ownerIcon from "../../assets/img/owner.png";
import managerIcon from "../../assets/img/manager.png";
import workerIcon from "../../assets/img/worker.png";
import guestIcon from "../../assets/img/guest.png";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
import "./access.css";
import {
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
import { styled } from "@mui/system";

const Tab = styled(TabUnstyled)`
  &.${tabUnstyledClasses.selected} {
    background-color: #e2fffb !important;
    border: 2px solid #3f9c91 !important;
    color: #3f9c91 !important;
  }
`;

const AccessListBox = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getActivitiesList());
  // }, []);

  // const [value, setValue] = useState("1");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

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
    toast.success("کاربر حذف شد");
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
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled className="userTypeMain">
            <Tab className="userType">مالکان</Tab>
            <Tab className="userType">مدیران</Tab>
            <Tab className="userType">همکاران</Tab>
            <Tab className="userType">مهمان</Tab>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {data?.details?.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="py-3"
                      style={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      <img src={ownerIcon} width="45px" height="48px" />
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
                      {noe_faaliat_items.map((item3) =>
                        item3.key === item.noe_faaliat ? item3.title : null
                      )}
                    </td>

                    <td className="d-flex">
                      <Tooltip title="ویرایش فعالیت">
                        <div
                          className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                          onClick={() =>
                            navigate(`/edit-activity/${item?.guid}`)
                          }
                        >
                          <img src={editIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                      <Tooltip title="حذف فعالیت">
                        <div
                          className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                          onClick={() => showDeleteModal(item?.guid)}
                        >
                          <img src={trashIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {data?.details?.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="py-3"
                      style={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      <img src={managerIcon} width="45px" height="48px" />
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
                      {noe_faaliat_items.map((item3) =>
                        item3.key === item.noe_faaliat ? item3.title : null
                      )}
                    </td>

                    <td className="d-flex">
                      <Tooltip title="ویرایش فعالیت">
                        <div
                          className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                          onClick={() =>
                            navigate(`/edit-activity/${item?.guid}`)
                          }
                        >
                          <img src={editIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                      <Tooltip title="حذف فعالیت">
                        <div
                          className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                          onClick={() => showDeleteModal(item?.guid)}
                        >
                          <img src={trashIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={2}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {data?.details?.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="py-3"
                      style={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      <img src={workerIcon} width="45px" height="48px" />
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
                      {noe_faaliat_items.map((item3) =>
                        item3.key === item.noe_faaliat ? item3.title : null
                      )}
                    </td>

                    <td className="d-flex">
                      <Tooltip title="ویرایش فعالیت">
                        <div
                          className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                          onClick={() =>
                            navigate(`/edit-activity/${item?.guid}`)
                          }
                        >
                          <img src={editIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                      <Tooltip title="حذف فعالیت">
                        <div
                          className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                          onClick={() => showDeleteModal(item?.guid)}
                        >
                          <img src={trashIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanelUnstyled>

          <TabPanelUnstyled value={3}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {data?.details?.map((item, index) => (
                  <tr key={index}>
                    <td
                      className="py-3"
                      style={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      <img src={guestIcon} width="45px" height="48px" />
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
                      {noe_faaliat_items.map((item3) =>
                        item3.key === item.noe_faaliat ? item3.title : null
                      )}
                    </td>

                    <td className="d-flex">
                      <Tooltip title="ویرایش فعالیت">
                        <div
                          className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                          onClick={() =>
                            navigate(`/edit-activity/${item?.guid}`)
                          }
                        >
                          <img src={editIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                      <Tooltip title="حذف فعالیت">
                        <div
                          className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                          onClick={() => showDeleteModal(item?.guid)}
                        >
                          <img src={trashIcon} alt="menu" className="mx-auto" />
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanelUnstyled>
        </TabsUnstyled>
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

export default AccessListBox;
