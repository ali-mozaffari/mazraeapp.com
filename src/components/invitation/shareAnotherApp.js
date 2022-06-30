import React from 'react';
import whatsAppIcon from '../../assets/img/002-whatsapp.svg'
import telegramIcon from '../../assets/img/003-telegram.svg'
import {CopyIcon, TelegramIcon, WhatsappIcon} from "../../assets/icon";

const ShareAnotherApp = () => {
    return (
        <div>
            <h6 style={{fontWeight: 'bolder'}}>
                <strong>
                    اشتراک در پیام رسان ها
                </strong>
            </h6>


            <div className="my-4">

                <button className="btn btn-outline-purple mx-2">
                    <span className="mx-1"><TelegramIcon/></span>
                    تلگرام
                </button>

                <button className="btn btn-outline-purple mx-2">
                    <span className="mx-1"><WhatsappIcon/></span>
                    واتساپ
                </button>

            </div>

            <hr/>


            <h6 style={{fontWeight: 'bolder'}}>
                <strong>
                    اشتراک کد اختصاصی
                </strong>
            </h6>


            <div className="share-link-box mt-3">
                https://mazraeapp.com/verify/24243
                <span className="mx-2">
                    <CopyIcon />
                </span>
            </div>

        </div>
    );
};

export default ShareAnotherApp;
