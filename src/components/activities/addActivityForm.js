import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CalendarIcon, CloseIcon, PlusIcon} from "../../assets/icon";
import {
    noe_faaliat_items,
    vahede_meghdar_items,
    vaziat_items
} from '../../assets/strings/strings';
import DatePicker, {Calendar} from 'react-datepicker2';
import {Modal} from "react-bootstrap";
import {getToolsList} from "../../redux/slice/activities/toolsList";
import AddNahadeModal from "./modals/addNahadeModal";
import {addNahade, clearNahadeList, deleteNahade} from "../../redux/slice/activities/nahade";
import {addActivity, addActivityFile, clearActivity} from "../../redux/slice/activities/activity";
import moment from 'moment-jalaali';
import {toast} from "react-toastify";
import folder from './../../assets/img/folder.png';

const AddActivityForm = () => {
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
    const dispatch = useDispatch();
    const tools = useSelector((state) => state.tools);
    const activity = useSelector((state) => state.activity);
    const [clicked, setClicked] = useState(false);
    const [file, setFile] = useState([]);
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        setFile([fileUploaded]);
    };

    useEffect(() => {
        dispatch(getToolsList());
    }, [])

    const onCalendarHandler = () => {
        setShowCalendar(!showCalendar)
    }
    const onNahadeModalHandler = () => {
        setShowNahadeModal(!showNahadeModal)
    }

    const validation = Yup.object().shape({
        farm: Yup.string()
            .required(true),
        cultivations: Yup.string()
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
        cultivations: selectedCultivation,
        noe_faaliat: noe_faaliat,
        vaziat: vaziat,
        anjam_dahande_list: anjam_dahande_list,
        yaddasht: yaddasht
    };

    const clearNahade = (item) => {
        dispatch(deleteNahade(item))
    }

    const onFormSubmit = (values) => {
        if (tarikh_mohlat_anjam) {
            setClicked(true);
            const date = moment(tarikh_mohlat_anjam, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
            const payload = {
                "vaziat": values.vaziat,
                "noe_faaliat": values.noe_faaliat,
                "tarikh_mohlat_anjam": date,
                "abzar_id": values.abzar_id,
                "cultivations": values.cultivations,
                "anjam_dahande_list": '1',
                "yaddasht": values.yaddasht
            }
            dispatch(addActivity(payload))
        } else {
            setDateError(true);
            // toast.error('تاریخ مهلت انجام را وارد نمایید', {position: "top-center", theme: 'dark'})
        }
    }

    useEffect(() => {

        if (activity.isDone) {
            if (activity.response.guid) {
                if (nahades.nahades.length > 0) {
                    nahades.nahades.map((item) => {
                        const payload = {
                            'activity-guid': activity.response.guid,
                            'nahade-item-guid': item.nahade_item_guid,
                            'name_nahade': item.name_nahade,
                            'meghdar': item.meghdar,
                            'hazine_nahade': item.hazine_nahade,
                            'vahede_meghdar': item.vahede_meghdar,
                            'vahede_masahat': item.vahede_masahat
                        }

                        dispatch(addNahade(payload))

                    })
                } else {
                    setClicked(false)
                    setFile([]);
                    dispatch(clearNahadeList());
                    dispatch(clearActivity());
                    navigate('/activities');
                }
            }
        }

    }, [activity.isDone])

    useEffect(() => {

        if (!nahades.addNahadeLoading) {
            if (nahades.nahades.length > 0) {
                // if (file[0]) {
                //     const formData = new FormData();
                //     const guid = activity.response.guid
                //     const image = file[0]
                //
                //     formData['guid'] = guid
                //     formData['image'] = file[0]
                //
                //     dispatch(addActivityFile(formData))
                // }
                setFile([]);
                dispatch(clearNahadeList());
                dispatch(clearActivity());
                setClicked(false)
                navigate('/activities');

            }
        }

    }, [nahades.addNahadeLoading])


    return (
        <div className="container-fluid pb-5 mb-5">
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, formikHelpers) => {
                    onFormSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <div className="container">
                        <Form className="row">
                            <Field
                                as="select"
                                name="farm"
                                validate={true}
                                style={errors.farm && touched.farm ? {
                                    border: '1px solid #f00',
                                    color: 'red'
                                } : {border: 'none'}}
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => setSelectedFarm(e.target.value)}
                            >
                                <option value="" label="نام مزرعه *">
                                    نام مزرعه{" "}
                                </option>

                                {
                                    farms?.postList?.map((item) => (
                                        <option value={item.guid}
                                                label={item.cultivation.length > 0 ? item.name + ' (دارای کشت) ' : item.name}
                                                className="m-3">

                                        </option>
                                    ))
                                }
                            </Field>

                            <Field
                                as="select"
                                name="cultivations"
                                validate={true}
                                style={errors.cultivations && touched.cultivations ? {
                                    border: '1px solid #f00',
                                    color: 'red'
                                } : {border: 'none'}}
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
                                                    <option value={i.id}
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
                                style={errors.noe_faaliat && touched.noe_faaliat ? {
                                    border: '1px solid #f00',
                                    color: 'red'
                                } : {border: 'none'}}
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
                                style={errors.vaziat && touched.vaziat ? {
                                    border: '1px solid #f00',
                                    color: 'red'
                                } : {border: 'none'}}
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
                                 style={dateError ? {border: '1px solid #f00', color: 'red'} : {border: 'none'}}
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
                                style={errors.anjam_dahande_list && touched.anjam_dahande_list ? {
                                    border: '1px solid #f00',
                                    color: 'red'
                                } : {border: 'none'}}
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
                                name="abzar_id"
                                className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                                onClick={(e) => setSelectedFarm(e.target.value)}
                            >
                                <option value="" className="text-gray" label="تجهیزات و ابزار">
                                    تجهیزات و ابزار{" "}
                                </option>

                                {
                                    tools?.data?.map((item) => (
                                        <option value={item.id} label={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                }

                            </Field>

                            <div onClick={onNahadeModalHandler}
                                 className="search-input col-md-5 mx-auto mt-4 py-4 d-flex justify-content-between">

                                <span className="text-gray">
                                    نهاده
                                </span>

                                <PlusIcon fill={'gray'}/>

                            </div>


                            {
                                nahades?.nahades?.length > 0 ? (
                                    nahades?.nahades?.map((item) => (
                                        <div
                                            className={nahades?.nahades?.length / 2 === 0 ? "nahade-item col-md-5 mx-auto mt-4 d-flex justify-content-between" : "nahade-item col-md-5 mx-md-5 mt-4 d-flex justify-content-between"}>
                                            <div>
                                                {
                                                    nahades?.items?.map((nahadeItem) =>
                                                        nahadeItem.guid === item.nahade_item_guid ? nahadeItem.title : null
                                                    )
                                                }
                                                {' - '}
                                                {
                                                    item.meghdar
                                                }
                                                {' - '}
                                                {
                                                    vahede_meghdar_items.map((i) => i.key === item.vahede_meghdar ? i.title : null)
                                                }
                                            </div>
                                            <div onClick={() => clearNahade(item.id)}>
                                                <CloseIcon/>
                                            </div>
                                        </div>
                                    ))
                                ) : null
                            }

                            <hr style={{backgroundColor: 'transparent'}}/>
                            <Field
                                name="yaddasht"
                                type="text"
                                component="textarea" rows="4"
                                autoComplete="off"
                                // value={phone}
                                // onChange={(e) => setPhone(e.target.value)}
                                className="search-input col-md-5 mx-auto mt-4"
                                placeholder="یادداشت"
                            />


                            <div className="search-input file-uploader col-md-5 mx-auto mt-4" style={{height: 200}}>
                                {
                                    file.length < 1 ? (
                                        <div onClick={handleClick}>
                                            <input
                                                type="file"
                                                ref={hiddenFileInput}
                                                onChange={handleChange}
                                                style={{display: 'none'}}
                                            />
                                            <img src={folder} className='d-block mx-auto mt-2 mt-md-1'/>
                                            <h5 style={{fontWeight: '900'}} className="text-center mt-3">
                                                آپلود مدارک
                                            </h5>
                                            <p className="text-center text-gray mt-3">
                                                فایل های خود را انتخاب کنید
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <img src={folder} className='d-block mx-auto mt-2 mt-md-1'/>
                                            <div className="d-flex justify-content-between mt-3 px-4 mt-5">
                                                <div>
                                                    <span>
                                                        {file[0].name}
                                                    </span>
                                                </div>
                                                <div onClick={() => setFile([])}>
                                                    <CloseIcon/>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }

                            </div>


                            <div className="d-flex justify-content-center mt-3">
                                <button disabled={clicked} type="submit" className="btn-dark-blue mx-1 mt-4"
                                        onClick={() => {
                                            onFormSubmit(initialValues);

                                        }}>
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


            <AddNahadeModal show={showNahadeModal} onNahadeModalHandler={onNahadeModalHandler}/>


            <Modal show={showCalendar} centered onHide={onCalendarHandler}>
                <Calendar
                    persianDigits={true}
                    isGregorian={false}
                    timePicker={false}
                    className="border-0 shadow-sm my-5"
                    onChange={(value) => {
                        console.warn(value);
                        const month = value.jMonth() + 1;
                        set_tarikh_mohlat_anjam(value.jYear() + '-' + month + '-' + value.jDate())
                        setShowCalendar(false);
                        setDateError(false)
                    }}
                />
            </Modal>

        </div>
    );
};

export default AddActivityForm;
