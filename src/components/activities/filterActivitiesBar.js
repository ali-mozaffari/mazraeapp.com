import React from 'react';
import filterIcon from "../../assets/img/filterIcon.png";
import sortIcon from "../../assets/img/sort-down.svg";
import {useDispatch, useSelector} from "react-redux";
// import increment from "../../redux/actions/baseAction";

const FilterActivitiesBar = () => {

    return (
        <div>
            <div className="d-md-flex justify-content-between">
                <div>
                    <h5 className="fw-bolder">
                        <strong>
                            فعالیت
                        </strong>
                    </h5>
                    <br/>
                    <p>
                        شما با اضافه کردن فعالیت حدید میتوانید کارها رو بهتر مدیریت نمایید
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn-outline-light-blue mx-1">
                        گزارش فعالیت ها
                    </button>
                    <button className="btn-dark-blue mx-1">
                        فعالیت جدید
                    </button>
                </div>
            </div>

            <hr/>

            <div className="row d-flex align-items-center">
                <div className="col-md-6 mx-auto">
                    <input className="search-input w-100" type="search" placeholder="جستجو . . ."/>
                </div>
                <div className="col-md-6 mx-auto d-flex justify-content-around mt-3 mt-md-0">
                    <div>
                        <img src={filterIcon} alt="filter" className="mx-2"/>
                        <p className="d-inline">
                            فیلتر کردن
                        </p>
                    </div>
                    <div>
                        <img src={sortIcon} alt="filter" className="mx-2"/>
                        <p className="d-inline">
                            مرتب سازی
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterActivitiesBar;
