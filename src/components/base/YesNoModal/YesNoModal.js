import React from "react";
import propTypes from 'prop-types';
import {Modal, Button} from "react-bootstrap";
import './YesNoModal.css';
import {faCameraRetro, faCrosshairs, faTimes, faDrawPolygon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

YesNoModal.propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    show: propTypes.bool.isRequired,
    no_press: propTypes.func.isRequired,
    yes_press: propTypes.func,
    isHelp: propTypes.bool,
    isAddFarm: propTypes.bool,
    isHelpInvitation: propTypes.bool,
};

function YesNoModal(props) {
    const {title, content, show, no_press, yes_press, isHelp, isAddFarm, isHelpInvitation} = props

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {content}
                </p>

                {isHelpInvitation && (
                    <ul class='help-list'>
                        <li>
                            حساب کاربری برنزی با اعتبار یک میلیون تومان: خدمات رایگان یکساله تا سقف پنج میلیون تومان در سال
                        </li>
                        <li>
                            حساب کاربری نقره ای با اعتبار پنج میلیون تومان: خدمات رایگان یکساله تا سقف پانزده میلیون تومان در سال
                        </li>
                        <li>
                            حساب کاربری طلایی با اعتبار ده میلیون تومان: خدمات رایگان یکساله تا سقف سی میلیون تومان در سال
                        </li>
                    </ul>
                )}

                {isHelp && !isAddFarm && (
                    <ul class='help-list'>
                        <li>
                            ۱ - بر روی بخش کشت نشده مزرعه کلیک کنید.
                        </li>
                        <li>
                            ۲ - با حذف یا جابجایی نقاط دور مزرعه، مختصات کشت را تعیین کنید.
                        </li>
                        <li>
                            ۳ - ثبت نقاط بیشتر مختصات کشت بعد از نقطه پایانی قرمز رنگ امکانپذیر است.
                        </li>
                        <li>
                            ۴ - با فشردن دکمه ثبت مختصات کشت خود را به ثبت کنید.
                        </li>
                        <li>
                            شما‌می‌توانید مختصات کشت را به صورت یکباره با دکمه <FontAwesomeIcon icon={faTimes}/> یا بصورت تکی با کلیک بر روی آن حذف
                            کنید.
                        </li>
                    </ul>
                )}

                {isHelp && isAddFarm && (
                    <ul className='help-list'>
                        <li>
                            - مزرعه خود را روی نقشه پیدا کنید (می توانید جستجو کنید یا با دکمه لوکیشن <FontAwesomeIcon icon={faCrosshairs}/> مکان کنونی خود را ببینید)
                        </li>
                        <li>
                            - روی دکمه <FontAwesomeIcon icon={faDrawPolygon}/> کلیک کنید تا امکان رسم مختصات فعال شود
                        </li>
                        <li>
                            - مرزهای مزرعه خود را با کشیدن یک چند ضلعی بسته مشخص کنید
                        </li>
                        <li>
                            - پس از تعیین مختصات دکمه <FontAwesomeIcon icon={faTimes}/>  را فشار دهید
                        </li>
                        <li>
                            - نام مزرعه خود را بنویسید و در آخر روی دکمه افزودن کلیک کنید
                        </li>
                        <li>
                            توجه: شما میتوانید نقاط را با کلیک مجدد حذف یا مکان آن را در نقشه جابجا کنید
                        </li>
                    </ul>
                )}

            </Modal.Body>
            <Modal.Footer>

                {yes_press && (
                    <Button
                        onClick={() => yes_press()}>{'بله'}</Button>
                )}

                <Button
                    onClick={no_press}>{yes_press ? 'خیر' : 'بستن'}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default YesNoModal;
