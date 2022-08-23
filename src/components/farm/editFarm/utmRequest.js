import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { UTMReportIcon } from "../../../assets/icon";
import { ArrowSingleDownIcon } from "../../../assets/icon";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
// import "yup-phone";
import UtmRequestModal from "./utmRequestModal";
import React, { useEffect, useState } from "react";

import { TextField } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { inputLabelClasses } from "@mui/material/InputLabel";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function UTMRequest() {
  const [displayUtmRequestModal, setDisplayUtmRequestModal] = useState(false);
  // Handle the displaying modal of UTM Request 1st field
  const showUtmRequestModal = (id) => {
    // setId(id);
    setDisplayUtmRequestModal(true);
  };
  // Hide the modal
  const hideUtmRequestModal = () => {
    setDisplayUtmRequestModal(false);
  };

  const [farmStarting, setFarmStarting] = useState("");
  const getfarmStarting = (data) => {
    setFarmStarting(data);
  };

  // const [userName, setUserName] = useState("");
  // const getUserName = (data) => {
  //   setUserName(data);
  // };

  // const [phone, setPhone] = useState("");
  // const getPhone = (data) => {
  //   setPhone(data);
  // };

  const validation = Yup.object().shape({
    // phone: Yup.string().phone().nullable(),
    phone: Yup.string().phone(),
  });

  const initialValues = {
    farmStarting: "",
    phone: "",
    userName: "",
  };

  return (
    <CacheProvider value={cacheRtl}>
      <div
        className="container-fluid pb-5 mb-5"
        style={{
          fontSize: "14px",
          background: " #FFFFFF",
          borderRadius: "16px 16px 0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UTMReportIcon />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "IRANSans",
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: "20px",
            lineHeight: "56px",
            color: "#4A4A4A",
          }}
        >
          ثبت درخواست گزارش UTM
        </div>
        <hr className="mt-4" />
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, formikHelpers) => {
            // onFormSubmit(values);
            formikHelpers.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="row"
              style={{ paddingRight: "12px", paddingLeft: "12px" }}
            >
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                  color: "#676767",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                انتخاب مزرعه
              </p>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                  }}
                >
                  <Field
                    name="farmStarting"
                    type="button"
                    value={farmStarting.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    onClick={() => showUtmRequestModal()}
                  />

                  {!farmStarting.name ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showUtmRequestModal()}
                    >
                      مزرعه سازی
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">مزرعه سازی</span>
                  )}
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
                </Box>
              </Box>

              <hr className="mt-4" />
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                  fontFamily: "IRANSans",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#676767",
                  height: "22px",
                }}
              >
                ارسال لینک دانلود گزارش به
              </p>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                  }}
                >
                  <TextField
                    name="phone"
                    type="number"
                    variant="standard"
                    label="شماره موبایل مقصد"
                    autoComplete="off"
                    className="input-label w-100 mt-4 pl-5 py-3"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      "& label": {
                        right: "10px !important",
                        fontSize: "13px",
                        color: "#A2A2A2",
                        "&.Mui-focused": {
                          color: "#A2A2A2",
                        },
                      },
                      input: {
                        color: "#676767",
                      },
                      ".MuiFormLabel-root": {
                        paddingLeft: "15px !important",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        [`&.${inputLabelClasses.shrink}`]: {
                          marginTop: "8px !important",
                        },
                      },
                    }}
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
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                  }}
                >
                  <TextField
                    name="name"
                    type="text"
                    variant="standard"
                    label="نام کاربر دریافت کننده"
                    autoComplete="off"
                    className="input-label w-100 mt-4 pl-5 py-3"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{
                      "& label": {
                        right: "10px !important",
                        fontSize: "13px",
                        color: "#A2A2A2",
                        "&.Mui-focused": {
                          color: "#A2A2A2",
                        },
                      },
                      input: {
                        color: "#676767",
                      },
                      ".MuiFormLabel-root": {
                        paddingLeft: "15px !important",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        [`&.${inputLabelClasses.shrink}`]: {
                          marginTop: "8px !important",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              <div className="farm-bottom-btn d-flex mt-3">
                <button type="submit" className="btn-dark-blue mx-1 mt-4">
                  ثبت درخواست
                </button>
                <NavLink
                  to={"/"}
                  className="btn-light-pink mx-1 mt-4 text-decoration-none text-light"
                >
                  لغو درخواست
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
        <UtmRequestModal
          showModal={displayUtmRequestModal}
          hideModal={hideUtmRequestModal}
          data={getfarmStarting}
        />
      </div>
    </CacheProvider>
  );
}
export default UTMRequest;
