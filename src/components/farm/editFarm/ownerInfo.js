import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { OwnerInfoIcon } from "../../../assets/icon";
import { ArrowSingleDownIcon } from "../../../assets/icon";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
//import "yup-phone";
//----------------------------------------------
import React, { useEffect, useState } from "react";
//import "./../../farm";
//-----------------------------------------------
function OwnerInfo() {
  const [farmStarting, setFarmStarting] = useState("");
  const getfarmStarting = (data) => {
    setFarmStarting(data);
  };

  const validation = Yup.object().shape({
    phone: Yup.string().phone(),
  });

  const initialValues = {
    farmStarting: "",
    phone: "",
    userName: "",
  };
  return (
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
                <Field
                  name="OwnerName"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 pl-5 py-3"
                  padding="16px 25px 16px 25px"
                  // style={
                  //   errors.phone
                  //     ? // && phone.value
                  //       { border: "1px solid #f00", color: "red" }
                  //     : { border: "none" }
                  // }
                />

                {/* {!phone.name ? (
                  <span className="fieldTitleEmpty"> نام و نام‌خانوادگی مالک </span>
                ) : (
                  <span className="fieldTitleFilled">  نام و نام‌خانوادگی مالک </span>
                )} */}
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "48%" },
                  position: "relative",
                }}
              >
                <Field
                  name="OwnerAddress"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 py-3"
                  // style={
                  //   errors.userName
                  //     ? // && touched.userName
                  //       {
                  //         border: "1px solid #f00",
                  //         color: "red",
                  //       }
                  //     : { border: "none" }
                  // }
                />
                {/* {!userName.name ? (
                  <span className="fieldTitleEmpty">
                    محل سکونت مالک 
                    <span className="starSign"> *</span>
                  </span>
                ) : (
                  <span className="fieldTitleFilled">
                    محل سکونت مالک 
                  </span>
                )} */}
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
                <Field
                  name="phone"
                  type="number"
                  autoComplete="off"
                  className="search-input w-100 mt-4 pl-5 py-3"
                  padding="16px 25px 16px 25px"
                  style={
                    errors.phone
                      ? // && phone.value
                        { border: "1px solid #f00", color: "red" }
                      : { border: "none" }
                  }
                />

                {/* {!phone.name ? (
                  <span className="fieldTitleEmpty">شماره تماس مالک </span>
                ) : (
                  <span className="fieldTitleFilled">   شماره تماس مالک </span>
                )} */}
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "48%" },
                  position: "relative",
                }}
              >
                <Field
                  name="RentPerAcre"
                  type="number"
                  autoComplete="off"
                  className="search-input w-100 mt-4 py-3"
                  style={
                    errors.userName
                      ? // && touched.userName
                        {
                          border: "1px solid #f00",
                          color: "red",
                        }
                      : { border: "none" }
                  }
                />
                {/* {!userName.name ? (
                  <span className="fieldTitleEmpty">
اجاره بها هر هکتار(تومان)         
            <span className="starSign"> *</span>
                  </span>
                ) : (
                  <span className="fieldTitleFilled">
                    نام کاربر دریافت کننده
                  </span>
                )} */}
              </Box>
            </Box>

            {/* <Box
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
                  name="userName"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 py-3"
                  style={
                    errors.userName
                      ? // && touched.userName
                        {
                          border: "1px solid #f00",
                          color: "red",
                        }
                      : { border: "none" }
                  }
                />
              </Box>
            </Box> */}

            <div className="farm-bottom-btn d-flex mt-3">
              <button type="submit" className="btn-dark-blue mx-1 mt-4">
                ویرایش مشخصات
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
    </div>
  );
}
export default OwnerInfo;
