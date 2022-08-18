import {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";
import BreadCrumbs from "./../../tools/breadcrumbs";
import "./../farm.css";

const EditFarm = () => {
    //   const [crumbs, setCrumbs] = useState(['مزرعه من', 'ویرایش مشخصات مزرعه']);
    const title = ["مزرعه من", "ویرایش مشخصات مزرعه"];

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
        <div className="page-container container-fluid">
            <BreadCrumbs crumbs={title}/>
            <hr/>

            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values, formikHelpers) => {
                    //   sendDataToAPI(values);
                    formikHelpers.resetForm();
                }}
            >
                <div className="">
                    <div className="">
                        <div className="">
                            <Form className="text-center">
                                {/* <label className="">
                  نام مزرعه
                </label> */}
                                <Field
                                    name="name"
                                    type="text"
                                    autoComplete="off"
                                    // value={firstName}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    className="col-md-5 search-input m-3"
                                    placeholder="نام مزرعه"
                                />
                                {/* <ErrorMessage
                  name="name"
                  component="span"
                  className="text-danger float-end small"
                /> */}

                                {/* <label className="">
                  مساحت (هکتار)
                </label> */}
                                <Field
                                    name="masahat"
                                    type="text"
                                    autoComplete="off"
                                    // value={lastName}
                                    // onChange={(e) => setLastName(e.target.value)}
                                    className="col-md-5 search-input m-3"
                                    placeholder="مساحت (هکتار)"
                                />
                                {/* <ErrorMessage
                  name="masahat"
                  component="div"
                  className="text-danger float-end small"
                /> */}

                                {/* <label className="">
                  آیا این مزرعه آبی است؟
                </label> */}
                                <Field
                                    name="abi"
                                    type="text"
                                    autoComplete="off"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="col-md-5 search-input m-3"
                                    placeholder="آیا این مزرعه آبی است؟"
                                />
                                {/* <ErrorMessage
                  name="abi"
                  component="div"
                  className="text-danger"
                /> */}

                                {/* <label className="">
                  مالکیت مزرعه
                </label> */}
                                <Field
                                    name="malekiat"
                                    type="text"
                                    autoComplete="off"
                                    // value={phone}
                                    // onChange={(e) => setPhone(e.target.value)}
                                    className="col-md-5 search-input m-3"
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
                                    className="col-md-5 search-input m-3"
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
                                    className="col-md-5 search-input m-3"
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
                    </div>
                </div>
            </Formik>
        </div>
    );
};

export default EditFarm;
