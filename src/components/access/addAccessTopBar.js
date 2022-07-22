import React from 'react';
import {useNavigate} from "react-router-dom";

const AddActivityTopBar = () => {

    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-between">

            <div className="d-flex align-items-center mx-2">
                <span>
                    دسترسی ها
                </span>
                <span className="mx-2">
                    /
                </span>
                <span style={{fontWeight:'900'}}>
                    شخص جدید
                </span>
            </div>
            <div>
                <button className="btn btn-back-orange" onClick={() => navigate('/access')}>
                    بازگشت
                </button>
            </div>



        </div>
    );
};

export default AddActivityTopBar;
