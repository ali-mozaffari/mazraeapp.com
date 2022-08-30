import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { OwnerInfoIcon } from "../../../assets/icon";
import { ArrowSingleDownIcon } from "../../../assets/icon";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function OwnerInfo() {
  const [phoneInput, setPhoneInput] = useState("");
  const handlePhone = (e) => {
    setPhoneInput(e.target.value);
  };

  const PHONE_REGEX = new RegExp(
    /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/
  );
  const phone_validation = () => {
    const match = PHONE_REGEX.test(phoneInput);
    if (phoneInput) {
      return match;
    } else {
      return true;
    }
  };

  const validation = Yup.object().shape({
    phone: Yup.string().test(phone_validation).nullable(),
  });

  const initialValues = {
    phone: "",
  };

  const [farmStarting, setFarmStarting] = useState("");
  const getfarmStarting = (data) => {
    setFarmStarting(data);
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
          <OwnerInfoIcon />
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
          جزئیات مشخصات مالک مزرعه
        </div>
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
              <hr className="mt-4" />

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
                    name="name"
                    type="text"
                    variant="standard"
                    label="نام و نام‌خانوادگی مالک"
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
                    label="محل سکونت مالک "
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
                    onChange={handlePhone}
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
                    type="number"
                    variant="standard"
                    label="اجاره بها هر هکتار(تومان)"
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
                  ویرایش مشخصات
                </button>
                <NavLink
                  to={"/edit-farm-info"}
                  className="btn-light-pink mx-1 mt-4 text-decoration-none text-light"
                >
                  لغو درخواست
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </CacheProvider>
  );
}
export default OwnerInfo;
