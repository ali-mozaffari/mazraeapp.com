import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "yup-phone";
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
  LocaltionIcon,
  NewCalendarIcon,
} from "../../../assets/icon";
import "./../farm.css";
import YearFieldModal from "./modals/yearFieldModal";
import ProductFieldModal from "./modals/productFieldModal";
import ProductGroupFieldModal from "./modals/productGroupFieldModal";
import SubProductFieldModal from "./modals/subProductFieldModal";
import { Modal } from "react-bootstrap";
import { Calendar } from "react-datepicker2";
import moment from "moment-jalaali";

const AddCultivation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Year Field
  const [displayYearModal, setDisplayYearModal] = useState(false);
  // Handle the displaying modal of year field
  const showYearModal = (id) => {
    // setId(id);
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
    // setId(id);
    setDisplayProductGroupModal(true);
  };
  const hideProductGroupModal = (id) => {
    // setId(id);
    setDisplayProductGroupModal(false);
  };

  // Product Field
  const [displayProductModal, setDisplayProductModal] = useState(false);
  // Handle the displaying modal of product field
  const showProductModal = (id) => {
    // setId(id);
    setDisplayProductModal(true);
  };
  const hideProductModal = (id) => {
    // setId(id);
    setDisplayProductModal(false);
  };

  // SubProduct Field
  const [displaySubProductModal, setDisplaySubProductModal] = useState(false);
  // Handle the displaying modal of product field
  const showSubProductModal = (id) => {
    // setId(id);
    setDisplaySubProductModal(true);
  };
  const hideSubProductModal = (id) => {
    // setId(id);
    setDisplaySubProductModal(false);
  };

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
    console.log(subProduct);
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

  //  .test(function(permissionType) {if(permissionType === null) return false}),
  const validation = Yup.object().shape({
    // sal_id: Yup.string().required(),
    sal_id: Yup.string().test("sal_id", "required", sal_id_validation),
    product: Yup.string().test("product", "required", product_validation),
    harvest_datetime: Yup.string().test("harvestDateTime", "required", harvestDateTime_validation),
    planting_datetime: Yup.string().test("plantingDateTime", "required", plantingDateTime_validation),
    status: Yup.string().required(),
    cultivationArea: Yup.string().required(),
    plantingDate: Yup.string().required(),
    harvestDate: Yup.string().required(),
  });

  const initialValues = {
    sal_id: year.value,
    productGroup: productGroup.value,
    product: product.value,
    subProduct: subProduct.value,
    harvest_datetime:harvestDateTime,
    planting_datetime:plantingDateTime,
    sathe_zire_kesht: "",
    vaziat: "",
    planting_datetime: "",
    harvest_datetime: "",
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
          <div className="container" style={{ maxWidth: "768px" }}>
            <Form className="row">
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "0",
                  paddingRight: "0",
                }}
              >
                نام مزرعه ....
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
                    value={year.name}
                    type="button"
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    // placeholder="سال زراعی *"
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
                  {!year.name ? (
                    <span className="fieldTitleEmpty">
                      سال زراعی <span className="starSign"> *</span>
                    </span>
                  ) : (
                    <span className="fieldTitleFilled">سال زراعی </span>
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
                انتخاب محصول
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
                    value={productGroup.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    // placeholder="گروه محصول"
                    onClick={() => showProductGroupModal()}
                  />
                  {!productGroup.name ? (
                    <span className="fieldTitleEmpty">گروه محصول</span>
                  ) : (
                    <span className="fieldTitleFilled">گروه محصول</span>
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
                    value={product.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
                    // placeholder="محصول *"
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
                  {!product.name ? (
                    <span className="fieldTitleEmpty">
                      محصول <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> محصول</span>
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
                    value={subProduct.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    // placeholder="زیر محصول (اختیاری)"
                    onClick={() => showSubProductModal()}
                  />
                  {!subProduct.name ? (
                    <span className="fieldTitleEmpty">زیر محصول</span>
                  ) : (
                    <span className="fieldTitleFilled">زیر محصول</span>
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
                }}
              >
                سطح زیر کشت (هکتار)
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
                    className="search-input w-100 mt-4 py-3"
                    placeholder="سطح زیر کشت"
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
                    مختصات کل مزرعه
                  </button>
                  <button
                    type="button"
                    className="btn-dark-blue mx-1 mt-4"
                    style={{ width: "40%", display: "-webkit-box" }}
                  >
                    افزودن
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
                    name="harvest_datetime"
                    type="button"
                    value={harvestDateTime}
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
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
                    <span className="fieldTitleEmpty">
                      تاریخ کاشت <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> تاریخ کاشت</span>
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
                    className="search-input w-100 mt-4 pl-5 py-3"
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
                    <span className="fieldTitleEmpty">
                      تاریخ برداشت <span className="starSign"> *</span>{" "}
                    </span>
                  ) : (
                    <span className="fieldTitleFilled"> تاریخ برداشت</span>
                  )}
                  <span className="fieldIcon">
                    <NewCalendarIcon />
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
                    name="workerName"
                    type="button"
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    placeholder="وضعیت *"
                    style={
                      errors.workerName && touched.workerName
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                  />
                  <span className="fieldIcon">
                    <ArrowSingleDownIcon />
                  </span>
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "48%" } }}>
                  <Field
                    name="phone"
                    type="button"
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
                    placeholder="قیمت (تومان/کلیوگرم)"
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
              </Box>

              <div className="farm-bottom-btn d-flex mt-3">
                <button type="submit" className="btn-dark-blue mx-1 mt-4">
                  ذخیره
                </button>
                <NavLink
                  to={"/"}
                  className="btn-light-pink mx-1 mt-4 text-decoration-none text-light"
                >
                  لغو درخواست
                </NavLink>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <YearFieldModal
        showModal={displayYearModal}
        hideModal={hideYearModal}
        data={getYear}
      />

      <ProductGroupFieldModal
        showModal={displayProductGroupModal}
        hideModal={hideProductGroupModal}
        data={getProductGroup}
      />

      <ProductFieldModal
        showModal={displayProductModal}
        hideModal={hideProductModal}
        data={getProduct}
      />

      <SubProductFieldModal
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
            // console.warn(value);
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
            // console.warn(value);
            const month = value.jMonth() + 1;
            setHarvestDateTime(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendarHarvest(false);
          }}
        />
      </Modal>

      <Modal show={showCalendarPlanting} centered onHide={handlePlantingDateTime}>
        <Calendar
          persianDigits={true}
          isGregorian={false}
          timePicker={false}
          className="border-0 shadow-sm my-5"
          onChange={(value) => {
            // console.warn(value);
            const month = value.jMonth() + 1;
            setPlantingDateTime(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendarPlanting(false);
          }}
        />
      </Modal>
      
    </div>
  );
};

export default AddCultivation;
