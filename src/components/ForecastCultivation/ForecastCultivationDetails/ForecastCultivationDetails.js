import React, {useEffect, useState} from "react";
import propTypes from 'prop-types';

import {Modal} from "react-bootstrap";

import './ForecastCultivationDetails.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignRight, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";

ForecastCultivationDetails.propTypes = {
    show: propTypes.bool.isRequired,
    onCancel: propTypes.func.isRequired,
    data: propTypes.object.isRequired,
    selectedCultivation: propTypes.object.isRequired,
};

function ForecastCultivationDetails(props) {
    const {show, onCancel, data, selectedCultivation} = props;

    const years = selectedCultivation.sal.title.split('-');
    const sal = selectedCultivation.mah_bardasht.id >= 7 ? years[0] : years[1]

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {`پیش بینی تولید ${selectedCultivation.mahsul.title} ${sal}`}
                </Modal.Title>

                <button className='close-btn' onClick={onCancel}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </Modal.Header>

            <Modal.Body>
                <form>

                    <div className="row">

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    مجموع سطح کشت در ماه
                                </span>
                            <div className="input-group mb-3">
                                <input class="form-control"
                                       disabled={true}
                                       value={`${data.motaghayer_sathe_zire_kesht} هکتار`}
                                />
                            </div>

                            <div>
                                {`قطب تولید این محصول شهرستان های: ${data.shahrestan_mosharekat_kardan_dar_tolid?.map(item => {
                                    return (
                                        `${item} `
                                    )
                                })}`}
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    متوسط عملکرد مزرعه
                                </span>
                            <div className="input-group mb-3">
                                <input
                                    class="form-control"
                                    disabled={true}
                                    value={`${data.average_amalkard_request_user} تن/هکتار`}
                                />
                            </div>

                            <div>
                                {`متوسط عملکرد در شهرستان شما ${data.average_amalkard_state} تن / هکتار است`}
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    زمان عرضه محصول
                                </span>
                            <div className="input-group mb-3">
                                <input
                                    class="form-control"
                                    disabled={true}
                                    value={`${selectedCultivation.mah_bardasht.title} ${sal}`}
                                />
                            </div>
                        </div>

                        {/*<div className="col-md-12  col-sm-12 col-xs-12">*/}
                        {/*        <span className='input-title'>*/}
                        {/*            محل عرضه محصول*/}
                        {/*        </span>*/}
                        {/*    <div className="input-group mb-3">*/}
                        {/*        <input class="form-control"*/}
                        {/*               value={'انتخاب محل فروش محصول توسط کاربر'}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-md-12  col-sm-12 col-xs-12">*/}
                        {/*        <span className='input-title'>*/}
                        {/*            مقدار عرضه محصول*/}
                        {/*        </span>*/}
                        {/*    <div className="input-group mb-3">*/}
                        {/*        <input class="form-control"*/}
                        {/*               value={'تعیین مقدار فروش محصول توسط کاربر'}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    مقدار کل عرضه با بازار
                                </span>
                            <div className="input-group mb-3">
                                <input
                                    class="form-control"
                                    disabled={true}
                                    value={`${data.meghdar_arze_be_bazar} هزار تن`}
                                />
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    قیمت احتمالی محصول
                                </span>
                            <div className="input-group mb-3">
                                <input class="form-control"
                                       disabled={true}
                                       value={`${data.min_price} تا ${data.max_price} تومان`}
                                />
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    دقت پیش بینی
                                </span>
                            <div className="input-group mb-3">
                                <input class="form-control"
                                       disabled={true}
                                       value={`${data.accuracy} درصد`}
                                />
                            </div>

                            <div>
                                دقت پیش بینی با مشارکت بیشتر کشاورزان افزایش می یابد
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                                <span className='input-title'>
                                    وضعیت کشت محصول
                                </span>
                            <div className="input-group mb-3">
                                <input class="form-control"
                                       value={'۷۰ درصد کشت شده, ۲۰ درصد برنامه, ۱۰ درصد از بین رفته'}
                                />
                            </div>

                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                            <button className='btn-form btn btn-primary btn-md btn-block'>
                                تایید ضمنی پیش بینی
                            </button>

                            <div>
                                در صورتی که مشاهدات شما نیز با سمت و سوی پیش بینی سامانه همخوانی دارد آن را تایید کنید
                            </div>
                        </div>

                        <div className="col-md-12  col-sm-12 col-xs-12">
                            <button className='btn-form btn btn-primary btn-md btn-block'>
                                ارسال بازخورد خطای پیش بینی
                            </button>

                            <div>
                                در صورتی که مشاهدات شما ب پیش بینی سامانه مغایرت دارد آن را منعکس کنید
                            </div>
                        </div>

                    </div>

                </form>
            </Modal.Body>

        </Modal>
    );

}

export default ForecastCultivationDetails;
