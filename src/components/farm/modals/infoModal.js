import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const InfoModal = ({open, handleClose}) => {
    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <h4 className="fw-bolder">
                        راهنما
                    </h4>
                </DialogTitle>
                <DialogContent
                    className="cus-modal">
                    <DialogContentText id="alert-dialog-slide-description">
                        - مزرعه خود را روی نقشه پیدا کنید (می توانید جستجو کنید یا با دکمه لوکیشن مکان کنونی خود را
                        ببینید)
                        <br/>
                        - روی دکمه کلیک کنید تا امکان رسم مختصات فعال شود
                        <br/>
                        - مرزهای مزرعه خود را با کشیدن یک چند ضلعی بسته مشخص کنید
                        <br/>
                        - پس از تعیین مختصات دکمه را فشار دهید
                        <br/>
                        - نام مزرعه خود را بنویسید و در آخر روی دکمه افزودن کلیک کنید
                        <br/>
                        توجه: شما میتوانید نقاط را با کلیک مجدد حذف یا مکان آن را در نقشه جابجا کنید
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className="btn btn-gray" onClick={handleClose}>باشه </button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InfoModal;
