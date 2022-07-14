import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import BreadCrumbs from "../tools/breadcrumbs";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CalendarIcon, CloseIcon, PlusIcon } from "../../assets/icon";
import {
  noe_faaliat_items,
  vahede_masahat_items,
  vahede_meghdar_items,
  vaziat_items,
} from "../../assets/strings/strings";
import DatePicker, { Calendar } from "react-datepicker2";
import { Modal } from "react-bootstrap";
import { getToolsList } from "../../redux/slice/activities/toolsList";
import AddNahadeModal from "./modals/addNahadeModal";
import EditNahadeModal from "./modals/editNahadeModal";
import {
  addNahade,
  clearNahadeList,
  deleteNahade,
} from "../../redux/slice/activities/nahade";
import {
  addActivity,
  clearActivity,
} from "../../redux/slice/activities/activity";
import moment from "moment-jalaali";
import { toast } from "react-toastify";

const EditActivityForm = () => {
  const navigate = useNavigate();
  const farms = useSelector((state) => state.farmlist);
  const nahades = useSelector((state) => state.nahade);
  const [selectedFarm, setSelectedFarm] = useState();
  const [selectedCultivation, setSelectedCultivation] = useState();
  const [noe_faaliat, set_noe_faaliat] = useState();
  const [vaziat, setVaziat] = useState();
  const [yaddasht, setYaddasht] = useState();
  const [tarikh_mohlat_anjam, set_tarikh_mohlat_anjam] = useState();
  const [anjam_dahande_list, set_anjam_dahande_list] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [showNahadeModal, setShowNahadeModal] = useState(false);
  const [showEditNahadeModal, setShowEditNahadeModal] = useState(false);
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools);
  const activity = useSelector((state) => state.activity);

  const {id} = useParams();
