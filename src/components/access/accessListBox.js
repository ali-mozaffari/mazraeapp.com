import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Tooltip } from "@mui/material";
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
import "./access.css";
import {
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
import { styled } from "@mui/system";
import { getAccessList } from "./../../redux/slice/access/accessListBox";



const Tab = styled(TabUnstyled)`
  &.${tabUnstyledClasses.selected} {
    background-color: #e2fffb !important;
    border: 2px solid #3f9c91 !important;
    color: #3f9c91 !important;
  }
`;

const AccessListBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccessList());
  }, []);

  const accessList = useSelector((state) => state.accessList);
  const { data, loading } = accessList;
  // console.log(data)

  // const owner = data?.filter(item => item.permission_type === "owner");
  const manager = data?.filter((item) => item.permission_type === "manager");
  const contribute = data?.filter(
    (item) => item.permission_type === "contribute"
  );
  const no_access = data?.filter(
    (item) => item.permission_type === "no_access"
  );

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
    toast.success("?????????? ?????? ????");
    setDisplayConfirmationModal(false);
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
            {/* <Tab className="userType">????????????</Tab> */}
            <Tab className="userType">????????????</Tab>
            <Tab className="userType">??????????????</Tab>
            <Tab className="userType">??????????</Tab>
          </TabsListUnstyled>
          {/* <TabPanelUnstyled value={0}>
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
                      <Tooltip title="???????????? ????????????">
                        <div
                        style={{width:'35px', height:'35px'}}
                          className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                          onClick={() =>
                            navigate(`/edit-activity/${item?.guid}`)
                          }
                        >
                          <img src={editIcon} alt="menu" className="mx-auto" width="18px" height="18px" />
                        </div>
                      </Tooltip>
                      <Tooltip title="?????? ????????????">
                        <div
                        style={{width:'35px', height:'35px'}}
                          className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                          onClick={() => showDeleteModal(item?.guid)}
                        >
                          <img src={trashIcon} alt="menu" className="mx-auto" width="15px" height="15px" />
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanelUnstyled> */}
          <TabPanelUnstyled value={0}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {manager?.length > 0 ? (
                  data
                    ?.filter((e) => e.permission_type === "manager")
                    .map((item, index) => (
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
                          {item.worker?.name}
                        </td>

                        <td
                          className="py-3"
                          style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                        >
                          {item.worker?.cell_phone}
                        </td>

                        <td className="d-flex">
                          <Tooltip title="???????????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                              onClick={() =>
                                navigate(`/edit-access/${item?.guid}`)
                              }
                            >
                              <img
                                src={editIcon}
                                alt="menu"
                                className="mx-auto"
                                width="18px"
                                height="18px"
                              />
                            </div>
                          </Tooltip>
                          <Tooltip title="?????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                              onClick={() => showDeleteModal(item?.guid)}
                            >
                              <img
                                src={trashIcon}
                                alt="menu"
                                className="mx-auto"
                                width="15px"
                                height="15px"
                              />
                            </div>
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td>
                      <p>?????? ?????????? ???? ???????? ?????? ????????</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {contribute?.length > 0 ? (
                  data
                    ?.filter((e) => e.permission_type === "contribute")
                    .map((item, index) => (
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
                          {item.worker?.name}
                        </td>

                        <td
                          className="py-3"
                          style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                        >
                          {item.worker?.cell_phone}
                        </td>

                        <td className="d-flex">
                          <Tooltip title="???????????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                              onClick={() =>
                                navigate(`/edit-access/${item?.guid}`)
                              }
                            >
                              <img
                                src={editIcon}
                                alt="menu"
                                className="mx-auto"
                                width="18px"
                                height="18px"
                              />
                            </div>
                          </Tooltip>
                          <Tooltip title="?????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                              onClick={() => showDeleteModal(item?.guid)}
                            >
                              <img
                                src={trashIcon}
                                alt="menu"
                                className="mx-auto"
                                width="15px"
                                height="15px"
                              />
                            </div>
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td>
                      <p>?????? ???????????? ???? ???????? ?????? ????????</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </TabPanelUnstyled>

          <TabPanelUnstyled value={2}>
            <table className="table table-borderless d-md-table">
              <tbody>
                {no_access?.length > 0 ? (
                  data
                    ?.filter((e) => e.permission_type === "no_access")
                    .map((item, index) => (
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
                          {item.worker?.name}
                        </td>

                        <td
                          className="py-3"
                          style={{ fontSize: "13px", whiteSpace: "nowrap" }}
                        >
                          {item.worker?.cell_phone}
                        </td>

                        <td className="d-flex">
                          <Tooltip title="???????????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgBlue d-flex align-items-center justify-content-center"
                              onClick={() =>
                                navigate(`/edit-access/${item?.guid}`)
                              }
                            >
                              <img
                                src={editIcon}
                                alt="menu"
                                className="mx-auto"
                                width="18px"
                                height="18px"
                              />
                            </div>
                          </Tooltip>
                          <Tooltip title="?????? ????????????">
                            <div
                              style={{ width: "35px", height: "35px" }}
                              className="btn tableToolIconBgOrange d-flex align-items-center justify-content-center"
                              onClick={() => showDeleteModal(item?.guid)}
                            >
                              <img
                                src={trashIcon}
                                alt="menu"
                                className="mx-auto"
                                width="15px"
                                height="15px"
                              />
                            </div>
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td>
                      <p>?????? ???????????? ???? ???????? ?????? ????????</p>
                    </td>
                  </tr>
                )}
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
