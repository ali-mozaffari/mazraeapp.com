import React from 'react';

const ActivitiesListPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <h5>
                        فعالیت
                    </h5>
                    <br/>
                    <p>
                        شما با اضافه کردن فعالیت حدید میتوانید کارها رو بهتر مدیریت نمایید
                    </p>
                </div>
                <div>
                    <button>
                        گزارش فعالیت ها
                    </button>
                    <button>
                        فعالیت جدید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesListPage;
