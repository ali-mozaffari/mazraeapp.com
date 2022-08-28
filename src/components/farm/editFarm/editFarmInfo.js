import { Box, height } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { RadioGroup, TextField } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { inputLabelClasses } from "@mui/material/InputLabel";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function EditFarmInfo() {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleRadioChange = (e) => {
    console.log({ value: e.target.value, name: e.target.name });
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
                  <TextField
                    name="farmName"
                    type="text"
                    variant="standard"
                    label="نام مزرعه"
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
                    name="farmName"
                    type="text"
                    variant="standard"
                    label="نام مزرعه"
                    autoComplete="off"
                    className="input-label w-100 mt-4 pl-5 py-3"
                    // style={{height: "49px"}}
                    InputProps={{
                      disableUnderline: true,
                      marginTop: "0px !important",
                    }}
                    sx={{
                      "& label": {
                        right: "10px !important",
                        fontSize: "13px",
                        color: "#A2A2A2",
                        "&.Mui-focused": {
                          color: "#A2A2A2",
                        },
                        position: "relative",
                        
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
                  <button
                    style={{
                      position: "absolute",
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

                {/* <Box
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
                  />
                  <button
                    style={{
                      position: "absolute",
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
                </Box> */}
              </Box>
              <hr className="mt-4" style={{ marginBottom: "0" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: "0px",
                    paddingRight: "0px",
                  }}
                >
                  نوع آبیاری مزرعه
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <RadioGroup
                    style={{ display: "flex", flexDirection: "row" }}
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    // value={value}
                    onChange={handleRadioChange}
                  >
                    <Radio
                      // size="medium"
                      {...controlProps("a")}
                      sx={{
                        "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)":
                          {
                            color: "#4A4A4A",
                          },
                        "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                          color: "#16DB93",
                        },
                      }}
                    />
                    <Radio
                      // size="large"
                      {...controlProps("b")}
                      sx={{
                        "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)":
                          {
                            color: "#4A4A4A",
                          },
                        "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                          color: "#16DB93",
                        },
                      }}
                    />
                  </RadioGroup>
                  {/* </div> */}
                </div>

                <Field
                  name="datail"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 pl-5 py-3"
                  padding="16px 25px 16px 25px"
                  style={{
                    maxWidth: "365px",
                    marginTop: "0",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: "0px",
                    paddingRight: "0px",
                  }}
                >
                  آیا مزرعه سیستم آبی تحت فشار دارد؟
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "103px",
                    justifyContent: "space-between",
                    marginTop: "11px",
                    marginRight: "145px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "3px",
                      marginRight: "9px",
                      width: "250px",
                      justifyContent: "space-between",
                    }}
                  >

                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p
                  style={{
                    marginTop: "10px",
                    marginBottom: "0px",
                    paddingRight: "0px",
                  }}
                >
                  مالکیت مزرعه
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "103px",
                    justifyContent: "space-between",
                    marginTop: "11px",
                    marginRight: "145px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "3px",
                      marginRight: "9px",
                      width: "250px",
                      justifyContent: "space-between",
                    }}
                  >

                  </div>
                </div>
                <Field
                  name="datail"
                  type="text"
                  autoComplete="off"
                  className="search-input w-100 mt-4 pl-5 py-3"
                  padding="16px 25px 16px 25px"
                />
              </div>
              <hr className="mt-4" />

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
    </CacheProvider>
  );
}
export default EditFarmInfo;
