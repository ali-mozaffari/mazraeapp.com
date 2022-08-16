import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
  // deleteEditNahade,
  deleteNahade,
  deleteNahadeEditActivity,
  getActivitiesNahade,
} from "../../redux/slice/activities/nahade";
import {
  editActivity,
  addActivityFile,
  clearActivity,
} from "../../redux/slice/activities/editActivity";
import moment from "moment-jalaali";
import { toast } from "react-toastify";
import folder from "./../../assets/img/folder.png";
import Loading from "../loading/loading";
import { CompressOutlined, InsertEmoticonOutlined } from "@mui/icons-material";
import "./activity.css";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import url from './../../services/config';
import { getAccessList } from "../../redux/slice/access/accessListBox";
const animatedComponents = makeAnimated();

const selectErrorStyle = {
  control: (styles) => ({
    ...styles,
    border: "1px solid #f00 !important",
    color: "red !important",
    borderRadius: "12px !important",
  }),
};

const EditActivityForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const activities = useSelector((state) => state.activitiesList);
  const activityGuid = activities.data.details;
  // const activityGuid = activities.data;
  const existingActivity = activityGuid.filter(
    (activity) => activity.guid === id
  );
  // const { name } = existingActivity[0]?.anjam_dahande[0][0];
  // console.log(name)
  //   console.log(existingActivity[0]?.guid)
  //   const mahsulTitle = existingActivity[0].cultivation[0].mahsul.title;
  // console.log(existingActivity[0]?.abzar?.id);
  //   console.log(mahsulTitle);

  const farms = useSelector((state) => state.farmlist);
  const nahades = useSelector((state) => state.nahade);
  const [selectedTool, setSelectedTool] = useState(
    existingActivity[0]?.abzar?.id
  );
  const [selectedCultivation, setSelectedCultivation] = useState(
    existingActivity[0]?.cultivation[0]?.id
  );
  const [noe_faaliat, set_noe_faaliat] = useState(
    existingActivity[0]?.noe_faaliat
  );
  const [vaziat, setVaziat] = useState(existingActivity[0]?.vaziat);
  const [yaddasht, setYaddasht] = useState();
  const [tarikh_mohlat_anjam, set_tarikh_mohlat_anjam] = useState();

  const [showCalendar, setShowCalendar] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [showNahadeModal, setShowNahadeModal] = useState(false);

  const tools = useSelector((state) => state.tools);
  // const activity = useSelector((state) => state.activity);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const hiddenFileInput = React.useRef(null);
  const activityEdit = useSelector((state) => state.activityEdit);
  console.log(activityEdit)
  const [existingNahade, setExistingNahade] = useState(
    existingActivity[0]?.nahades
  );
  const [deletedNahade, setDeletedNahade] = useState([]);

  let workerList = "";
  existingActivity[0]?.anjam_dahande?.map((item, i, arr) => {
    workerList = workerList + item.id + (i != arr.length - 1 ? ", " : "");
  });
  // const [anjam_dahande_list, set_anjam_dahande_list] = useState();
  // console.log(workerList)

  const accessList = useSelector((state) => state.accessList);
  const [worker, setWorker] = useState(workerList);

  const PermissionNameFarsi = (type) => {
    switch (type) {
      case "manager":
        return "مدیر";
      case "contribute":
        return "همکار";
      case "no_access":
        return "مهمان";
      default:
        return "";
    }
  };
  let options = accessList?.data?.map((item) => {
    return {
      value: item?.worker?.id,
      label:
        item?.worker?.name + " - " + PermissionNameFarsi(item?.permission_type),
    };
  });

  // let workerId = options?.map((item)=> item.value)
  let workerArray = existingActivity[0]?.anjam_dahande?.map((item) => item.id);

  // let filterSelectWorker = options.filter(( {value} ) => !workerArray.includes(value));

  let index = [];
  index = workerArray.map((n) => {
    return options.map((i) => i.value).indexOf(n);
  });

  const workerOnchange = (val) => {
    // console.log(val)
    let list = "";
    val.map((item, i, arr) => {
      list = list + item.value + (i != arr.length - 1 ? "," : "");
    });
    // console.log(list);
    setWorker(list);
  };
  
  // useEffect(() => {
  //   dispatch(getToolsList());
  //   // dispatch(getAccessList());
  // }, []);

  useEffect(() => {
    dispatch(getToolsList());
    set_tarikh_mohlat_anjam(existingActivity[0]?.tarikh_mohlat_anjam);
    setYaddasht(existingActivity[0]?.yaddasht);
  }, []);

  // useEffect(() => {
  //   setYaddasht(existingActivity[0]?.yaddasht);
  // }, []);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile([fileUploaded]);
  };

  const onCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  const onNahadeModalHandler = () => {
    setShowNahadeModal(!showNahadeModal);
  };

  let anjam_dahande_validation = () => {
    if (!worker) {
      return false;
    } else {
      return true;
    }
  };

  const validation = Yup.object().shape({
    cultivations: Yup.string().required(true),
    noe_faaliat: Yup.string().required(true),
    vaziat: Yup.string().required(true),
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
    anjam_dahande_list: worker,
    yaddasht: yaddasht,
    image: file[0],
  };

  const clearNahade = (item) => {
    dispatch(deleteNahade(item));
  };

  const deleteNahadeAPI = (id) => {
    setExistingNahade(existingNahade?.filter((i) => i.guid !== id));
    setDeletedNahade((current) => [...current, id]);
  };

  const onFormSubmit = (values) => {
    setLoading(true);
    setClicked(true);

    const payload = {
      guid: existingActivity[0]?.guid,
      vaziat: values.vaziat,
      noe_faaliat: values.noe_faaliat,
      tarikh_mohlat_anjam: tarikh_mohlat_anjam,
      abzar_id: values.abzar_id,
      cultivations: values.cultivations,
      anjam_dahande_list: worker,
      yaddasht: yaddasht,
      image: file[0],
    };
    dispatch(editActivity(payload));
    deletedNahade?.map((id) =>
      // console.log(id)
      dispatch(deleteNahadeEditActivity(id))
    );

    // if (activityEdit?.isDone) {
    //   console.log(activityEdit?.response?.guid)
    //   if (activityEdit?.response?.guid) {
    //     nahades?.nahades?.map((item) => {
    //       const payload = {
    //         "activity-guid": activityEdit.response.guid,
    //         "nahade-item-guid": item.nahade_item_guid,
    //         name_nahade: item.name_nahade,
    //         meghdar: item.meghdar,
    //         hazine_nahade: item.hazine_nahade,
    //         vahede_meghdar: item.vahede_meghdar,
    //         vahede_masahat: item.vahede_masahat,
    //       };
    //       dispatch(addNahade(payload));
    //       // dispatch(clearNahadeList());
    //       setClicked(false);
    //     });
    //   }
    //   dispatch(clearNahadeList());
    //   dispatch(clearActivity());
    //   toast.success("فعالیت به روز رسانی شد", { position: "top-center" });
    //   navigate("/activities");
    // }

  };

  useEffect(() => {
    if (activityEdit?.isDone) {
      if (activityEdit?.response?.guid) {
        if (nahades?.nahades?.length > 0) {
          nahades?.nahades?.map((item) => {
            const payload = {
              "activity-guid": activityEdit.response.guid,
              "nahade-item-guid": item.nahade_item_guid,
              name_nahade: item.name_nahade,
              meghdar: item.meghdar,
              hazine_nahade: item.hazine_nahade,
              vahede_meghdar: item.vahede_meghdar,
              vahede_masahat: item.vahede_masahat,
            };
            dispatch(addNahade(payload));
          });
        } else {

          setLoading(false);
          setClicked(false);
          // setFile("");
          dispatch(clearNahadeList());
          dispatch(clearActivity());
          toast.success("فعالیت به روز رسانی شد", { position: "top-center" });
          navigate("/activities");
        }
      }
    }
  }, [activityEdit?.isDone]);

  useEffect(() => {
    if (!nahades?.addNahadeLoading) {
      setLoading(false);
      if (nahades?.nahades.length > 0) {

        // setFile("");
        dispatch(clearNahadeList());
        dispatch(clearActivity());
        setClicked(false);
        toast.success("فعالیت به روز رسانی شد", { position: "top-center" });
        navigate("/activities");
      }
    }
  }, [nahades?.addNahadeLoading]);

  // useEffect(() => {
  //   if (activityEdit?.isDone) {
  //     if (activityEdit?.response?.guid) {
  //       nahades?.nahades?.map((item) => {
  //         const payload = {
  //           "activity-guid": activityEdit.response.guid,
  //           "nahade-item-guid": item.nahade_item_guid,
  //           name_nahade: item.name_nahade,
  //           meghdar: item.meghdar,
  //           hazine_nahade: item.hazine_nahade,
  //           vahede_meghdar: item.vahede_meghdar,
  //           vahede_masahat: item.vahede_masahat,
  //         };
  //         dispatch(addNahade(payload));
  //         dispatch(clearNahadeList());
  //         setClicked(false);
  //       });
  //     }
  //   }
  // }, [activityEdit.isDone]);

  // useEffect(() => {
  //   if (!nahades.addNahadeLoading) {
  //     setLoading(false);
  //     if (nahades.nahades.length > 0) {
  //       // if (file[0]) {
  //       //     const formData = new FormData();
  //       //     const guid = activity.response.guid
  //       //     const image = file[0]
  //       //
  //       //     formData['guid'] = guid
  //       //     formData['image'] = file[0]
  //       //
  //       //     dispatch(addActivityFile(formData))
  //       // }
  //       setFile([]);
  //       dispatch(clearNahadeList());
  //       dispatch(clearActivity());
  //       setClicked(false);
  //       toast.success("فعالیت به روز رسانی شد", { position: "top-center" });
  //       navigate("/activities");
  //     }
  //   }
  // }, [nahades.addNahadeLoading]);

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
                  className="search-input col-md-5 mx-auto mt-4 py-4"
                  onClick={(e) => setSelectedCultivation(e.target.value)}
                >
                  {farms?.postList?.map((item) => [
                    item.cultivation?.map((i) => (
                      <option
                        key={i.id}
                        value={i.id}
                        label={i.sathe_zire_kesht + " " + i.mahsul.title}
                        className="m-3"
                      ></option>
                    )),
                  ])}
                </Field>

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
                  className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                  onClick={(e) => set_noe_faaliat(e.target.value)}
                >
                  {noe_faaliat_items?.map((item) => (
                    <option
                      key={item.key}
                      value={item.key}
                      label={item.title}
                    ></option>
                  ))}
                </Field>

                <hr className="mt-5" />

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
                  className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                  onClick={(e) => setVaziat(e.target.value)}
                >
                  {vaziat_items?.map((item) => (
                    <option
                      key={item.key}
                      value={item.key}
                      label={item.title}
                    ></option>
                  ))}
                </Field>

                <div
                  className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                  style={
                    dateError
                      ? { border: "1px solid #f00", color: "red" }
                      : { border: "none" }
                  }
                  onClick={onCalendarHandler}
                >
                  {tarikh_mohlat_anjam ? (
                    <div>
                      {moment(tarikh_mohlat_anjam, "YYYY/MM/DD").format(
                        "jYYYY-jMM-jDD"
                      )}
                    </div>
                  ) : (
                    <div className=" d-flex justify-content-between">
                      <span>
                        <span>تاریخ ثبت نشده</span>
                      </span>
                      <CalendarIcon fill={"gray"} />
                    </div>
                  )}
                </div>

                <Select
                  placeholder="انجام دهنده ها *"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={index.map((i) => options[i])}
                  // defaultValue={[options[0],options[1],options[2]]}
                  isMulti
                  options={options}
                  className="search-input col-md-5 mx-auto mt-4 p-0"
                  name="anjam_dahande_list"
                  onChange={workerOnchange}
                  styles={
                    errors.anjam_dahande_list && touched.anjam_dahande_list
                      ? selectErrorStyle
                      : ""
                  }
                />

                <Field
                  as="select"
                  name="abzar_id"
                  className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                  onClick={(e) => setSelectedTool(e.target.value)}
                  style={{ height: "71px" }}
                >
                  {tools?.data?.map((item) => (
                    <option key={item.id} value={item.id} label={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Field>

                <hr className="mt-5" />

                <div
                  onClick={onNahadeModalHandler}
                  className="search-input col-md-5 mx-md-5 mt-4 py-4 d-flex justify-content-between"
                >
                  <span className="text-gray">نهاده</span>

                  <PlusIcon fill={"gray"} />
                </div>

                {nahades?.nahades?.length > 0
                  ? nahades?.nahades?.map((item) => (
                      <div
                        key={item.nahade_item_guid}
                        className={
                          nahades?.nahades?.length / 2 === 0
                            ? "nahade-item col-md-5 mx-auto mt-4 d-flex justify-content-between"
                            : "nahade-item col-md-5 mx-md-5 mt-4 d-flex justify-content-between"
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
                          {vahede_meghdar_items.map((i) =>
                            i.key === item.vahede_meghdar ? i.title : null
                          )}
                        </div>
                        <div onClick={() => clearNahade(item.id)}>
                          <CloseIcon />
                        </div>
                      </div>
                    ))
                  : null}

                {/* --------- Existing Nahade from Database ----------- */}

                {/* {deletedNahade === "" ? */}
                {existingActivity[0]?.nahades?.length > 0
                  ? existingNahade?.map((item) => (
                      <div
                        key={item.guid}
                        className={
                          existingActivity[0]?.nahades?.length / 2 === 0
                            ? "nahade-item col-md-5 mx-auto mt-4 d-flex justify-content-between"
                            : "nahade-item col-md-5 mx-md-5 mt-4 d-flex justify-content-between"
                        }
                      >
                        <div>
                          {item.nahade_item.title}
                          {" - "}
                          {item.meghdar}
                          {" - "}
                          {vahede_meghdar_items.map((i) =>
                            i.key === item.vahede_meghdar ? i.title : null
                          )}
                          {item.id}
                        </div>
                        <div onClick={() => deleteNahadeAPI(item.guid)}>
                          <CloseIcon />
                        </div>
                      </div>
                    ))
                  : null}

                <hr style={{ backgroundColor: "transparent" }} />
                <Field
                  name="yaddasht"
                  type="text"
                  component="textarea"
                  rows="4"
                  autoComplete="off"
                  onChange={(e) => setYaddasht(e.target.value)}
                  className="search-input col-md-5 mx-auto mt-4"
                  placeholder="یادداشت"
                  defaultValue={existingActivity[0]?.yaddasht}
                />

                <div
                  className="search-input file-uploader col-md-5 mx-auto mt-4"
                  // style={{ height: 200 }}
                >
                  {file.length < 1 ? (
                    <div onClick={handleClick}>
                      <input
                        type="file"
                        name="image"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <img
                        // src={folder}
                        src={url+(existingActivity[0]?.file?.image)}
                        className="d-block mx-auto mt-2 mt-md-1"
                        style={{width: "100px"}}
                      />
                      <h5
                        style={{ fontWeight: "900" }}
                        className="text-center mt-3"
                      >
                        آپلود مدارک
                      </h5>
                      <p className="text-center text-gray mt-3">
                        فایل های خود را انتخاب کنید
                      </p>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={folder}
                        className="d-block mx-auto mt-2 mt-md-1"
                      />
                      <div className="image-edit d-flex justify-content-between mt-3 px-4 mt-5">
                          <span>{file[0].name}</span>
                          {/* <img src={url+(existingActivity[0]?.file?.image)} alt="image" /> */}
                        <div onClick={() => setFile([])}>
                          <CloseIcon />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <button
                    disabled={clicked}
                    type="submit"
                    className="btn-dark-blue mx-1 mt-4"
                    // onClick={() => {
                    //   onFormSubmit(initialValues);
                    // }}
                  >
                    به روز رسانی
                  </button>
                  <NavLink
                    to={"/activities"}
                    className="btn-light-gray mx-1 mt-4 text-decoration-none text-light"
                  >
                    لغو
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
              console.warn(value);
              const date =
                value.jYear() +
                "-" +
                (value.jMonth() + 1) +
                "-" +
                value.jDate();
              set_tarikh_mohlat_anjam(
                moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD")
              );
              setShowCalendar(false);
              setDateError(false);
            }}
          />
        </Modal>
      </div>
    );
  } else {
    <Loading />;
  }
};

export default EditActivityForm;
