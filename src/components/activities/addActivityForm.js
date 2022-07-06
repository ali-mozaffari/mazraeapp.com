import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import BreadCrumbs from "../tools/breadcrumbs";
import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CalendarIcon, PlusIcon} from "../../assets/icon";
import {noe_faaliat_items, vaziat_items} from '../../assets/strings/strings';
import DatePicker, {Calendar} from 'react-datepicker2';
import {Modal} from "react-bootstrap";
import {getToolsList} from "../../redux/slice/activities/toolsList";

const AddActivityForm = () => {
    const title = ["مزرعه من", "ویرایش مشخصات مزرعه"];
    const farms = useSelector((state) => state.farmlist);
    const [selectedFarm, setSelectedFarm] = useState();
    const [selectedCultivation, setSelectedCultivation] = useState();
    const [noe_faaliat, set_noe_faaliat] = useState();
    const [vaziat, setVaziat] = useState();
    const [tarikh_mohlat_anjam, set_tarikh_mohlat_anjam] = useState();
    const [anjam_dahande_list, set_anjam_dahande_list] = useState();
    const [showCalendar, setShowCalendar] = useState(false);
    const dispatch = useDispatch();
    const tools = useSelector((state) => state.tools);


    useEffect(() => {

        dispatch(getToolsList());

    }, [])


    const onCalendarHandler = () => {
        setShowCalendar(!showCalendar)
    }

    const validation = Yup.object().shape({
        farm: Yup.string()
            .required(true),
        cultivation: Yup.string()
            .required(true),
        noe_faaliat: Yup.string()
            .required(true),
        vaziat: Yup.string()
            .required(true),
        anjam_dahande_list: Yup.string()
            .required(true),
    });

    const initialValues = {
        farm: selectedFarm,
        cultivation: selectedCultivation,
        noe_faaliat: noe_faaliat,
        vaziat: vaziat,
        anjam_dahande_list: anjam_dahande_list,
    };


    console.error(selectedFarm)
    return (
        <div className="container-fluid">
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, formikHelpers) => {
                    //   sendDataToAPI(values);
                    formikHelpers.resetForm();
                }}
            >
                {({errors, touched}) => (
                    <div className="container">
                        <Form className="row">
                            <Field
                                as="select"
                                name="farm"
                                validate={true}
                                style={errors.farm && touched.farm ? {border: '1px solid #f00'} : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => setSelectedFarm(e.target.value)}
                            >
                                <option value="" label="نام مزرعه *">
                                    نام مزرعه{" "}
                                </option>

                                {
                                    farms?.postList?.map((item) => (
                                        <option value={item.guid} label={item.name} className="m-3">
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </Field>

                            <Field
                                as="select"
                                name="cultivation"
                                validate={true}
                                style={errors.cultivation && touched.cultivation ? {border: '1px solid #f00'} : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 py-4"
                                onClick={(e) => setSelectedCultivation(e.target.value)}
                            >
                                <option value="" label="محصول *" className="m-3">
                                    نام محصول *{" "}
                                </option>
                                {
                                    farms?.postList?.map((item) => [
                                        (
                                            item.guid === selectedFarm ? (
                                                item.cultivation.map((i) => (
                                                    <option value={i.guid}
                                                            label={i.mahsul.title + ' ' + i.sathe_zire_kesht + ' (مساحت زیر کشت) '}
                                                            className="m-3">
                                                        {i.mahsul.title}
                                                    </option>
                                                ))
                                            ) : null
                                        )
                                    ])
                                }
                            </Field>


                            <hr className="mt-5"/>


                            <Field
                                as="select"
                                name="noe_faaliat"
                                style={errors.noe_faaliat && touched.noe_faaliat ? {border: '1px solid #f00'} : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => set_noe_faaliat(e.target.value)}
                            >
                                <option value="" label="نوع *">
                                    نوع{" "}
                                </option>

                                {
                                    noe_faaliat_items?.map((item) => (
                                        <option value={item.key} label={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                }

                            </Field>


                            <Field
                                as="select"
                                name="vaziat"
                                style={errors.vaziat && touched.vaziat ? {border: '1px solid #f00'} : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => setVaziat(e.target.value)}
                            >
                                <option value="" label="وضعیت *">
                                    وضعیت{" "}
                                </option>

                                {
                                    vaziat_items?.map((item) => (
                                        <option value={item.key} label={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                }

                            </Field>


                            <div className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                 style={errors.tarikh_mohlat_anjam && touched.tarikh_mohlat_anjam ? {border: '1px solid #f00'} : {border: 'none'}}
                                 onClick={onCalendarHandler}
                            >
                                {
                                    tarikh_mohlat_anjam ? (
                                        <div>
                                            {tarikh_mohlat_anjam}
                                        </div>
                                    ) : (
                                        <div className=" d-flex justify-content-between">
                                            <span>
                                                تاریخ مهلت انجام *
                                            </span>
                                            <CalendarIcon fill={'gray'}/>

                                        </div>
                                    )
                                }
                            </div>


                            <Field
                                as="select"
                                name="anjam_dahande_list"
                                style={errors.anjam_dahande_list && touched.anjam_dahande_list ? {border: '1px solid #f00'} : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => set_anjam_dahande_list(e.target.value)}
                            >
                                <option value="" label="انجام دهنده ها *">
                                    انجام دهنده ها{" "}
                                </option>

                                {
                                    vaziat_items?.map((item) => (
                                        <option value={item.key} label={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                }


                            </Field>


                            <hr className="mt-5"/>

                            <Field
                                as="select"
                                name="vaziat"
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => setSelectedFarm(e.target.value)}
                            >
                                <option value="" label="تجهیزات و ابزار">
                                    تجهیزات و ابزار{" "}
                                </option>

                                {
                                    tools?.data?.map((item) => (
                                        <option value={item.key} label={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                }

                            </Field>

                            <div className="search-input col-md-5 mx-auto mt-4 py-4 d-flex justify-content-between">

                            <span className="text-gray">
                                نهاده
                            </span>

                                <PlusIcon fill={'gray'}/>

                            </div>


                            {/*<hr className="my-4"/>*/}

                            <Field
                                name="malekiat"
                                type="text"
                                component="textarea" rows="4"
                                autoComplete="off"
                                // value={phone}
                                // onChange={(e) => setPhone(e.target.value)}
                                className="search-input col-md-5 mx-auto mt-4"
                                placeholder="یادداشت"
                            />


                            <div className="search-input col-md-5 mx-auto mt-4">

                            </div>


                            <div className="">
                                <button type="submit" className="btn-dark-blue mx-1 mt-4">
                                    افزودن
                                </button>
                                <NavLink
                                    to={"/listUsers"}
                                    className="btn-dark-blue mx-1 mt-4"
                                >
                                    لغو
                                </NavLink>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>


            <Modal show={showCalendar} centered onHide={onCalendarHandler}>
                <Calendar
                    persianDigits={true}
                    isGregorian={false}
                    timePicker={false}
                    className="border-0 shadow-sm my-5"
                    onChange={(value) => {
                        console.warn(value);
                        const month = value.jMonth() + 1;
                        set_tarikh_mohlat_anjam(value.jYear() + '/' + month + '/' + value.jDate())
                        setShowCalendar(false);
                    }}
                />
            </Modal>

        </div>
    );
};

export default AddActivityForm;
