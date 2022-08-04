import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAccess } from "../../redux/slice/access/addAccess";
import { clearAccess } from "../../redux/slice/access/addAccess";
import { toast } from "react-toastify";
import Loading from "../loading/loading";
import ownerIcon from "../../assets/img/owner.png";
import managerIcon from "../../assets/img/manager.png";
import workerIcon from "../../assets/img/worker.png";
import guestIcon from "../../assets/img/guest.png";
import {
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
} from "@mui/base";
import { Box, styled } from "@mui/system";
// import { Tab } from "@mui/material";
import "./access.css";

const Tab = styled(TabUnstyled)`
  border: 1px solid #858585;
  border-radius: 10px;
  text-align: center;
  cursor: Pointer;
  /* width: 20%; */
  padding-bottom: 5px;
  background-color: transparent;

  &:hover {
    transition: 0.3s;
    border-color: dodgerblue !important;
    box-shadow: 0px 0px 3px 0px;
  }

  &:hover img {
    width: 50px;
    height: 53px;
  }

  &:hover :first-child {
    margin-bottom: 9px !important;
    transition: 0.3s;
  }

  &:hover > .user-box-title {
    font-size: 14px !important;
    transition: 0.3s;
  }

  &.${tabUnstyledClasses.selected} {
    border-color: dodgerblue !important;
    box-shadow: 0px 0px 3px 0px;
  }

  &.${tabUnstyledClasses.selected} img {
    width: 50px;
    height: 53px;
  }

  &.${tabUnstyledClasses.selected} :first-child {
    margin-bottom: 9px !important;
  }

  &.${tabUnstyledClasses.selected} > .user-box-title {
    font-size: 14px !important;
  }
`;

const AddAccessForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const farms = useSelector((state) => state.farmlist);

  // console.log(farms.postList)
  const [permissionType, setPermissionType] = useState("");
  // const [workerName, setWorkerName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [farm, setFarm] = useState("");

  console.log(permissionType);

  const access = useSelector((state) => state.addAccess);
  // const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  let permissionValidation = () => {
    if (!permissionType) {
      return false;
    } else {
      return true;
    }
  };
  //  .test(function(permissionType) {if(permissionType === null) return false}),
  const validation = Yup.object().shape({
    permission_type: Yup.string().test(
      "permission_type",
      "required",
      permissionValidation
    ),
    workerName: Yup.string().required(),
    phone: Yup.string().required().phone(),
    farm: Yup.string().required(),
  });

  const initialValues = {
    permission_type: permissionType,
    workerName: "",
    phone: "",
    farm: "",
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    // setClicked(true);

    const payload = {
      permission_type: permissionType,
      name: values.workerName,
      cell_phone: values.phone,
      "farm-guid": values.farm,
    };
    dispatch(addAccess(payload));
  };

  useEffect(() => {
    if (access?.isDone) {
      if (access?.response?.url) {
        setLoading(false);
        toast.success("دسترسی افزوده شد", { position: "top-center" });
        // setClicked(false);
        dispatch(clearAccess());
        navigate("/access");
      }
    }
  }, [access?.isDone]);

  if (!loading) {
    return (
      <div className="container-fluid pb-5 mb-5" style={{ fontSize: "14px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, formikHelpers) => {
            onFormSubmit(values);
            formikHelpers.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <div className="container">
              <div style={{ marginBottom: "50px" }}>
                از لیست زیر نوع دسترسی کاربر را انتخاب کنید
              </div>
              <Form className="row">
                {/* ------------- Start user-box ------------ */}
                <TabsUnstyled
                  name="permission_type"
                  onChange={(e, val) => setPermissionType(val)}
                >
                  <TabsListUnstyled className="row" style={{ rowGap: "30px" }}>
                    {/* <Box className="col-6 col-sm-3">
                      <Tab value={1} className="user-box">
                        <div className="user-img">
                          <img src={ownerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">مالکان</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box> */}

                    <Box className="col-6 col-sm-4">
                      <Tab
                        type="button"
                        value="manager"
                        className="user-box"
                        style={
                          errors.permission_type && touched.permission_type
                            ? {
                                border: "1px solid #f00",
                                color: "red",
                              }
                            : { border: "1px solid #858585", color: "#212529" }
                        }
                      >
                        <div className="user-img">
                          <img src={managerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">مدیر</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>

                    <Box className="col-6 col-sm-4">
                      <Tab
                        type="button"
                        value="contribute"
                        className="user-box"
                        style={
                          errors.permission_type && touched.permission_type
                            ? {
                                border: "1px solid #f00",
                                color: "red",
                              }
                            : { border: "1px solid #858585", color: "#212529" }
                        }
                      >
                        <div className="user-img">
                          <img src={workerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">همکار</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>

                    <Box className="col-6 col-sm-4">
                      <Tab
                        type="button"
                        value="no_access"
                        className="user-box"
                        style={
                          errors.permission_type && touched.permission_type
                            ? {
                                border: "1px solid #f00",
                                color: "red",
                              }
                            : { border: "1px solid #858585", color: "#212529" }
                        }
                      >
                        <div className="user-img">
                          <img src={guestIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">مهمان</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>
                  </TabsListUnstyled>
                </TabsUnstyled>

                {/* ------------- End user-box ------------ */}

                <p style={{ marginTop: "25px", marginBottom: "0" }}>
                  مشخصات را وارد کنید
                </p>

                <Box
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    justifyContent: "space-between",
                    padding: "0",
                  }}
                >
                  <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
                    <Field
                      name="workerName"
                      type="text"
                      autoComplete="off"
                      className="search-input w-100 mt-4 py-3"
                      placeholder="نام شخص"
                      style={
                        errors.workerName && touched.workerName
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
                    <Field
                      name="phone"
                      type="text"
                      autoComplete="off"
                      className="search-input w-100 mt-4 pl-5 py-3"
                      placeholder="شماره تماس"
                      style={
                        errors.phone && touched.phone
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    justifyContent: "space-between",
                    padding: "0",
                  }}
                >
                  <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
                    <Field
                      as="select"
                      name="farm"
                      validate={true}
                      style={
                        errors.farm && touched.farm
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                      className="search-input w-100 mt-3 py-3"
                      // onClick={(e) => setFarm(e.target.value)}
                    >
                      <option value="" label="مزرعه *" className="m-3">
                        نام مزرعه *
                      </option>
                      {farms?.postList?.map((item) => [
                        <option
                          key={item.guid}
                          value={item.guid}
                          label={item.name}
                          className="m-3"
                        >
                          {item.name}
                        </option>,
                      ])}
                    </Field>
                  </Box>
                </Box>

                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn-dark-blue mx-1 mt-4">
                    افزودن
                  </button>
                  <NavLink
                    to={"/access"}
                    className="btn-light-gray mx-1 mt-4 text-decoration-none text-light"
                  >
                    لغو
                  </NavLink>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  } else {
    <Loading />;
  }
};

export default AddAccessForm;
