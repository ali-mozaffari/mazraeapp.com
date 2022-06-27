import React from 'react';
import calendarIcon from "../../assets/img/calendar.png";
import downloadIcon from "../../assets/img/download.png";
import trashIcon from "../../assets/img/trash.png";

const FarmServicesListBox = () => {


    return (
        <div>

            <table className="table table-borderless mt-4 d-none d-md-table">
                <thead>
                <tr>
                    <th className="py-3">
                        نوع
                    </th>
                    <th className="py-3">
                        نام خدمت
                    </th>
                    <th className="py-3">
                        تاریخ
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td className="py-3">
                        حسابداری
                    </td>
                    <td className="py-3">
                        ارزیابی اقتصادی و مالی طرح مزرعه تست
                    </td>
                    <td className="py-3">
                        {/*3 روز دیگر*/}
                        1400/01/01
                        {/*<img src={calendarIcon} alt="calendar" className="mx-2"/>*/}
                    </td>
                    <td className="d-flex">
                        <button className="btn purple-outline-btn mx-2">
                            <img  src={downloadIcon} className="mx-2"/>
                            دانلود
                        </button>
                        <div className="tableToolIconBgOrange d-flex align-items-center">
                            <img src={trashIcon} alt="menu" className="mx-auto"/>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="py-3">
                        حسابداری
                    </td>
                    <td className="py-3">
                        ارزیابی اقتصادی
                    </td>
                    <td className="py-3">
                        {/*3 روز دیگر*/}
                        1400/01/01
                        {/*<img src={calendarIcon} alt="calendar" className="mx-2"/>*/}
                    </td>
                    <td className="d-flex">
                        <button className="btn purple-outline-btn mx-2">
                            <img  src={downloadIcon} className="mx-2"/>
                            دانلود
                        </button>
                        <div className="tableToolIconBgOrange d-flex align-items-center">
                            <img src={trashIcon} alt="menu" className="mx-auto"/>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="py-3">
                        مالی
                    </td>
                    <td className="py-3">
                        ارزیابی
                    </td>
                    <td className="py-3">
                        {/*3 روز دیگر*/}
                        1400/01/01
                        {/*<img src={calendarIcon} alt="calendar" className="mx-2"/>*/}
                    </td>
                    <td className="d-flex">
                        <button className="btn purple-outline-btn mx-2">
                            <img  src={downloadIcon} className="mx-2"/>
                            دانلود
                        </button>
                        <div className="tableToolIconBgOrange d-flex align-items-center">
                            <img src={trashIcon} alt="menu" className="mx-auto"/>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>

            <div>


            </div>
        </div>
    );
};

export default FarmServicesListBox;
