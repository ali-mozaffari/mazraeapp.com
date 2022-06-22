import React from 'react';

const ActivitiesListPage = () => {
    return (
        <div className="page-container">
            <div className="d-flex justify-content-between">
                <div >
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
                    <button className="btn btn-outline-light-blue">
                        گزارش فعالیت ها
                    </button>
                    <button className="btn btn-dark-blue">
                        فعالیت جدید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesListPage;
