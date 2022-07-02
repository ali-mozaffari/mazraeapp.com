import React, {useEffect, useState} from "react";
import propTypes from 'prop-types';

import {Modal} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import {Alert} from 'rsuite';

import './SendInvitationLinkModal.css';
import * as Yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignRight, faInfoCircle, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Formik} from "formik";
import AxiosCustom from "../../../../../assets/AxiosCutom";
import useAuth from "../../../../../hooks/useAuth";

SendInvitationLinkModal.propTypes = {
    show: propTypes.bool.isRequired,
    onCancel: propTypes.func.isRequired,
};

function SendInvitationLinkModal(props) {
    const {show, onCancel} = props;
    const auth = useAuth();
    const [loading, setLoading] = useState(false)
    const [states, setStates] = useState([])

    const [initialValues, setInitialValues] = useState({
        farmer_name: '',
        state: '',
        // state_id: '',
        phone: '',
    })

    // useEffect(() => {
    //     getStates()
    // }, [])

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {'دعوت از دیگر کشاورزان'}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Formik
                    initialValues={{
                        farmer_name: initialValues.farmer_name,
                        state: initialValues.state,
                        // state_id: initialValues.state_id,
                        phone: initialValues.phone,
                    }}
                    onSubmit={async values => {
                        console.log(values)
                        sendData(values)
                    }}
                    validationSchema={Yup.object().shape({
                        farmer_name: Yup.string()
                            .required("لطفا نام را وارد کنید"),
                        state: Yup.string()
                            .required("لطفا استان را وارد کنید"),
                        // state_id: Yup.string()
                        //     .required("لطفا استان را انتخاب کنید"),
                        phone: Yup.string()
                            .required("لطفا شماره تماس را وارد کنید"),
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue
                        } = props;

                        return (
                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-12  col-sm-12 col-xs-12">

                                        <span className='input-title'>
                                        نام کشاورز
                                        </span>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">

                                            <span className="input-group-text" id="basic-addon1">

                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                            </span>
                                            </div>
                                            <input
                                                id="farmer_name"
                                                placeholder="نام کشاورز"
                                                type="text"
                                                value={values.farmer_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.farmer_name && touched.farmer_name
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                        </div>

                                        <div className="warning">{errors.farmer_name && touched.farmer_name && (
                                            <span> {errors.farmer_name}</span>
                                        )}
                                        </div>
                                    </div>

                                    <div className="col-md-12  col-sm-12 col-xs-12">

                                        <span className='input-title'>
                                        استان
                                        </span>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">

                                            <span className="input-group-text" id="basic-addon1">

                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                            </span>
                                            </div>
                                            <input
                                                id="state"
                                                placeholder="استان"
                                                type="text"
                                                value={values.state}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.state && touched.state
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                        </div>

                                        <div className="warning">{errors.state && touched.state && (
                                            <span> {errors.state}</span>
                                        )}
                                        </div>
                                    </div>

                                    {/*<div className="col-md-12  col-sm-12 col-xs-12">*/}

                                    {/*    <span className='input-title'>*/}
                                    {/*    استان*/}
                                    {/*    </span>*/}
                                    {/*    <div className="input-group mb-3">*/}
                                    {/*        <div className="input-group-append">*/}
                                    {/*        </div>*/}
                                    {/*        <select id="state_id"*/}
                                    {/*                onChange={handleChange}*/}
                                    {/*                onBlur={handleBlur}*/}
                                    {/*                value={values.state_id}*/}
                                    {/*                className={*/}
                                    {/*                    errors.state_id && touched.state_id*/}
                                    {/*                        ? "text-input custom-select f error"*/}
                                    {/*                        : "text-input custom-select "*/}
                                    {/*                }>*/}
                                    {/*            <option className="select-option"*/}
                                    {/*                    value={''}>*/}
                                    {/*                {'استان'}*/}
                                    {/*            </option>*/}

                                    {/*            {states.map(item => {*/}
                                    {/*                return (*/}
                                    {/*                    <option className="select-option"*/}
                                    {/*                            key={item.id}*/}
                                    {/*                            value={item.id}>*/}
                                    {/*                        {item.name}*/}
                                    {/*                    </option>*/}
                                    {/*                )*/}
                                    {/*            })}*/}

                                    {/*        </select>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="warning">{errors.state_id && touched.state_id && (*/}
                                    {/*        <span> {errors.state_id}</span>*/}
                                    {/*    )}*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="col-md-12  col-sm-12 col-xs-12">

                                        <span className='input-title'>
                                        شماره تماس
                                        </span>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">

                                            <span className="input-group-text" id="basic-addon1">

                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                            </span>
                                            </div>
                                            <input
                                                id="phone"
                                                placeholder="شماره تماس"
                                                type="number"
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.phone && touched.phone
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                        </div>

                                        <div className="warning">{errors.phone && touched.phone && (
                                            <span> {errors.phone}</span>
                                        )}
                                        </div>
                                    </div>

                                    <button className="btn btn-primary btn-md btn-block pos-rel" type="submit">
                                        ارسال لینک دعوت
                                        <FontAwesomeIcon icon={faAlignRight} className="det-icon"/>
                                    </button>

                                    <button className="btn btn-primary btn-md btn-block"
                                            type="button"
                                            onClick={() => onCancel()}>
                                        لغو
                                    </button>

                                </div>

                            </form>
                        )
                            ;
                    }}
                </Formik>
            </Modal.Body>

        </Modal>
    );

    // function getStates() {
    //     setLoading(true)
    //
    //     const options = {
    //         method: 'GET',
    //         url: 'base/state',
    //     };
    //
    //     AxiosCustom(options).then(res => {
    //         console.log(res);
    //
    //         setStates(res.data.results)
    //         setLoading(false)
    //
    //     }).catch(err => {
    //         console.log(err.response);
    //         if (err.response) {
    //             window.alert('مشکلی وجود دارد')
    //         }
    //         setLoading(false)
    //
    //     });
    // }

    function sendData(values) {
        let fd = {};

        for (const key in values) {
            if (values.hasOwnProperty(key) && values[key]) {
                fd[key] = values[key]
            }
        }

        const options = {
            method: 'POST',
            url: 'farm/invitation',
            headers: {
                Authorization: auth.token
            },
            data: fd,
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            onCancel()
            Alert.error('سامانه مزرعه: \n با موفقیت ارسال شد', 2000);
            // window.alert('سامانه مزرعه: \n با موفقیت ارسال شد')
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }
}

export default SendInvitationLinkModal;
