import React from 'react';

const InvitationsCountBox = () => {
    return (
        <div className="my-5">

            <div className="d-flex">
                <h6 className="mx-3 text-dark-blue" style={{fontWeight:'bolder'}}>
                    <strong>
                        30 دعوت نامه های ارسال شده
                    </strong>
                </h6>
                <h6 className="mx-3 text-dark-blue" style={{fontWeight:'bolder'}}>
                    <strong>
                        10 دعوت نامه های پذیرفته شده
                    </strong>
                </h6>
            </div>
            <p className="mt-2 text-gray small mx-auto">
                اعتبار شما با دعوت و عضویت هر کشاورز 50 هزار تومان افزایش می یابد که از آن بابت خرید خدمات میتوانید استفاده کنید
            </p>

        </div>
    );
};

export default InvitationsCountBox;
