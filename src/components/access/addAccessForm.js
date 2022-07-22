import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, PlusIcon } from "../../assets/icon";
import {
  noe_faaliat_items,
  vahede_meghdar_items,
  vaziat_items,
} from "../../assets/strings/strings";

import { getToolsList } from "../../redux/slice/activities/toolsList";

import {
  addActivity,
  addActivityFile,
  clearActivity,
} from "../../redux/slice/activities/activity";
import moment from "moment-jalaali";
import { toast } from "react-toastify";
import folder from "./../../assets/img/folder.png";
import Loading from "../loading/loading";
import ownerIcon from "../../assets/img/owner.png";
import managerIcon from "../../assets/img/manager.png";
import workerIcon from "../../assets/img/worker.png";
import guestIcon from "../../assets/img/guest.png";
import {
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
} from "@mui/base";

const AddActivityForm = () => {
  const navigate = useNavigate();
  const farms = useSelector((state) => state.farmlist);
  const [selectedTool, setSelectedTool] = useState();
  const [selectedCultivation, setSelectedCultivation] = useState();
  const [noe_faaliat, set_noe_faaliat] = useState();
  const [vaziat, setVaziat] = useState();
  const [yaddasht, setYaddasht] = useState();
  const [tarikh_mohlat_anjam, set_tarikh_mohlat_anjam] = useState();
  const [anjam_dahande_list, set_anjam_dahande_list] = useState();

  const [dateError, setDateError] = useState(false);
  const dispatch = useDispatch();
  const tools = useSelector((state) => state.tools);
  const activity = useSelector((state) => state.activity);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile([fileUploaded]);
  };

  useEffect(() => {
    dispatch(getToolsList());
  }, []);

  const validation = Yup.object().shape({
    farm: Yup.string().required(true),
    cultivations: Yup.string().required(true),
    noe_faaliat: Yup.string().required(true),
    vaziat: Yup.string().required(true),
    anjam_dahande_list: Yup.string().required(true),
  });

  const initialValues = {
    abzar_id: selectedTool,
    cultivations: selectedCultivation,
    noe_faaliat: noe_faaliat,
    vaziat: vaziat,
    anjam_dahande_list: anjam_dahande_list,
    yaddasht: yaddasht,
  };

  const onFormSubmit = (values) => {
    if (tarikh_mohlat_anjam) {
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
        anjam_dahande_list: "1",
        yaddasht: values.yaddasht,
      };
      dispatch(addActivity(payload));
    } else {
      setDateError(true);
      // toast.error('تاریخ مهلت انجام را وارد نمایید', {position: "top-center", theme: 'dark'})
    }
  };

  useEffect(() => {
    if (activity.isDone) {
      if (activity.response.guid) {
        setLoading(false);
        toast.success("فعالیت افزوده شد", { position: "top-center" });
        setClicked(false);
        setFile([]);
        dispatch(clearActivity());
        navigate("/activities");
      }
    }
  }, [activity.isDone]);

  if (!loading) {
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
              <div style={{ marginBottom: "50px" }}>
                از لیست زیر نوع دسترسی کاربر را انتخاب کنید
              </div>
              <Form className="row">
                {/* ------------- Start user-box ------------ */}
                <TabsUnstyled defaultValue={0}>
                  <TabsListUnstyled
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TabUnstyled value={1} className="user-box">
                      <div className="user-img">
                        <img src={ownerIcon} width="45px" height="48px" />
                      </div>

                      <p className="user-box-title">مالکان</p>
                      <p className="user-box-text">
                        مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={2} className="user-box">
                      <div className="user-img">
                        <img src={managerIcon} width="45px" height="48px" />
                      </div>

                      <p className="user-box-title">مدیران</p>
                      <p className="user-box-text">
                        مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={3} className="user-box">
                      <div className="user-img">
                        <img src={workerIcon} width="45px" height="48px" />
                      </div>

                      <p className="user-box-title">همکاران</p>
                      <p className="user-box-text">
                        مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                      </p>
                    </TabUnstyled>
                    <TabUnstyled value={4} className="user-box">
                      <div className="user-img">
                        <img src={guestIcon} width="45px" height="48px" />
                      </div>

                      <p className="user-box-title">مهمان</p>
                      <p className="user-box-text">
                        مالکان مزرعه به همه بخش های مزرعه مربوطه دسترسی دارد
                      </p>
                    </TabUnstyled>
                  </TabsListUnstyled>
                  {/* <TabPanelUnstyled value={0}></TabPanelUnstyled> */}
                </TabsUnstyled>
                {/* ------------- End user-box ------------ */}

                <hr className="mt-5" />
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
                    item.cultivation?.map((i) => (
                      <option
                        value={i.id}
                        label={i.mahsul.title + " " + i.sathe_zire_kesht}
                        className="m-3"
                      >
                        {i.mahsul.title}
                      </option>
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
                  <option value="" label="نوع *">
                    نوع{" "}
                  </option>

                  {noe_faaliat_items?.map((item) => (
                    <option value={item.key} label={item.title}>
                      {item.title}
                    </option>
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
                  <option value="" label="وضعیت *">
                    وضعیت{" "}
                  </option>

                  {vaziat_items?.map((item) => (
                    <option value={item.key} label={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Field>

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
                >
                  <option value="" label="انجام دهنده ها *">
                    انجام دهنده ها{" "}
                  </option>

                  {vaziat_items?.map((item) => (
                    <option value={item.key} label={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Field>

                <Field
                  as="select"
                  name="abzar_id"
                  className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                  onClick={(e) => setSelectedTool(e.target.value)}
                >
                  <option
                    value=""
                    className="text-gray"
                    label="تجهیزات و ابزار"
                  >
                    تجهیزات و ابزار{" "}
                  </option>

                  {tools?.data?.map((item) => (
                    <option value={item.id} label={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Field>

                <hr className="mt-5" />

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
                />

                <div
                  className="search-input file-uploader col-md-5 mx-auto mt-4"
                  style={{ height: 200 }}
                >
                  {file.length < 1 ? (
                    <div onClick={handleClick}>
                      <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
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
                      <div className="d-flex justify-content-between mt-3 px-4 mt-5">
                        <div>
                          <span>{file[0].name}</span>
                        </div>
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
                    onClick={() => {
                      onFormSubmit(initialValues);
                    }}
                  >
                    افزودن
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
      </div>
    );
  } else {
    <Loading />;
  }
};

export default AddActivityForm;
