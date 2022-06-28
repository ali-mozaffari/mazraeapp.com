import React from 'react';

const SendInvitationForm = () => {
    return (
        <div>

            <h6 style={{fontWeight: 'bolder'}}>
                <strong>
                    ارسال یا اشتراک دعوتنامه
                </strong>
            </h6>

            <div className="mt-4">
                <form className="row justify-content-evenly">
                    <input className="col-md-5 search-input" type="search" placeholder="نام کشاورز"/>
                    <input className="col-md-5 search-input" type="search" placeholder="شماره تماس"/>

                </form>
                <button className="btn-dark-blue mx-1 mt-4">
                    ارسال لینک
                </button>
            </div>
        </div>
    );
};

export default SendInvitationForm;
