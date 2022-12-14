import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CalendarIcon, CloseIcon, PlusIcon } from "../../assets/icon";
import {
  noe_faaliat_items,
  vahede_meghdar_items,
  vaziat_items,
} from "../../assets/strings/strings";
import DatePicker, { Calendar } from "react-datepicker2";
import { Modal } from "react-bootstrap";
import { getToolsList } from "../../redux/slice/activities/toolsList";
import AddNahadeModal from "./modals/addNahadeModal";
import {
  addNahade,
  clearNahadeList,
  deleteNahade,
} from "../../redux/slice/activities/nahade";
import {
  addActivity,
  // addActivityFile,
  clearActivity,
} from "../../redux/slice/activities/activity";
import moment from "moment-jalaali";
import { toast } from "react-toastify";
import folder from "./../../assets/img/folder.png";
import Loading from "../loading/loading";
import { Box } from "@mui/system";

import "./activity.css";

import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const selectErrorStyle = {
  control: (styles) => ({
    ...styles,
    border: "1px solid #f00 !important",
    color: "red !important",
    borderRadius: "12px !important",
  }),
};

const AddActivityForm = () => {
  const navigate = useNavigate();
  const farms = useSelector((state) => state.farmlist);
  const nahades = useSelector((state) => state.nahade);
  const [selectedTool, setSelectedTool] = useState();
  const [selectedCultivation, setSelectedCultivation] = useState("");
  const [noe_faaliat, set_noe_faaliat] = useState("");
  const [vaziat, setVaziat] = useState("");
  const [yaddasht, setYaddasht] = useState();
  const [tarikh_mohlat_anjam, set_tarikh_mohlat_anjam] = useState("");

  // const [anjam_dahande_list, set_anjam_dahande_list] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  // const [dateError, setDateError] = useState(false);
  const [showNahadeModal, setShowNahadeModal] = useState(false);
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools);
  const activity = useSelector((state) => state.activity);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [file, setFile] = useState([]);
  const [file, setFile] = useState("");
  const hiddenFileInput = React.useRef(null);
  // console.log(file[0])
  const accessList = useSelector((state) => state.accessList);
  const [worker, setWorker] = useState("");
  // console.log(worker);

  const PermissionNameFarsi = (type) => {
    switch (type) {
      case "manager":
        return "????????";
      case "contribute":
        return "??????????";
      case "no_access":
        return "??????????";
      default:
        return "";
    }
  };

  let options = accessList?.data?.map((item) => {
    return {
      value: item.worker.id,
      label:
        item.worker.name + " - " + PermissionNameFarsi(item.permission_type),
    };
  });

  const workerOnchange = (val) => {
    let list = "";
    val?.map((item, i, arr) => {
      list = list + item.value + (i != arr.length - 1 ? "," : "");
    });
    setWorker(list);
  };

  useEffect(() => {
    dispatch(getToolsList());
    // dispatch(getAccessList());
  }, []);

  const onCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const onNahadeModalHandler = () => {
    setShowNahadeModal(!showNahadeModal);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  let tarikh_mohlat_anjam_validation = () => {
    if (!tarikh_mohlat_anjam) {
      return false;
    } else {
      return true;
    }
  };

  let anjam_dahande_validation = () => {
    if (!worker) {
      return false;
    } else {
      return true;
    }
  };

  const validation = Yup.object().shape({
    cultivations: Yup.string().required(),
    noe_faaliat: Yup.string().required(),
    vaziat: Yup.string().required(),
    tarikh_mohlat_anjam: Yup.string().test(
      "tarikh_mohlat_anjam",
      "required",
      tarikh_mohlat_anjam_validation
    ),
    anjam_dahande_list: Yup.string().test(
      "anjam_dahande_list",
      "required",
      anjam_dahande_validation
    ),
  });

  const initialValues = {
    abzar_id: selectedTool,
    cultivations: selectedCultivation,
    noe_faaliat: noe_faaliat,
    vaziat: vaziat,
    tarikh_mohlat_anjam: tarikh_mohlat_anjam,
    anjam_dahande_list: worker,
    yaddasht: yaddasht,
    image: file[0],
  };

  const clearNahade = (item) => {
    dispatch(deleteNahade(item));
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    setClicked(true);
    const date = moment(tarikh_mohlat_anjam, "jYYYY/jMM/jDD").format(
      "YYYY-MM-DD"
    );

    const payload = {
      vaziat: values.vaziat,
      noe_faaliat: values.noe_faaliat,
      tarikh_mohlat_anjam: date,
      abzar_id: values.abzar_id,
      cultivations: values.cultivations,
      anjam_dahande_list: worker,
      yaddasht: yaddasht,
      image: file[0],
    };

    dispatch(addActivity(payload));
  };

  useEffect(() => {
    // console.log(activity?.isDone)
    if (activity?.isDone) {
      if (activity?.response?.guid) {
        if (nahades?.nahades?.length > 0) {
          nahades?.nahades?.map((item) => {
            const payload = {
              "activity-guid": activity.response.guid,
              "nahade-item-guid": item.nahade_item_guid,
              name_nahade: item.name_nahade,
              meghdar: item.meghdar,
              hazine_nahade: item.hazine_nahade,
              vahede_meghdar: item.vahede_meghdar,
              vahede_masahat: item.vahede_masahat,
            };
            console.log("---------");
            console.log(payload);
            dispatch(addNahade(payload));
          });
        } else {
          setLoading(false);
          setClicked(false);
          // setFile("");
          dispatch(clearNahadeList());
          dispatch(clearActivity());
          toast.success("???????????? ???????????? ????", { position: "top-center" });
          navigate("/activities");
        }
      }
    }
  }, [activity?.isDone]);

  useEffect(() => {
    if (!nahades?.addNahadeLoading) {
      setLoading(false);
      if (nahades?.nahades.length > 0) {
        // setFile("");
        dispatch(clearNahadeList());
        dispatch(clearActivity());
        setClicked(false);
        toast.success("???????????? ???????????? ????", { position: "top-center" });
        navigate("/activities");
      }
    }
  }, [nahades?.addNahadeLoading]);

  if (!loading) {
    return (
      <div className="container-fluid pb-5 mb-5">
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
                      as="select"
                      name="cultivations"
                      validate={true}
                      style={
                        errors.cultivations && touched.cultivations
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                      className="search-input"
                      onClick={(e) => setSelectedCultivation(e.target.value)}
                    >
                      <option value="" label="?????????? *" className="m-3">
                        ?????? ?????????? *
                      </option>
                      {farms?.postList?.map((item) => [
                        item.cultivation?.map((i) => (
                          <option
                            key={i.id}
                            value={i.id}
                            label={i.mahsul.title + " " + i.sathe_zire_kesht}
                            className="m-3"
                          >
                            {i.mahsul.title}
                          </option>
                        )),
                      ])}
                    </Field>
                  </Box>

                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <Field
                      as="select"
                      name="noe_faaliat"
                      style={
                        errors.noe_faaliat && touched.noe_faaliat
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                      className="search-input"
                      onClick={(e) => set_noe_faaliat(e.target.value)}
                    >
                      <option value="" label="?????? *">
                        ??????{" "}
                      </option>

                      {noe_faaliat_items?.map((item) => (
                        <option
                          key={item.key}
                          value={item.key}
                          label={item.title}
                        >
                          {item.title}
                        </option>
                      ))}
                    </Field>
                  </Box>
                </Box>

                <hr className="mt-5" />

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
                      as="select"
                      name="vaziat"
                      style={
                        errors.vaziat && touched.vaziat
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none" }
                      }
                      className="search-input"
                      onClick={(e) => setVaziat(e.target.value)}
                    >
                      <option value="" label="?????????? *">
                        ??????????
                      </option>

                      {vaziat_items?.map((item) => (
                        <option
                          key={item.key}
                          value={item.key}
                          label={item.title}
                        >
                          {item.title}
                        </option>
                      ))}
                    </Field>
                  </Box>

                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <div
                      name="tarikh_mohlat_anjam"
                      className="search-input"
                      // style={
                      //   dateError
                      //     ? { border: "1px solid #f00", color: "red" }
                      //     : { border: "none" }
                      // }
                      onClick={onCalendarHandler}
                      style={
                        errors.tarikh_mohlat_anjam &&
                        touched.tarikh_mohlat_anjam
                          ? {
                              border: "1px solid #f00",
                              color: "red",
                            }
                          : { border: "none", color: "#212529" }
                      }
                    >
                      {tarikh_mohlat_anjam ? (
                        <div>{tarikh_mohlat_anjam}</div>
                      ) : (
                        <div className="d-flex justify-content-between">
                          <span>?????????? ???????? ?????????? *</span>
                          <CalendarIcon fill={"gray"} />
                        </div>
                      )}
                    </div>
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
                    <Select
                      placeholder="?????????? ?????????? ???? *"
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      // defaultValue={[options[1], options[2]]}
                      isMulti
                      isSearchable
                      options={options}
                      className="search-input p-0"
                      name="anjam_dahande_list"
                      onChange={workerOnchange}
                      styles={
                        errors.anjam_dahande_list && touched.anjam_dahande_list
                          ? selectErrorStyle
                          : ""
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
                      as="select"
                      name="abzar_id"
                      className="search-input"
                      onClick={(e) => setSelectedTool(e.target.value)}
                      // style={{ height: "71px" }}
                    >
                      <option
                        value=""
                        className="text-gray"
                        label="?????????????? ?? ??????????"
                      >
                        ?????????????? ?? ??????????
                      </option>

                      {tools?.data?.map((item) => (
                        <option
                          key={item?.id}
                          value={item?.id}
                          label={item?.title}
                        >
                          {item?.title}
                        </option>
                      ))}
                    </Field>
                  </Box>
                </Box>

                <hr className="mt-5" />

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
                    <div
                      onClick={onNahadeModalHandler}
                      className="search-input d-flex justify-content-between"
                    >
                      <span className="text-gray">??????????</span>

                      <PlusIcon fill={"gray"} />
                    </div>
                  </Box>
                </Box>

                {nahades?.nahades?.length > 0
                  ? nahades?.nahades?.map((item) => (
                      <div
                        key={item?.id}
                        className={
                          nahades?.nahades?.length / 2 === 0
                            ? "nahade-item col-md-5 mx-auto mt-4 d-flex justify-content-between"
                            : "nahade-item col-md-5 mt-4 d-flex justify-content-between"
                        }
                      >
                        <div>
                          {nahades?.items?.map((nahadeItem) =>
                            nahadeItem.guid === item.nahade_item_guid
                              ? nahadeItem.title
                              : null
                          )}
                          {" - "}
                          {item.meghdar}
                          {" - "}
                          {vahede_meghdar_items?.map((i) =>
                            i.key === item.vahede_meghdar ? i.title : null
                          )}
                        </div>
                        <div onClick={() => clearNahade(item.id)}>
                          <CloseIcon fill={"red"} />
                        </div>
                      </div>
                    ))
                  : null}

                <hr style={{ backgroundColor: "transparent" }} />

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
                      name="yaddasht"
                      type="text"
                      component="textarea"
                      rows="4"
                      autoComplete="off"
                      onChange={(e) => setYaddasht(e.target.value)}
                      className="search-input"
                      placeholder="??????????????"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <div
                      className="search-input file-uploader"
                      style={{ padding: "5px" }}
                    >
                      {file.length < 1 ? (
                        <div onClick={handleClick}>
                          <input
                            type="file"
                            name="image"
                            ref={hiddenFileInput}
                            onChange={(e) => setFile([e.target.files[0]])}
                            style={{ display: "none" }}
                          />
                          <img
                            src={folder}
                            className="d-block mx-auto mt-2 mt-md-1"
                          />
                          <h5
                            style={{ fontWeight: "900" }}
                            className="text-center mt-3"
                          >
                            ?????????? ??????????
                          </h5>
                          <p className="text-center text-gray mt-3">
                            ???????? ?????? ?????? ???? ???????????? ????????
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
                              <CloseIcon fill={"red"} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Box>
                </Box>

                <div className="d-flex justify-content-center mt-3">
                  <button
                    disabled={clicked}
                    type="submit"
                    className="btn-dark-blue mx-1 mt-4"
                  >
                    ????????????
                  </button>
                  <NavLink
                    to={"/activities"}
                    className="btn-light-gray mx-1 mt-4 text-decoration-none text-light"
                  >
                    ??????
                  </NavLink>
                </div>
              </Form>
            </div>
          )}
        </Formik>

        <AddNahadeModal
          show={showNahadeModal}
          onNahadeModalHandler={onNahadeModalHandler}
        />

        <Modal show={showCalendar} centered onHide={onCalendarHandler}>
          <Calendar
            persianDigits={true}
            isGregorian={false}
            timePicker={false}
            className="border-0 shadow-sm my-5"
            onChange={(value) => {
              // console.warn(value);
              const month = value.jMonth() + 1;
              set_tarikh_mohlat_anjam(
                value.jYear() + "-" + month + "-" + value.jDate()
              );
              setShowCalendar(false);
              // setDateError(false);
            }}
          />
        </Modal>
      </div>
    );
  } else {
    <Loading />;
  }
};

export default AddActivityForm;
