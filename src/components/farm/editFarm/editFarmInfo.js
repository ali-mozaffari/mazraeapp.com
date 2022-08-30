import { Box, height } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { RadioGroup, FormControlLabel, TextField } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import { ArrowSingleDownIcon, InfoLigthIcon } from "../../../assets/icon";
import "./editFarm.css";
import IrrigationSourceFieldModal from "./modal/irrigationSourceFieldModal";
import * as persianTools from "@persian-tools/persian-tools";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function EditFarmInfo() {
  const navigate = useNavigate();

  const [displayIrrigationSourceModal, setDisplayIrrigationSourceModal] =
    useState(false);
  // Handle the displaying modal of UTM Request 1st field
  const showIrrigationSourceModal = (id) => {
    // setId(id);
    setDisplayIrrigationSourceModal(true);
  };
  // Hide the modal
  const hideIrrigationSourceModal = () => {
    setDisplayIrrigationSourceModal(false);
  };

  const [irrigationSource, setIrrigationSource] = useState("");
  const getIrrigationSource = (data) => {
    setIrrigationSource(data);
  };

  const [selectedIrrigationValue, setSelectedIrrigationValue] = useState("");
  const handleIrrigationChange = (e) => {
    setSelectedIrrigationValue(e.target.value);
  };

  const [selectedIrrigationPressureValue, setSelectedIrrigationPressureValue] =
    useState("");
  const handleIrrigationPressureChange = (e) => {
    setSelectedIrrigationPressureValue(e.target.value);
  };

  const [selectedOwnerValue, setSelectedOwnerValue] = useState("");
  const handleOwnerChange = (e) => {
    setSelectedOwnerValue(e.target.value);
  };

  const [priceInput, setPriceInput] = useState("");
  const handlePrice = (e) => {
    setPriceInput(e.target.value);
  };

  // const controlProps = (item) => ({
  //   checked: selectedValue === item,
  //   onChange: handleChange,
  //   value: item,
  //   name: "size-radio-button-demo",
  //   inputProps: { "aria-label": item },
  // });

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
                    name="name"
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
                    name="name"
                    type="text"
                    variant="standard"
                    label="مساحت(هکتار)"
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
                    onClick={() => navigate("/utm-request")}
                  >
                    گزارش UTM
                  </button>
                </Box>
              </Box>

              <hr className="mt-4" style={{ marginBottom: "0" }} />

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
                  <div className="irrigation-type-field">
                    <p>نوع آبیاری مزرعه</p>

                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      className="irrigation-type-field-radioGroup"
                      // value={value}
                      defaultValue="1"
                      onChange={handleIrrigationChange}
                    >
                      <FormControlLabel
                        value="1"
                        label="دیم"
                        control={<Radio />}
                        className="irrigation-radio-label-circle"
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
                      <FormControlLabel
                        value="2"
                        label="آبی"
                        control={<Radio />}
                        className="irrigation-radio-label-circle"
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
                  </div>
                </Box>

                {selectedIrrigationValue === "2" ? (
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <Field
                      name="sal_id"
                      value={irrigationSource?.name}
                      type="button"
                      autoComplete="off"
                      className="search-input"
                      // placeholder="منبع آب مزرعه چیست؟ (اختیاری)"
                      onClick={() => showIrrigationSourceModal()}
                    />
                    {!irrigationSource?.name ? (
                      <span
                        className="fieldTitleEmpty"
                        onClick={() => showIrrigationSourceModal()}
                      >
                        منبع آب مزرعه چیست؟ (اختیاری)
                      </span>
                    ) : (
                      <span className="fieldTitleFilled">
                        منبع آب مزرعه چیست؟ (اختیاری)
                      </span>
                    )}
                    <span className="fieldIcon">
                      <ArrowSingleDownIcon />
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              {selectedIrrigationValue === "2" ? (
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
                    <div className="irrigation-type-field">
                      <p>آیا مزرعه سیستم آبی تحت فشار دارد؟</p>

                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        className="irrigation-type-field-radioGroup"
                        // value={value}
                        defaultValue="1"
                        onChange={handleIrrigationPressureChange}
                      >
                        <FormControlLabel
                          value="1"
                          label="بله"
                          control={<Radio />}
                          className="irrigation-radio-label-circle"
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
                        <FormControlLabel
                          value="2"
                          label="خیر"
                          control={<Radio />}
                          className="irrigation-radio-label-circle"
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
                    </div>
                  </Box>
                </Box>
              ) : (
                ""
              )}

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
                  <div className="irrigation-type-field">
                    <p>مالکیت مزرعه</p>

                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      className="irrigation-type-field-radioGroup"
                      // value={value}
                      defaultValue="1"
                      onChange={handleOwnerChange}
                    >
                      <FormControlLabel
                        value="1"
                        label="ملکی"
                        control={<Radio />}
                        className="irrigation-radio-label-circle"
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
                      <FormControlLabel
                        value="2"
                        label="اجاری"
                        control={<Radio />}
                        className="irrigation-radio-label-circle"
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
                  </div>
                </Box>

                {selectedOwnerValue === "2" ? (
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <Field
                      name="owner-details"
                      // value={irrigationSource?.name}
                      type="button"
                      autoComplete="off"
                      className="search-input"
                      onClick={() => navigate("/owner-info")}
                    />
                    {!irrigationSource?.name ? (
                      <span
                        className="fieldTitleEmpty"
                        onClick={() => navigate("/owner-info")}
                      >
                        جزئیات بیشتر (اختیاری)
                      </span>
                    ) : (
                      <span className="fieldTitleFilled">
                        جزئیات بیشتر (اختیاری)
                      </span>
                    )}
                    <span className="fieldIcon">
                      <ArrowSingleDownIcon />
                    </span>
                  </Box>
                ) : (
                  ""
                )}
              </Box>

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
                    name="price"
                    type="text"
                    variant="standard"
                    label="قیمت (تومان/کیلوگرم)"
                    autoComplete="off"
                    className="input-label w-100 mt-4 pl-5 py-3"
                    onChange={handlePrice}
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
                  {priceInput ? (
                    <span>
                      <span>
                        <InfoLigthIcon />
                      </span>
                      <span className="persianToolsText">
                        {persianTools.numberToWords(priceInput)}
                        <span> تومان</span>
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>

              <div className="farm-bottom-btn d-flex mt-3">
                <button
                  type="submit"
                  className="btn-dark-blue mx-1 mt-4"
                  // onClick={() => navigate("/home")}
                >
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

        <IrrigationSourceFieldModal
          showModal={displayIrrigationSourceModal}
          hideModal={hideIrrigationSourceModal}
          data={getIrrigationSource}
        />
      </div>
    </CacheProvider>
  );
}
export default EditFarmInfo;
