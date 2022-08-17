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
  NewCalendarIcon,
} from "../../../assets/icon";
import "./../main.css";
import YearFieldModal from "./modals/yearFieldModal";
import ProductFieldModal from "./modals/productFieldModal";
import ProductGroupFieldModal from "./modals/productGroupFieldModal";
import { setYear } from "date-fns";

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

  const [year, setYear] = useState("");
  const getYear = (data) => {
    setYear(data);
  }

  const [productGroup, setProductGroup] = useState("");
  const getProductGroup = (data) => {
    setProductGroup(data);
  }

  

  let sal_id_validation = () => {
    if (!year) {
      return false;
    } else {
      return true;
    }
  };
  //  .test(function(permissionType) {if(permissionType === null) return false}),
  const validation = Yup.object().shape({
    // sal_id: Yup.string().required(),
    sal_id: Yup.string().test(
      "sal_id",
      "required",
      sal_id_validation
    ),
    product: Yup.string().required(),
    status: Yup.string().required(),
    cultivationArea: Yup.string().required(),
    plantingDate: Yup.string().required(),
    harvestDate: Yup.string().required(),
  });

  const initialValues = {
    sal_id: year.value,
    productGroup: productGroup.value,
    product: "",
    subProduct: "",
    sathe_zire_kesht: "",
    vaziat: "",
    planting_datetime: "",
    harvest_datetime: "",
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    // setClicked(true);

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
                    type="text"
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    placeholder="سال زراعی *"
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
                    type="text"
                    value={productGroup.name}
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    placeholder="گروه محصول"
                    onClick={() => showProductGroupModal()}
                  />
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
                    type="text"
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
                    placeholder="محصول *"
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
                    type="text"
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    placeholder="زیر محصول (اختیاری)"
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
                    type="text"
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
                    name="workerName"
                    type="text"
                    autoComplete="off"
                    className="search-input w-100 mt-4 py-3"
                    placeholder="تاریخ کاشت *"
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
                    name="phone"
                    type="Text"
                    autoComplete="off"
                    className="search-input w-100 mt-4 pl-5 py-3"
                    placeholder="تاریخ برداشت *"
                    style={
                      errors.phone && touched.phone
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                  />
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
                    type="text"
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
                    type="text"
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
        // confirmModal={submitDelete}
        hideModal={hideProductModal}
        // id={id}
        // items={items}
        // dataByName={dataByName}
      />
    </div>
  );
};

export default AddCultivation;