//   const getActivitybyID = useSelector(state => selectPostById(state, Number(guid)))
const activities = useSelector(state => state.activitiesList);
const activityGuid = activities.data.details;
const existingActivity = activityGuid.filter(activity => activity.guid === id)
console.log(existingActivity[0])


  useEffect(() => {
    dispatch(getToolsList());
  }, []);

  const onCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };
  const onNahadeModalHandler = () => {
    setShowNahadeModal(!showNahadeModal);
  };
  const onEditNahadeModalHandler = () => {
    setShowEditNahadeModal(!showEditNahadeModal);
  };

  const validation = Yup.object().shape({
    farm: Yup.string().required(true),
    cultivations: Yup.string().required(true),
    noe_faaliat: Yup.string().required(true),
    vaziat: Yup.string().required(true),
    anjam_dahande_list: Yup.string().required(true),
  });

  const initialValues = {
    farm: selectedFarm,
    cultivations: selectedCultivation,
    noe_faaliat: noe_faaliat,
    vaziat: vaziat,
    anjam_dahande_list: anjam_dahande_list,
    yaddasht: yaddasht,
  };

  const clearNahade = (item) => {
    dispatch(deleteNahade(item));
  };

  const onFormSubmit = (values) => {
    if (tarikh_mohlat_anjam) {
      if (!activity.loading) {
        const date = moment(tarikh_mohlat_anjam, "jYYYY/jMM/jDD").format(
          "YYYY-MM-DD"
        );
        const payload = {
          vaziat: values.vaziat,
          noe_faaliat: values.noe_faaliat,
          tarikh_mohlat_anjam: date,
          abzar_id: values.abzar_id,
          cultivations: values.cultivations,
          anjam_dahande_list: "1",
          yaddasht: values.yaddasht,
        };
        dispatch(addActivity(payload));
      } else {
        toast.error("لطفا صبر نمایید");
      }
    } else {
      setDateError(true);
      // toast.error('تاریخ مهلت انجام را وارد نمایید', {position: "top-center", theme: 'dark'})
    }
  };

  useEffect(() => {
    if (activity.isDone) {
      if (activity.response.guid) {
        if (nahades.nahades.length > 0) {
          nahades.nahades.map((item) => {
            const payload = {
              "activity-guid": activity.response.guid,
              "nahade-item-guid": item.nahade_item_guid,
              name_nahade: item.name_nahade,
              meghdar: item.meghdar,
              hazine_nahade: item.hazine_nahade,
              vahede_meghdar: item.vahede_meghdar,
              vahede_masahat: item.vahede_masahat,
            };

            dispatch(addNahade(payload));
          });
        }
      }
    }
  }, [activity.isDone]);

  useEffect(() => {
    if (!nahades.addNahadeLoading) {
      if (nahades.nahades.length > 0) {
        dispatch(clearNahadeList());
        dispatch(clearActivity());
        navigate("/activities");
      }
    }
  }, [nahades.addNahadeLoading]);

  return (
    <div className="container-fluid pb-5 mb-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, formikHelpers) => {
          onFormSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="container">
            <Form className="row">
              <Field
                as="select"
                name="farm"
                validate={true}
                style={
                  errors.farm && touched.farm
                    ? {
                        border: "1px solid #f00",
                        color: "red",
                      }
                    : { border: "none" }
                }
                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                onClick={(e) => setSelectedFarm(e.target.value)}
              >
                <option value="" label="نام مزرعه *">
                  نام مزرعه
                  {/* {props} */}
                </option>

                {farms?.postList?.map((item) => (
                  <option
                    value={item.guid}
                    label={
                      item.cultivation.length > 0
                        ? item.name + " (دارای کشت) "
                        : item.name
                    }
                    className="m-3"
                  ></option>
                ))}
              </Field>

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
                <option value="" label="محصول *" className="m-3">
                  نام محصول *{" "}
                </option>
                {farms?.postList?.map((item) => [
                  item.guid === selectedFarm
                    ? item.cultivation.map((i) => (
                        <option
                          value={i.id}
                          label={
                            i.mahsul.title +
                            " " +
                            i.sathe_zire_kesht +
                            " (مساحت زیر کشت) "
                          }
                          className="m-3"
                        >
                          {i.mahsul.title}
                        </option>
                      ))
                    : null,
                ])}
              </Field>

              <hr className="mt-5" />

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
                default={existingActivity[0].noe_faaliat}
              >
                {noe_faaliat_items?.map((item) => (
                  <option value={item.key} label={item.title}>
                    {item.title}
                  </option>
                ))}
              </Field>

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
                default={existingActivity[0].vaziat}
              >
                {/* <option value="" label="وضعیت *">
                  وضعیت{" "}
                </option> */}

                {vaziat_items?.map((item) => (
                  <option value={item.key} label={item.title}>
                    {item.title}
                  </option>
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
                  <div>{tarikh_mohlat_anjam}</div>
                ) : (
                  <div className=" d-flex justify-content-between">
                    <span>{existingActivity[0].tarikh_mohlat_anjam}</span>
                    <CalendarIcon fill={"gray"} />
                  </div>
                )}
              </div>

              <Field
                as="select"
                name="anjam_dahande_list"
                style={
                  errors.anjam_dahande_list && touched.anjam_dahande_list
                    ? {
                        border: "1px solid #f00",
                        color: "red",
                      }
                    : { border: "none" }
                }
                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                onClick={(e) => set_anjam_dahande_list(e.target.value)}
                default={existingActivity[0].anjam_dahande_list}
              >
                {/* <option value="" label="انجام دهنده ها *">
                  انجام دهنده ها{" "}
                </option> */}

                {vaziat_items?.map((item) => (
                  <option value={item.key} label={item.title}>
                    {item.title}
                  </option>
                ))}
              </Field>

              <hr className="mt-5" />

              <Field
                as="select"
                name="abzar_id"
                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                onClick={(e) => setSelectedFarm(e.target.value)}
                default={existingActivity[0].tools}
              >
                {/* <option value="" className="text-gray" label="تجهیزات و ابزار">
                  تجهیزات و ابزار{" "}
                </option> */}

                {tools?.data?.map((item) => (
                  <option value={item.id} label={item.title}>
                    {item.title}
                  </option>
                ))}
              </Field>

              <div
                onClick={onNahadeModalHandler}
                className="search-input col-md-5 mx-auto mt-4 py-4 d-flex justify-content-between"
              >
                <span className="text-gray">نهاده</span>

                <PlusIcon fill={"gray"} />
              </div>

              {nahades?.nahades?.length > 0
                ? nahades?.nahades?.map((item) => (
                    <div className="nahade-item col-md-5 mx-auto mt-4 d-flex justify-content-between">
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

              <hr style={{ backgroundColor: "transparent" }} />
              <Field
                name="yaddasht"
                type="text"
                component="textarea"
                rows="4"
                autoComplete="off"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                className="search-input col-md-5 mx-auto mt-4"
                placeholder={existingActivity[0].yaddasht}
              />

              <div className="search-input col-md-5 mx-auto mt-4"></div>

              <div className="">
                <button
                  type="submit"
                  className="btn-dark-blue mx-1 mt-4"
                  onClick={() => onFormSubmit(initialValues)}
                >
                  افزودن
                </button>
                <NavLink
                  to={"/activities"}
                  className="btn-dark-blue mx-1 mt-4 text-decoration-none text-light"
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

      <EditNahadeModal
        show={showEditNahadeModal}
        onEditNahadeModalHandler={onEditNahadeModalHandler}
      />

      <Modal show={showCalendar} centered onHide={onCalendarHandler}>
        <Calendar
          persianDigits={true}
          isGregorian={false}
          timePicker={false}
          className="border-0 shadow-sm my-5"
          onChange={(value) => {
            console.warn(value);
            const month = value.jMonth() + 1;
            set_tarikh_mohlat_anjam(
              value.jYear() + "-" + month + "-" + value.jDate()
            );
            setShowCalendar(false);
            setDateError(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default EditActivityForm;
