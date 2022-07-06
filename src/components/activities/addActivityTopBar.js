import React from 'react';

const AddActivityTopBar = () => {
    return (
        <div className="d-flex justify-content-between">

            <div>
                <span>
                    فعالیت ها
                </span>
                /
                <span>
                    <strong>
                        فعالیت جدید
                    </strong>
                </span>
            </div>
            <div>
                <button className="btn ">
                    بازگشت
                </button>
            </div>

        </div>
    );
};

export default AddActivityTopBar;
