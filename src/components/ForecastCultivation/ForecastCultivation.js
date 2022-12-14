import React, {useEffect, useState} from "react";

import {withRouter, useHistory} from 'react-router-dom';
import * as Yup from "yup";
import {Formik} from "formik";
import {Alert} from 'rsuite';

import './ForecastCultivation.css';
import AxiosCustom from "../../../../assets/AxiosCutom";
import FullScreenLoading from "../../../../components/FullScreenLoading/FullScreenLoading";
import useAuth from "../../../../hooks/useAuth";
import ForecastCultivationDetails from "./ForecastCultivationDetails/ForecastCultivationDetails";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignRight, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import FarmHistoryAddModal from "../Farm/EditFarm/FarmHistoryAddModal/FarmHistoryAddModal";
import SendInvitationLinkModal from "./SendInvitationLinkModal/SendInvitationLinkModal";
import ForecastCultivationFarmItem from "./ForecastCultivationFarmItem/ForecastCultivationFarmItem";
import ForecastCultivationProgressItem from "./ForecastCultivationProgressItem/ForecastCultivationProgressItem";
import {element} from "prop-types";
import {CONST} from "../../../../assets/Const";

function ForecastCultivation() {
    const auth = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [data, setData] = useState()
    const [cultivations, setCultivations] = useState([]);
    const [mahsul, setMahsul] = useState([]);
    const [month, setMonth] = useState([]);
    const [places, setPlaces] = useState([]);
    const [selectedCultivation, setSelectedCultivation] = useState();
    const [showInvitationModal, setShowInvitationModal] = useState(false);
    const [step, setStep] = useState(1)
    const [farms, setFarms] = useState([])
    const [years, setYears] = useState([]);
    const [isLevel2Active, setIsLevel2Active] = useState(false);
    const [initialValues, setInitialValues] = useState(
        {
            // mahsul_id: '',
            // mah_bardasht: '',
            mahal: '',
            meghdar: '',
            cultivation_id: '',
        })

    useEffect(() => {
        getYear();
        getPlace()
    }, [])

    return (
        <div className='add-farm'>
            <h2>
                ?????? ???????? ?????????? ????????????
            </h2>

            {loading && (
                <FullScreenLoading/>
            )}

            <div className='buttons-section' style={{'margin-top': '50px'}}>
                <button
                    className={`${step === 2 ? 'active-section' : 'default-section'}`}
                    onClick={() => {
                        setStep(2)
                        getCultivation()
                    }}
                    disabled={!isLevel2Active}>
                    ?????????? ??????
                </button>
                <button className={`${step === 1 ? 'active-section' : 'default-section'}`} onClick={() => setStep(1)}>
                    ?????????? ??????
                </button>
            </div>

            {/*<h4>*/}
            {/*    ?????????? ?????? ?????????? ??????????*/}
            {/*</h4>*/}

            {step === 1 && (
                <div>
                    <p className="topcontent_paragraph">
                        ???????? ???????? ?????????? ?????? ?????? ???????? ?????????????? ?????? ???????? ?????????? ?????????? ???????? ???? ?????? ???? ?????????? ?????????? ?????? ??????
                        ????????
                        ???????? ??????.
                    </p>

                    <ForecastCultivationProgressItem
                        all
                        title={'?????????? ?????????? ?????????? ??????'}
                        data={calculateFarmsProgressData(farms)}
                    />

                    {farms.map(item => {
                        return (
                            <ForecastCultivationFarmItem
                                data={item}
                                years={years}
                                onAyeshChange={() => getFarms()}
                            />
                        )
                    })}

                    {/*{cultivations.slice(0, 3).map(item => {*/}
                    {/*    return (*/}
                    {/*        <div style={{display: 'inline'}}>*/}
                    {/*            <span>{` , ?????????? ${item.farm?.name}`}</span>*/}
                    {/*            <span>{` , ${item.mahsul?.title} ${item.sal?.title}`}</span>*/}
                    {/*            <span>{` , ${item.sathe_zire_kesht} ??????????`}</span>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})}*/}

                    {/*{cultivations?.length > 3 && (*/}
                    {/*    <span>?? ????????</span>*/}
                    {/*)}*/}

                    {/*<span> , ?????????? ??</span><span> , ???????? ?????????? ????????</span><span> , ?????? ??????????</span>*/}
                    {/*<span> , ?????????? ??</span><span> , ???????? ?????????? ????????</span><span> , ?????? ??????????</span>*/}
                    {/*<span> , ?????????? ??</span><span> , ???????? ?????????? ????????</span><span> , ???? ??????????</span>*/}
                </div>
            )}

            {step === 2 && (
                <div>
                    <ForecastCultivationProgressItem
                        all
                        title={'?????????? ?????????? ?????????? ??????'}
                        data={calculateFarmsProgressData(farms)}
                    />

                    <br/>
                    <br/>

                    <div className="topdiv">

                        {/*<button className='btn btn-primary btn-md btn-block'*/}
                        {/*        onClick={() => history.push('add-new-cultivation')}>*/}
                        {/*    ?????? ??????????????*/}
                        {/*</button>*/}

                        <Formik
                            initialValues={{
                                // mah_bardasht: initialValues.mah_bardasht,
                                // mahsul_id: initialValues.mahsul_id,
                                mahal: initialValues.mahal,
                                meghdar: initialValues.meghdar,
                                cultivation_id: initialValues.cultivation_id,
                            }}
                            onSubmit={async values => {
                                console.log(values)
                                setSelectedCultivation(cultivations.filter(el => el.id == values.cultivation_id)[0])
                                calculate(values)
                            }}
                            validationSchema={Yup.object().shape({
                                // mahsul_id: Yup.string()
                                //     .required("???????? ?????????? ?????? ???? ???????????? ????????"),
                                // mah_bardasht: Yup.string()
                                //     .required("???????? ?????? ???????????? ???? ???????????? ????????"),
                                mahal: Yup.string()
                                    .required("???????? ?????? ???????? ?????????? ???? ???????????? ????????"),
                                meghdar: Yup.string()
                                    .required("???????? ?????????? ???????? ?????????? ???? ???????????? ????????"),
                                cultivation_id: Yup.string()
                                    .required("???????? ?????? ?????? ???? ???????????? ????????"),
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

                                            <div className="col-md-6  col-sm-12 col-xs-12">

                                        <span className='input-title'>
                                            ???????????? ??????
                                        </span>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                    </div>
                                                    <select id="cultivation_id"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.cultivation_id}
                                                            className={
                                                                errors.cultivation_id && touched.cultivation_id
                                                                    ? "text-input custom-select f error"
                                                                    : "text-input custom-select "
                                                            }>
                                                        <option className="select-option"
                                                                value={''}>
                                                            {'???????????? ??????'}
                                                        </option>

                                                        {cultivations.map(item => {
                                                            return (
                                                                <option className="select-option"
                                                                        key={item.id}
                                                                        value={item.id}>
                                                                    {item.mahsul?.title}
                                                                </option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>

                                                <div className="warning">{errors.mahsul_id && touched.mahsul_id && (
                                                    <span> {errors.mahsul_id}</span>
                                                )}
                                                </div>
                                            </div>

                                            <div className="col-md-6   col-sm-12 col-xs-12">

                                        <span className='input-title'>
                                            ?????? ???????? ?????????? ????
                                        </span>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-append">
                                                    </div>
                                                    <select id="mahal"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.mahal}
                                                            className={
                                                                errors.mahal && touched.mahal
                                                                    ? "text-input custom-select f error"
                                                                    : "text-input custom-select "
                                                            }>
                                                        <option className="select-option"
                                                                value={''}>
                                                            {'?????????? ?????? ???? ???? ?????? ???????? ???? ??????????'}
                                                        </option>

                                                        {places.map(item => {
                                                            return (
                                                                <option className="select-option"
                                                                        key={item.id}
                                                                        value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>

                                                <div className="warning">{errors.mahal && touched.mahal && (
                                                    <span> {errors.mahal}</span>
                                                )}
                                                </div>
                                            </div>

                                            <div className="col-md-6  col-sm-12 col-xs-12">
                                        <span className='input-title'>
                                            ?????????? ???????? ??????????
                                        </span>
                                                <div className="input-group mb-3">
                                                    <input
                                                        id="meghdar"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.meghdar}
                                                        type={'number'}
                                                        className="form-control"
                                                        placeholder={'?????? ???????? ???? ?????????? ?????? ???? ???? ?????????? ???????? ???? ??????????'}
                                                    />
                                                </div>

                                                <div className="warning">{errors.meghdar && touched.meghdar && (
                                                    <span> {errors.meghdar}</span>
                                                )}
                                                </div>
                                            </div>
                                            <div className="col-md-12  col-sm-12 col-xs-12">

                                                <button className="btn btn-primary btn-md btn-block pos-rel"
                                                        type="submit">
                                                    ????????????
                                                    <FontAwesomeIcon icon={faAlignRight} className="det-icon"/>
                                                </button>
                                            </div>


                                        </div>

                                    </form>
                                );
                            }}
                        </Formik>

                        {data && (
                            <div>
                                <div>
                                    <div className=" row bottomdiv">

                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                            <div className="row">
                                                <div className="col-6 ">
                                                    <span>???????? ?????????? ?????? ?????? ??????</span>
                                                </div>
                                                <div className="col-6 ">
                                            <span
                                                className={data.percent_taghir_zire_kesht > 0 ? 'green-span' : 'red-span'}>
                                                {` ${Math.abs(data.percent_taghir_zire_kesht)} ???????? ${data.percent_taghir_zire_kesht > 0 ? '????????????' : '????????'}`}
                                            </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 ">
                                                    <span>???????? ?????????? ?????????? ??????????</span>
                                                </div>
                                                <div className="col-6 ">
                                            <span
                                                className={data.percent_taghir_tolid_jamee > 0 ? 'green-span' : 'red-span'}>
                                                {` ${Math.abs(data.percent_taghir_tolid_jamee)} ???????? ${data.percent_taghir_tolid_jamee > 0 ? '????????????' : '????????'}`}
                                            </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 ">
                                                    <span>???????? ?????????? ???????? ???? ???????????? ????????</span>
                                                </div>
                                                <div className="col-6 ">
                                            <span
                                                className={data.percent_taghir_gheymat_ba_ehtesab_tavarom > 0 ? 'green-span' : 'red-span'}>
                                                {` ${Math.abs(data.percent_taghir_gheymat_ba_ehtesab_tavarom)} ???????? ${data.percent_taghir_gheymat_ba_ehtesab_tavarom > 0 ? '????????????' : '????????'}`}
                                            </span>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6 ">
                                                    ?????? ?????? ????????
                                                </div>
                                                <div className="col-6 ">
                                                    <span className="yellow-span"> {`${data.accuracy} ????????`} </span>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6 ">
                                                    <span> ???? ???????????? </span>
                                                </div>
                                                <div className="col-6 ">
                                            <span
                                                className="yellow-span">{`${data.tedad_mosharekat} ???????? ??????????`}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                        </div>


                                        <p>
                                            ?????? ?????? ???????? ???????????? ???????? ???????? ?????????????? ?????? ???????? ?????????????? ?????? ?????????? ?????????????? ??????
                                            ??????.
                                            ???????????? ???????????? ???????????????? ???? ?????????? ?????????????? ?????? ?????? ?????????? ???? ?????? ?????????? ????
                                            ????????????.
                                            ????????
                                            ???? ?????????????? ?????????? ?????? ???????? ???????????? ?? ???? ?????????????? ?????????????? ?????? ?????????????? ???????? ????????
                                            ??
                                            ????????????
                                            ?? ???????????????? ???????????? ?????????? ?????? ?????? ?????? ???? ?????????? ??????????.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <button className='btn btn-primary btn-md btn-block'
                                            onClick={() => setIsModal(true)}>
                                        ???????????? ???????????? ?????? ????????
                                    </button>

                                    <button
                                        className='btn btn-primary btn-md btn-block'
                                        onClick={() => setShowInvitationModal(true)}>
                                        ???????? ???? ???????? ????????????????
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {data && step === 2 && (
                <ForecastCultivationDetails
                    show={isModal}
                    data={data}
                    selectedCultivation={selectedCultivation}
                    onCancel={() => setIsModal(false)}
                />
            )}

            <SendInvitationLinkModal
                show={showInvitationModal}
                onCancel={() => setShowInvitationModal(false)}
            />
        </div>
    )

    function getFarms() {
        setLoading(true)
        setFarms([])

        const options = {
            method: 'GET',
            url: 'farm/farm?owner=true',
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setFarms(res.data)
            checkAllYearCultivation()
            setLoading(false)
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
            setLoading(false)
        });
    }

    function getYear() {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'farm/year',
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setYears(res.data)
            getFarms()
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }

    function getCultivation() {
        setLoading(true)

        const options = {
            method: 'GET',
            url: `farm/cultivation?owner=true&sal=${CONST.LAST_YEAR_TITLE}`,
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setCultivations(res.data)
            setLoading(false)

        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
            setLoading(false)
        });
    }

    function getMahsul() {
        const options = {
            method: 'GET',
            url: 'farm/mahsul',
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setMahsul(res.data)
            getMonth()
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }

    function getMonth() {
        const options = {
            method: 'GET',
            url: 'farm/month',
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setMonth(res.data)
            getPlace()
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }

    function getPlace() {
        const options = {
            method: 'GET',
            url: 'base/place',
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);
        AxiosCustom(options).then(res => {
            console.log(res);
            setPlaces(res.data.results)
            // setLoading(false)

        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }

    function calculate(values) {

        setLoading(true)

        let fd = {};

        for (const key in values) {
            if (values.hasOwnProperty(key) && values[key]) {
                fd[key] = values[key]
            }
        }

        const options = {
            method: 'POST',
            url: 'farm/calculations',
            headers: {
                Authorization: auth.token
            },
            data: fd,
        };

        AxiosCustom(options).then(res => {
            console.log(res);
            setLoading(false)
            if (res.data.error) {
                Alert.error(res.data.error, 6000);
                // window.alert(res.data.error)
                if (res.data.year_id) {
                    history.push(`/add-new-cultivation/${res.data.year_id}`)
                }
            } else {
                setData(res.data)
            }
        }).catch(err => {
            console.log(err.response);
            setLoading(false)
        });
    }

    function calculateFarmsProgressData(farms) {
        let data = {
            masahat: 0,
            years: [],
            mahsuls: []
        }
        farms.forEach(item => {
            data.masahat = data.masahat + item.masahat
            item.cultivation_list.forEach(element => {

                if (element.sal.title === CONST.LAST_YEAR_TITLE && element.level === 1) {
                    if (!data.years.includes(element.sal?.title)) {
                        data.years.push(element.sal?.title)
                    }

                    let indexOfExist
                    data.mahsuls.forEach((el, index) => {
                        if (el.product_id === element.mahsul.product_id) {
                            indexOfExist = index
                        }
                    })

                    if (typeof indexOfExist === 'number') {
                        data.mahsuls[indexOfExist] = {
                            ...data.mahsuls[indexOfExist],
                            masahat: data.mahsuls[indexOfExist].masahat + parseFloat(element.sathe_zire_kesht)
                        }
                    } else {
                        data.mahsuls.push({
                            ...element.mahsul,
                            masahat: parseFloat(element.sathe_zire_kesht)
                        })
                    }
                }
            })
        })

        return data
    }

    function checkAllYearCultivation() {
        const options = {
            method: 'PATCH',
            url: `farm/cultivation`,
            headers: {
                Authorization: auth.token
            },
        };

        console.log(options);

        AxiosCustom(options).then(res => {
            console.log(res);
            setIsLevel2Active(res.data.status)
        }).catch(err => {
            console.log(err.response);
            console.log(err.response);
        });
    }

}

export default withRouter(ForecastCultivation);
