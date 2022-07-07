import React, {useEffect} from 'react';
import {Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {noe_faaliat_items, vaziat_items} from "../../../assets/strings/strings";
import {CalendarIcon, PlusIcon} from "../../../assets/icon";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {useDispatch} from "react-redux";

const AddNahadeModal = ({showNahadeModal, onNahadeModalHandler}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const
    validation = Yup.object().shape({
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
        farm: 'قیمت یا هزینه نهایی',
        cultivation: 'مقدار استفاده',
        noe_faaliat: 'نام و نوع نهاده',
    };


    useEffect(() => {

    }, [])


    return (
        <div>

            <Modal centered show={showNahadeModal} onHide={onNahadeModalHandler}>

                <Modal.Header>
                    <div className="d-flex justify-content-between p-2">
                        <h3>
                            نهاده
                        </h3>
                    </div>

                </Modal.Header>

                <Modal.Body>


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
                                        className="search-input mx-auto mt-4 pl-5 py-4"
                                        // onClick={(e) => setSelectedFarm(e.target.value)}
                                    >
                                        <option value="" label="نوع نهاده">
                                            نوع نهاده{" "}
                                        </option>
                                    </Field>


                                    <Field
                                        name="farm"
                                        validate={true}
                                        style={errors.farm && touched.farm ? {border: '1px solid #f00'} : {border: 'none'}}
                                        className="search-input mx-auto mt-4 pl-5 py-4"/>


                                    <Field
                                        name="cultivation"
                                        validate={true}
                                        style={errors.farm && touched.farm ? {border: '1px solid #f00'} : {border: 'none'}}
                                        className="search-input mx-auto mt-4 pl-5 py-4"/>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn-dark-blue mx-1 mt-4">
                                            افزودن
                                        </button>
                                        <button
                                            onClick={onNahadeModalHandler}
                                            className="btn-light-gray mx-1 mt-4 "
                                        >
                                            لغو
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>


                </Modal.Body>

            </Modal>

        </div>
    );
};

export default AddNahadeModal;
