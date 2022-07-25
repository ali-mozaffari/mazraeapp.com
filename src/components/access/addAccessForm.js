import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../../assets/icon";
import { getToolsList } from "../../redux/slice/activities/toolsList";
import { clearActivity } from "../../redux/slice/activities/activity";
import { toast } from "react-toastify";
import folder from "./../../assets/img/folder.png";
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
import { Grid } from "rsuite";
// import { Tab } from "@mui/material";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  border: 1px solid #858585;
  border-radius: 10px;
  text-align: center;
  cursor: Pointer;
  /* width: 20%; */
  padding-bottom: 5px;
  background-color: transparent;

  &:hover {
    border-color: dodgerblue !important;
    box-shadow: 0px 0px 3px 0px;
  }

  &:hover img {
    width: 50px;
    height: 53px;
  }

  &:hover :first-child {
    margin-bottom: 6px !important;
  }

  &:hover > .user-box-title {
    font-size: 14px !important;
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
    margin-bottom: 6px !important;
  }

  &.${tabUnstyledClasses.selected} > .user-box-title {
    font-size: 14px !important;
  }
`;

const AddAccessForm = () => {
  const navigate = useNavigate();
  const farms = useSelector((state) => state.farmlist);
  const [selectedTool, setSelectedTool] = useState();
  const [selectedCultivation, setSelectedCultivation] = useState();
  const [noe_faaliat, set_noe_faaliat] = useState();
  const [vaziat, setVaziat] = useState();
  const [yaddasht, setYaddasht] = useState();
  const [anjam_dahande_list, set_anjam_dahande_list] = useState();

  const [dateError, setDateError] = useState(false);
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools);
  const activity = useSelector((state) => state.activity);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile([fileUploaded]);
  };

  useEffect(() => {
    dispatch(getToolsList());
  }, []);

  const validation = Yup.object().shape({
    user_type: Yup.string().required(true),
    name: Yup.string().required(true),
    name: Yup.string().required(true),
    phone: Yup.string().required(true),
  });

  const initialValues = {
    user_type: selectedTool,
    name: selectedTool,
    name: selectedCultivation,
    phone: noe_faaliat,
    file: vaziat,
    yaddasht: yaddasht,
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    setClicked(true);

    const payload = {
      user_type: values.vaziat,
      name: values.vaziat,
      name: values.noe_faaliat,
      phone: values.abzar_id,
      file: values.cultivations,
      yaddasht: values.yaddasht,
    };
    // dispatch(addAccess(payload));
  };

  useEffect(() => {
    if (activity.isDone) {
      if (activity.response.guid) {
        setLoading(false);
        toast.success("دسترسی افزوده شد", { position: "top-center" });
        setClicked(false);
        setFile([]);
        dispatch(clearActivity());
        navigate("/access");
      }
    }
  }, [activity.isDone]);

  if (!loading) {
    return (
      <div className="container-fluid pb-5 mb-5" style={{ fontSize: "14px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, formikHelpers) => {
            onFormSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <div className="container">
              <div style={{ marginBottom: "50px" }}>
                از لیست زیر نوع دسترسی کاربر را انتخاب کنید
              </div>
              <Form className="row">

                {/* ------------- Start user-box ------------ */}
                <TabsUnstyled defaultValue={0}>
                  <TabsListUnstyled className="row" style={{rowGap: "30px"}} >
                    <Box className="col-6 col-sm-3">
                      <Tab value={1} className="user-box">
                        <div className="user-img">
                          <img src={ownerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">مالکان</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>

                    <Box className="col-6 col-sm-3">
                      <Tab value={2} className="user-box">
                        <div className="user-img">
                          <img src={managerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">مدیران</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>

                    <Box className="col-6 col-sm-3">
                      <Tab value={3} className="user-box">
                        <div className="user-img">
                          <img src={workerIcon} width="45px" height="48px" />
                        </div>

                        <p className="user-box-title">همکاران</p>
                        <p className="user-box-text">
                          مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                        </p>
                      </Tab>
                    </Box>

                    <Box className="col-6 col-sm-3">
                      <Tab value={4} className="user-box">
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
                      name="name"
                      type="text"
                      autoComplete="off"
                      // value={firstName}
                      // onChange={(e) => setFirstName(e.target.value)}
                      className="search-input mt-4 py-3"
                      placeholder="نام کشاورز"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
                    <Field
                      name="name"
                      type="text"
                      autoComplete="off"
                      // value={firstName}
                      // onChange={(e) => setFirstName(e.target.value)}
                      className="search-input mt-4 py-3"
                      placeholder="نام شخص"
                      style={{ width: "100%" }}
                    />
                  </Box>
                </Box>

                <Box
                  style={{
                    justifyContent: "space-between",
                    padding: "0",
                  }}
                  sx={{ display: { xs: "block", sm: "flex" } }}
                >
                  <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
                    <Field
                      name="phone"
                      type="text"
                      autoComplete="off"
                      // value={firstName}
                      // onChange={(e) => setFirstName(e.target.value)}
                      className="col-md-5 search-input mt-4 pl-5 py-3"
                      placeholder="شماره تماس"
                      style={{ width: "100%" }}
                    />

                    <div
                      className="search-input file-uploader col-md-5 mx-auto mt-4"
                      style={{ height: 150, width: "100%" }}
                    >
                      {file.length < 1 ? (
                        <div onClick={handleClick}>
                          <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: "none" }}
                          />
                          <img
                            src={folder}
                            className="d-block mx-auto mt-2 mt-md-1"
                          />
                          <h6
                            style={{ fontWeight: "900" }}
                            className="text-center mt-3"
                          >
                            آپلود مدارک
                          </h6>
                          <p className="text-center text-gray mt-3">
                            فایل های خود را انتخاب کنید
                          </p>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={folder}
                            className="d-block mx-auto mt-2 mt-md-1"
                          />
                          <div className="d-flex justify-content-between mt-3 px-4 mt-5">
                            <div>
                              <span>{file[0].name}</span>
                            </div>
                            <div onClick={() => setFile([])}>
                              <CloseIcon />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Box>

                  <Box
                    name="yaddasht"
                    type="text"
                    component="textarea"
                    rows="4"
                    autoComplete="off"
                    onChange={(e) => setYaddasht(e.target.value)}
                    className="search-input mt-4"
                    placeholder="یادداشت"
                    style={{}}
                    sx={{
                      width: { xs: "100%", sm: "45%" },
                      marginLeft: "0",
                      marginRigh: "0",
                    }}
                  />
                </Box>

                <div className="d-flex justify-content-center mt-3">
                  <button
                    disabled={clicked}
                    type="submit"
                    className="btn-dark-blue mx-1 mt-4"
                    onClick={() => {
                      onFormSubmit(initialValues);
                    }}
                  >
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
