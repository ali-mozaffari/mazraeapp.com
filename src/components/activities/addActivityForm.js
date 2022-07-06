import React from 'react';
import * as Yup from "yup";
import BreadCrumbs from "../tools/breadcrumbs";
import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const AddActivityForm = () => {
    const title = ["مزرعه من", "ویرایش مشخصات مزرعه"];
    const farms = useSelector((state) => state.farmlist);

    const validation = Yup.object().shape({
        name: Yup.string()
            //   .max(15, "The max size character is 15")
            .required("الزامی"),
        masahat: Yup.string()
            //   .max(15, "The max size character is 15")
            .required("الزامی"),
        abi: Yup.string().required("الزامی"),
        malekiat: Yup.string().required("الزامی"),
        meghias: Yup.string().required("الزامی"),
        price: Yup.string().required("الزامی"),
    });

    const initialValues = {
        // firstName: "",
        // lastName: "",
        // email: "",
        // phone: "",
    };

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
                <div className="container">
                    <Form className="row">
                        <select
                            name="colors"
                            className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                        >
                            <option value="" label="نام مزرعه" className="m-3">
                                نام مزرعه{" "}
                            </option>
                            {
                                farms?.postList?.map((item) => (
                                    <option value={item.name} label={item.name} className="m-3">
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>

                        <select
                            name="colors"
                            className="search-input col-md-5 mx-auto mt-4 pl-5 py-4"
                        >
                            <option value="" label="محصول" className="m-3">
                                نام محصول{" "}
                            </option>
                            {
                                farms?.postList?.map((item) => (
                                    <span>
                                        {item.name}
                                    </span>
                                ))
                            }
                        </select>
                        <Field
                            name="name"
                            type="text"
                            autoComplete="off"
                            // value={firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                            className="search-input col-md-5 mx-auto mt-4 py-4"
                            placeholder="نام مزرعه"
                        />
                        <Field
                            name="masahat"
                            type="text"
                            autoComplete="off"
                            // value={lastName}
                            // onChange={(e) => setLastName(e.target.value)}
                            className="search-input col-md-5 mx-auto mt-4"
                            placeholder="مساحت (هکتار)"
                        />
                        <Field
                            name="abi"
                            type="text"
                            autoComplete="off"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="search-input col-md-5 mx-auto mt-4"
                            placeholder="آیا این مزرعه آبی است؟"
                        />
                        <Field
                            name="malekiat"
                            type="text"
                            autoComplete="off"
                            // value={phone}
                            // onChange={(e) => setPhone(e.target.value)}
                            className="search-input col-md-5 mx-auto mt-4"
                            placeholder="مالکیت مزرعه"
                        />
                        {/* <ErrorMessage
                  name="malekiat"
                  component="div"
                  className="text-danger"
                /> */}

                        {/* <label className="">
                  مقیاس
                </label> */}
                        <Field
                            name="meghias"
                            type="text"
                            autoComplete="off"
                            // value={phone}
                            // onChange={(e) => setPhone(e.target.value)}
                            className="search-input col-md-5 mx-auto mt-4"
                            placeholder="مقیاس"
                        />
                        {/* <ErrorMessage
                  name="meghias"
                  component="div"
                  className="text-danger"
                /> */}

                        {/* <label className="">
                 ارزش مزرعه (تومان)
                </label> */}
                        <Field
                            name="price"
                            type="text"
                            autoComplete="off"
                            // value={phone}
                            // onChange={(e) => setPhone(e.target.value)}
                            className="col-md-5 search-input mx-auto mt-4"
                            placeholder="ارزش مزرعه (تومان)"
                        />
                        {/* <ErrorMessage
                  name="price"
                  component="div"
                  className="text-danger"
                /> */}

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
            </Formik>
        </div>
    );
};

export default AddActivityForm;
