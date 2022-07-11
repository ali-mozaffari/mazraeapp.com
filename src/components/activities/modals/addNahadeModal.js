import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import './addNahadeModalCss.css';
import * as Yup from "yup"
import {Field, Formik} from "formik";
import {vahede_masahat_items, vahede_meghdar_items} from '../../../assets/strings/strings'
import {useDispatch, useSelector} from "react-redux";
import {addNahadeToList, getNahadeItemsList} from "../../../redux/slice/activities/nahade";


function AddNahadeModal({show, onNahadeModalHandler, values}) {

    const dispatch = useDispatch();
    const nahadeTools = useSelector((state) => state.nahade)
    const [nahadeItems, setNahadeItems] = useState([]);
    const [initialValues, setInitialValues] = useState(
        values
            ? values
            : {
                nahade_item: '',
                meghdar: '',
                // vahede_meghdar: type === 'abyari' ? 'liter_hektar' : 'kg_hektar',
                vahede_meghdar: 'kg',
                vahede_masahat: 'hektar',
                name_nahade: '',
                gheimat: '',
            })


    useEffect(() => {
        dispatch(getNahadeItemsList())
    }, [])


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    const onConfirm = (res) => {
        console.warn(res)
        dispatch(addNahadeToList(res))
    }

    return (
        <Modal
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {'افزودن نهاده'}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Formik
                    initialValues={{
                        nahade_item: initialValues.nahade_item,
                        meghdar: initialValues.meghdar,
                        vahede_meghdar: initialValues.vahede_meghdar,
                        vahede_masahat: initialValues.vahede_masahat,
                        name_nahade: initialValues.name_nahade,
                        gheimat: initialValues.gheimat,
                    }}
                    onSubmit={async values => {
                        const res = {
                            'id': getRandomInt(100000),
                            'hazine_nahade': values.gheimat,
                            'vahede_meghdar': values.vahede_meghdar,
                            'vahede_masahat': values.vahede_masahat,
                            'name_nahade': values.name_nahade,
                            'meghdar': values.meghdar,
                            'nahade_item_guid': values.nahade_item
                        }
                        onConfirm(res)
                        onNahadeModalHandler()
                    }}
                    validationSchema={Yup.object().shape({
                        nahade_item: Yup.string()
                            .required("لطفا نهاده خود را انتخاب کنید"),
                        meghdar: Yup.string()
                            .required("لطفا مقدار نهاده خود را انتخاب کنید"),
                        name_nahade: Yup.string()
                            .required("لطفا نام و نوع نهاده خود را مشخص کنید"),
                        gheimat: Yup.string()
                            .required("لطفا قیمت یا هزینه نهاده خود را وارد کنید"),
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
                            <form onSubmit={handleSubmit} className="py-4 px-2">

                                <div className="row">

                                    <div className="col-12">

                                        <Field
                                            as="select"
                                            name="nahade_item"
                                            validate={true}
                                            onBlur={handleBlur}
                                            value={values.nahade_item}
                                            className={"w-100 search-input mt-4 pl-5 py-4"}
                                            style={errors.farm && touched.farm ? {border: '1px solid #f00'} : {border: 'none'}}
                                            onChange={handleChange}
                                        >
                                            <option value="" label="نوع نهاده">
                                                نوع نهاده{" "}
                                            </option>

                                            {
                                                nahadeTools?.items.map((item) =>
                                                    (
                                                        <option value={item.guid} label={item.title}>
                                                            {item.title}
                                                        </option>
                                                    ))
                                            }
                                        </Field>


                                        {/*<div className="warning">{errors.nahade_item && touched.nahade_item && (*/}
                                        {/*    <span> {errors.nahade_item}</span>*/}
                                        {/*)}*/}
                                        {/*</div>*/}
                                    </div>

                                    <div className="col-12">

                                        <div className="input-group justify-content-center">
                                            <Field
                                                id="meghdar"
                                                name="meghdar"
                                                placeholder="مقدار استفاده"
                                                type="number"
                                                value={values.meghdar}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{borderRadius: '15px'}}
                                                className="w-100 search-input mt-4 py-4"
                                            />
                                            <select id="vahede_meghdar"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.vahede_meghdar}
                                                    style={{
                                                        border: '1px solid #2c699a',
                                                        borderRadius: 10,
                                                        color: '#2c699a'
                                                    }}
                                                    className="mx-1 p-2 mt-2">
                                                {vahede_meghdar_items.map(item => {
                                                    return (
                                                        <option className="select-option"
                                                                key={item.key}
                                                                value={item.key}>
                                                            {item.title}
                                                        </option>
                                                    )
                                                })}

                                            </select>

                                            <select id="vahede_masahat"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.vahede_masahat}
                                                    style={{
                                                        border: '1px solid #2c699a',
                                                        borderRadius: 10,
                                                        color: '#2c699a'
                                                    }}
                                                    className="mx-1 p-2 mt-2">
                                                {vahede_masahat_items.map(item => {
                                                    return (
                                                        <option className="select-option"
                                                                key={item.key}
                                                                value={item.key}>
                                                            {item.title}
                                                        </option>
                                                    )
                                                })}

                                            </select>
                                        </div>

                                        <hr/>

                                        {/*<div className="warning">{errors.meghdar && touched.meghdar && (*/}
                                        {/*    <span> {errors.meghdar}</span>*/}
                                        {/*)}*/}
                                        {/*</div>*/}
                                    </div>

                                    <div className="col-12 ">

                                        <Field
                                            id="gheimat"
                                            type="number"
                                            placeholder="قیمت یا هزینه نهاده (تومان)"
                                            thousandSeparator={true}
                                            onBlur={handleBlur}
                                            value={values.gheimat}
                                            onValueChange={(event) => {
                                                setFieldValue('gheimat', event.value)
                                            }}
                                            className={
                                                errors['gheimat'] && touched['gheimat']
                                                    ? "text-input form-control error w-100 search-input w-100 mt-4 pl-5 py-4"
                                                    : "text-input form-control w-100 search-input w-100 mt-4 pl-5 py-4"
                                            }
                                        />

                                        {/*<div className="warning">{errors.gheimat && touched.gheimat && (*/}
                                        {/*    <span> {errors.gheimat}</span>*/}
                                        {/*)}*/}
                                        {/*</div>*/}
                                    </div>

                                    <div className="col-12">
                                        <Field
                                            id="name_nahade"
                                            placeholder="نام و نوع نهاده"
                                            type="text"
                                            name="name_nahade"
                                            value={values.name_nahade}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.name_nahade && touched.name_nahade
                                                    ? "text-input form-control error search-input w-100 mt-4 pl-5 py-4"
                                                    : "text-input form-control search-input w-100 mt-4 pl-5 py-4"
                                            }
                                        />

                                        {/*<div className="warning">{errors.name_nahade && touched.name_nahade && (*/}
                                        {/*    <span> {errors.name_nahade}</span>*/}
                                        {/*)}*/}
                                        {/*</div>*/}
                                    </div>

                                    <div className="col-12 d-flex justify-content-center mt-3">
                                        <div className="mx-2">
                                            <button className="btn btn-light-green" type="submit">
                                                اضافه کردن
                                            </button>
                                        </div>
                                        <div className="mx-2 d-flex align-items-center">
                                            <button className="btn btn-md btn-block"
                                                    type="button"
                                                    onClick={() => onNahadeModalHandler()}>
                                                لغو
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        );
                    }}
                </Formik>
            </Modal.Body>

        </Modal>
    );
}

export default AddNahadeModal;

