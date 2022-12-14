import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "yup-phone";
import * as persianTools from "@persian-tools/persian-tools";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAccess } from "../../../redux/slice/access/addAccess";
import { clearAccess } from "../../../redux/slice/access/addAccess";
import { toast } from "react-toastify";
import { Box, styled } from "@mui/system";
import {
  ArrowSingleDownIcon,
  ArrowUpDownIcon,
  InfoLigthIcon,
  LocaltionIcon,
  NewCalendarIcon,
} from "../../../assets/icon";
// import "./../cultivation/modals/farmModal.css";
import { Modal } from "react-bootstrap";
import { Calendar } from "react-datepicker2";
import moment from "moment-jalaali";
import CurrentCultivationPriceFieldModal from "./modals/currentCultivationPriceFieldModal";
import CurrentCultivationTotalProductFieldModal from "./modals/currentCultivationTotalProductFieldModal";
import CurrentCultivationVaziatFieldModal from "./modals/currentCultivationVaziatFieldModal";
import CurrentCultivationSubProductFieldModal from "./modals/currentCultivationSubProductFieldModal";
import CurrentCultivationProductFieldModal from "./modals/currentCultivationProductFieldModal";
import CurrentCultivationProductGroupFieldModal from "./modals/currentCultivationProductGroupFieldModal";
import CurrentCultivationYearFieldModal from "./modals/currentCultivationYearFieldModal";

const CurrentCultivationEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Year Field
  const [displayYearModal, setDisplayYearModal] = useState(false);
  // Handle the displaying modal of year field
  const showYearModal = (id) => {
    setDisplayYearModal(true);
  };
  // Hide the modal
  const hideYearModal = () => {
    setDisplayYearModal(false);
  };

  // Product Group Field
  const [displayProductGroupModal, setDisplayProductGroupModal] =
    useState(false);
  // Handle the displaying modal of product field
  const showProductGroupModal = (id) => {
    setDisplayProductGroupModal(true);
  };
  const hideProductGroupModal = (id) => {
    setDisplayProductGroupModal(false);
  };

  // Product Field
  const [displayProductModal, setDisplayProductModal] = useState(false);
  // Handle the displaying modal of product field
  const showProductModal = (id) => {
    setDisplayProductModal(true);
  };
  const hideProductModal = (id) => {
    setDisplayProductModal(false);
  };

  // SubProduct Field
  const [displaySubProductModal, setDisplaySubProductModal] = useState(false);
  // Handle the displaying modal of product field
  const showSubProductModal = (id) => {
    setDisplaySubProductModal(true);
  };
  const hideSubProductModal = (id) => {
    setDisplaySubProductModal(false);
  };

  // Vaziat Field
  const [displayVaziatModal, setDisplayVaziatModal] = useState(false);
  // Handle the displaying modal of vaziat field
  const showVaziatModal = (id) => {
    setDisplayVaziatModal(true);
  };
  const hideVaziatModal = (id) => {
    setDisplayVaziatModal(false);
  };

  // TotalProduct Field
  const [displayTotalProductModal, setDisplayTotalProductModal] =
    useState(false);
  // Handle the displaying modal of TotalProduct field
  const showTotalProductModal = (id) => {
    setDisplayTotalProductModal(true);
  };
  const hideTotalProductModal = (id) => {
    setDisplayTotalProductModal(false);
  };

  // Price Field
  const [displayPriceModal, setDisplayPriceModal] = useState(false);
  // Handle the displaying modal of Price field
  const showPriceModal = (id) => {
    setDisplayPriceModal(true);
  };
  const hidePriceModal = (id) => {
    setDisplayPriceModal(false);
  };

  //Get Data from Modal
  const [year, setYear] = useState("");
  const getYear = (data) => {
    setYear(data);
  };

  const [productGroup, setProductGroup] = useState("");
  const getProductGroup = (data) => {
    setProductGroup(data);
  };

  const [product, setProduct] = useState("");
  const getProduct = (data) => {
    setProduct(data);
  };

  const [subProduct, setSubProduct] = useState("");
  const getSubProduct = (data) => {
    setSubProduct(data);
  };

  const [harvestDateTime, setHarvestDateTime] = useState("");
  const [showCalendarHarvest, setShowCalendarHarvest] = useState(false);
  const handleHarvestDateTime = () => {
    setShowCalendarHarvest(!showCalendarHarvest);
  };

  const [plantingDateTime, setPlantingDateTime] = useState("");
  const [showCalendarPlanting, setShowCalendarPlanting] = useState(false);
  const handlePlantingDateTime = () => {
    setShowCalendarPlanting(!showCalendarPlanting);
  };

  const [vaziat, setVaziat] = useState("");
  const getVaziat = (data) => {
    setVaziat(data);
  };

  const [totalProduct, setTotalProduct] = useState("");
  const getTotalProduct = (data) => {
    setTotalProduct(data);
  };

  const [tonKilogram, setTonKilogram] = useState("");
  const getTonKg = (data) => {
    setTonKilogram(data);
  };
  console.log(tonKilogram);

  const [price, setPrice] = useState("");
  const getPrice = (data) => {
    setPrice(data);
  };

  let sal_id_validation = () => {
    if (!year) {
      return false;
    } else {
      return true;
    }
  };

  const product_validation = () => {
    if (!product) {
      return false;
    } else {
      return true;
    }
  };

  let harvestDateTime_validation = () => {
    if (!harvestDateTime) {
      return false;
    } else {
      return true;
    }
  };

  let plantingDateTime_validation = () => {
    if (!plantingDateTime) {
      return false;
    } else {
      return true;
    }
  };

  const vaziat_validation = () => {
    if (!vaziat) {
      return false;
    } else {
      return true;
    }
  };

  //  .test(function(permissionType) {if(permissionType === null) return false}),
  const validation = Yup.object().shape({
    // sal_id: Yup.string().required(),
    sal_id: Yup.string().test("sal_id", "required", sal_id_validation),
    product: Yup.string().test("product", "required", product_validation),
    harvest_datetime: Yup.string().test(
      "harvestDateTime",
      "required",
      harvestDateTime_validation
    ),
    planting_datetime: Yup.string().test(
      "plantingDateTime",
      "required",
      plantingDateTime_validation
    ),
    vaziat: Yup.string().test("vaziat", "required", vaziat_validation),
  });

  const initialValues = {
    sal_id: year.value,
    productGroup: productGroup.value,
    product: product.value,
    subProduct: subProduct.value,
    harvest_datetime: harvestDateTime,
    planting_datetime: plantingDateTime,
    sathe_zire_kesht: "",
    vaziat: "",
    totalProduct: "",
    price: "",
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    const harvestDate = moment(harvestDateTime, "jYYYY/jMM/jDD").format(
      "YYYY-MM-DD"
    );
    const plantingDate = moment(plantingDateTime, "jYYYY/jMM/jDD").format(
      "YYYY-MM-DD"
    );

    const payload = {
      sal_id: year.toString(),
      // name: values.workerName.toString(),
      // cell_phone: values.phone.toString(),
      // "farm-guid": values.farm.toString(),
    };
    dispatch(addAccess(payload));
  };

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
            <Form className="row">
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                }}
              >
                ?????? ?????????? ....
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
                    name="sal_id"
                    value={year?.name}
                    type="button"
                    autoComplete="off"
                    className="search-input"
                    // placeholder="?????? ?????????? *"
                    style={
                      errors.sal_id && touched.sal_id
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                    onClick={() => showYearModal()}
                  />
                  {!year?.name ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showYearModal()}
                    >
                      ?????? ?????????? <span className="starSign"> *</span>
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">?????? ?????????? </span>
                  )}
                  <span className="fieldIcon">
                    <ArrowUpDownIcon />
                  </span>
                </Box>
              </Box>

              <hr className="mt-4" />

              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                }}
              >
                ???????????? ??????????
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
                    name="productGroup"
                    type="button"
                    value={productGroup?.name}
                    autoComplete="off"
                    className="search-input"
                    // placeholder="???????? ??????????"
                    onClick={() => showProductGroupModal()}
                  />
                  {!productGroup?.name ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showProductGroupModal()}
                    >
                      ???????? ??????????
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">???????? ??????????</span>
                  )}
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                  }}
                >
                  <Field
                    name="product"
                    type="button"
                    value={product?.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
                    // placeholder="?????????? *"
                    style={
                      errors.product && touched.product
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                    onClick={() => showProductModal()}
                  />
                  {!product?.name ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showProductModal()}
                    >
                      ?????????? <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> ??????????</span>
                  )}
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
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
                    name="subProduct"
                    type="button"
                    value={subProduct?.name}
                    autoComplete="off"
                    className="search-input"
                    // placeholder="?????? ?????????? (??????????????)"
                    onClick={() => showSubProductModal()}
                  />
                  {!subProduct?.name ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showSubProductModal()}
                    >
                      ?????? ??????????
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">?????? ??????????</span>
                  )}
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
                </Box>
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
                  <Field
                    name="harvest_datetime"
                    type="button"
                    value={harvestDateTime}
                    autoComplete="off"
                    className="search-input"
                    style={
                      errors.harvest_datetime && touched.harvest_datetime
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                    onClick={handleHarvestDateTime}
                  />
                  {!harvestDateTime ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={handleHarvestDateTime}
                    >
                      ?????????? ???????? <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> ?????????? ????????</span>
                  )}
                  <span className="fieldIcon">
                    <NewCalendarIcon />
                  </span>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                  }}
                >
                  <Field
                    name="planting_datetime"
                    type="button"
                    value={plantingDateTime}
                    autoComplete="off"
                    className="search-input"
                    style={
                      errors.planting_datetime && touched.planting_datetime
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                    onClick={handlePlantingDateTime}
                  />
                  {!plantingDateTime ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={handlePlantingDateTime}
                    >
                      ?????????? ???????????? <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> ?????????? ????????????</span>
                  )}
                  <span className="fieldIcon">
                    <NewCalendarIcon />
                  </span>
                </Box>
              </Box>

              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                }}
              >
                ?????? ?????? ?????? (??????????)
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
                    name="workerName"
                    type="button"
                    autoComplete="off"
                    className="search-input"
                    placeholder="?????? ?????? ??????"
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
                <Box
                  sx={{
                    width: { xs: "100%", sm: "48%" },
                    position: "relative",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <button
                    type="button"
                    className="farm-coordination-title mx-1 mt-4"
                  >
                    ???????????? ???? ??????????
                  </button>
                  <button
                    type="button"
                    className="btn-dark-blue mx-1 mt-4"
                    style={{ width: "40%", display: "-webkit-box" }}
                  >
                    ????????????
                  </button>
                  <span className="locationIcon">
                    <LocaltionIcon />
                  </span>
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
                    name="vaziat"
                    value={vaziat?.name}
                    type="button"
                    autoComplete="off"
                    className="search-input"
                    style={
                      errors.vaziat && touched.vaziat
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                    onClick={() => showVaziatModal()}
                  />
                  {!vaziat ? (
                    <span
                      className="fieldTitleEmpty"
                      onClick={() => showVaziatModal()}
                    >
                      ??????????<span className="starSign"> *</span>
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">??????????</span>
                  )}
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
                </Box>
                {vaziat?.value === "3" ? (
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%", position: "relative" },
                    }}
                  >
                    <Field
                      name="totalProduct"
                      value={totalProduct}
                      type="button"
                      autoComplete="off"
                      className="search-input"
                      onClick={showTotalProductModal}
                      // onChange={handleTotalProduct}
                    />
                    {!totalProduct ? (
                      <span
                        className="fieldTitleEmpty"
                        onClick={() => showTotalProductModal()}
                      >
                        ?????????? ???? (?????????????? ???? ??????????)
                      </span>
                    ) : (
                      <span className="fieldTitleFilled">
                        ?????????? ???? (?????????????? ???? ??????????)
                      </span>
                    )}
                    <span className="fieldIcon" style={{ color: "#A2A2A2" }}>
                      ??????????????
                    </span>

                    {totalProduct ? (
                      <span>
                        <span>
                          <InfoLigthIcon />
                        </span>
                        <span className="persianToolsText">
                          {tonKilogram.division ? (
                            <span>
                              {persianTools.numberToWords(tonKilogram.division)}{" "}
                              <span>????</span>
                            </span>
                          ) : (
                            ""
                          )}
                          {tonKilogram.division && tonKilogram.remain ? (
                            <span> ?? </span>
                          ) : (
                            ""
                          )}
                          {tonKilogram.remain ? (
                            <span>
                              {persianTools.numberToWords(tonKilogram.remain)}{" "}
                              <span>??????????????</span>
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
                {vaziat?.value === "3" ? (
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <Field
                      name="price"
                      value={price}
                      type="button"
                      autoComplete="off"
                      className="search-input"
                      onClick={showPriceModal}
                      // onChange={handlePrice}
                    />
                    {!price ? (
                      <span
                        className="fieldTitleEmpty"
                        onClick={() => showPriceModal()}
                      >
                        ???????? (??????????/??????????????)
                      </span>
                    ) : (
                      <span className="fieldTitleFilled">
                        ???????? (??????????/??????????????)
                      </span>
                    )}

                    {price ? (
                      <span>
                        <span>
                          <InfoLigthIcon />
                        </span>
                        <span className="persianToolsText">
                          {persianTools.numberToWords(price)}
                          <span> ??????????</span>
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              <div className="farm-bottom-btn d-flex mt-3">
                <button
                  type="submit"
                  className="btn-dark-blue mx-1 mt-4"
                  // onClick={() => navigate("/current-cultivation")}
                >
                  ??????????
                </button>
                <NavLink
                  to={"/current-cultivation"}
                  className="btn-light-pink mx-1 mt-4 text-decoration-none text-light"
                >
                  ?????? ??????????????
                </NavLink>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <CurrentCultivationYearFieldModal
        showModal={displayYearModal}
        hideModal={hideYearModal}
        data={getYear}
      />

      <CurrentCultivationProductGroupFieldModal
        showModal={displayProductGroupModal}
        hideModal={hideProductGroupModal}
        data={getProductGroup}
      />

      <CurrentCultivationProductFieldModal
        showModal={displayProductModal}
        hideModal={hideProductModal}
        data={getProduct}
      />

      <CurrentCultivationSubProductFieldModal
        showModal={displaySubProductModal}
        hideModal={hideSubProductModal}
        data={getSubProduct}
      />

      <Modal show={showCalendarHarvest} centered onHide={handleHarvestDateTime}>
        <Calendar
          persianDigits={true}
          isGregorian={false}
          timePicker={false}
          className="border-0 shadow-sm my-5"
          onChange={(value) => {
            const month = value.jMonth() + 1;
            setHarvestDateTime(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendarHarvest(false);
          }}
        />
      </Modal>

      <Modal show={showCalendarHarvest} centered onHide={handleHarvestDateTime}>
        <Calendar
          persianDigits={true}
          isGregorian={false}
          timePicker={false}
          className="border-0 shadow-sm my-5"
          onChange={(value) => {
            const month = value.jMonth() + 1;
            setHarvestDateTime(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendarHarvest(false);
          }}
        />
      </Modal>

      <Modal
        show={showCalendarPlanting}
        centered
        onHide={handlePlantingDateTime}
      >
        <Calendar
          persianDigits={true}
          isGregorian={false}
          timePicker={false}
          className="border-0 shadow-sm my-5"
          onChange={(value) => {
            const month = value.jMonth() + 1;
            setPlantingDateTime(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendarPlanting(false);
          }}
        />
      </Modal>

      <CurrentCultivationVaziatFieldModal
        showModal={displayVaziatModal}
        hideModal={hideVaziatModal}
        data={getVaziat}
      />

      <CurrentCultivationTotalProductFieldModal
        showModal={displayTotalProductModal}
        hideModal={hideTotalProductModal}
        data={getTotalProduct}
        tonKg={getTonKg}
      />

      <CurrentCultivationPriceFieldModal
        showModal={displayPriceModal}
        hideModal={hidePriceModal}
        data={getPrice}
      />
    </div>
  );
};

export default CurrentCultivationEdit;
