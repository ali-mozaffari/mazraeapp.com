import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
// import React, { useEffect, useState } from "react";

function EditFarmInfo() {
  return (
    <div
      className="container-fluid pb-5 mb-5"
      style={{
        fontSize: "14px",
        background: " #FFFFFF",
        borderRadius: "16px 16px 0px 0px",
      }}
    >
      <Formik>
        {({ errors }) => (
          <Form
            className="row"
            style={{ paddingRight: "12px", paddingLeft: "12px" }}
          >
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
                  name="farmName"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 pl-5 py-3"
                  padding="16px 25px 16px 25px"
                  style={
                    errors.farmName
                      ? { border: "1px solid #f00", color: "red" }
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
                <Field
                  name="farmArea"
                  type="number"
                  autoComplete="off"
                  className="search-input w-100 mt-4 py-3"
                  style={{ position: "relative" }}
                  // style={
                  //   errors.farmArea
                  //     ? {
                  //         border: "1px solid #f00",
                  //         color: "red",
                  //       }
                  //     : { border: "none" }
                  // }
                />
                <button
                  style={{
                    position: "absolute",
                    left: "2px",
                    width: "30%",
                    whiteSpace: "nowrap",
                    padding: "0",
                    left: "3px",
                    top: "4px",
                    bottom: "4px",
                    height: "41px",
                  }}
                  type="submit"
                  className="btn-dark-blue mx-1 mt-4"
                >
                  گزارش UTM
                </button>
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
    </div>
  );
}
export default EditFarmInfo;
