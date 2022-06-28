import React from 'react';
import closeIcon from "../../assets/img/close-notification.png";

const InvitationAlert = () => {
    return (
        <div>
            <div className="cus-alert-info row align-items-center">
                <div className="mx-2 col-6">
                    شما دارای حساب عادی می باشید
                </div>
                <div className="col-5 mx-auto d-flex justify-content-between align-items-center">
                    <button className="btn btn-help">
                        راهنما
                    </button>
                    <img src={closeIcon} width={14} height={14}/>
                </div>
            </div>
        </div>
    );
};

export default InvitationAlert;
