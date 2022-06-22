import React from 'react';
import filterIcon from './../../assets/img/filterIcon.png';
import sortIcon from './../../assets/img/sort-down.svg';
import calendarIcon from './../../assets/img/calendar.png';
import copyIcon from './../../assets/img/copy-gray.png';
import menuIcon from './../../assets/img/menu.png';
import editIcon from './../../assets/img/edit.png';
import trashIcon from './../../assets/img/trash.png';
import {Badge} from "react-bootstrap";
import {Menu, MenuItem, Tooltip} from "@mui/material";


const options = [
    'علامت گذاری به عنوان انجام شده',
    'علامت گذاری به عنوان لغو شده',
    'جزئیات',
];

const ITEM_HEIGHT = 48;


const ActivitiesListPage = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="page-container container-fluid">
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

            <div>

                <table className="table table-borderless mt-4 d-none d-md-table">
                    <thead>
                    <tr>
                        <th className="py-3">
                            وضعیت
                        </th>
                        <th className="py-3">
                            نوع
                        </th>
                        <th className="py-3">
                            مهلت انجام
                        </th>
                        <th className="py-3">
                            محصول
                        </th>
                        <th className="py-3">
                            فعالیت ها
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'success'} className="p-2">
                                انجام شده
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center" aria-label="more"
                                 id="long-button"
                                 aria-controls={open ? 'long-menu' : undefined}
                                 aria-expanded={open ? 'true' : undefined}
                                 aria-haspopup="true"
                                 onClick={handleClick}>
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>

                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 5,
                                        width: '40ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} style={{paddingTop:'20px', paddingBottom:'20px'}} onClick={() => console.log(option)}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>

                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <Tooltip title="کپی کردن فعالیت">
                                    <img src={copyIcon} alt="menu" className="mx-auto"/>
                                </Tooltip>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <Tooltip title="ویرایش فعالیت">
                                    <img src={editIcon} alt="menu" className="mx-auto"/>
                                </Tooltip>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <Tooltip title="حدف فعالیت">
                                    <img src={trashIcon} alt="menu" className="mx-auto"/>
                                </Tooltip>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'danger'} className="p-2">
                                معوق شده
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'warning'} className="p-2">
                                جاری
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgOrange d-flex align-items-center">
                                <img src={trashIcon} alt="menu" className="mx-auto"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-3">
                            <Badge pill bg={'primary'} className="p-2">
                                برنامه
                            </Badge>
                        </td>
                        <td className="py-3">
                            کودهی
                        </td>
                        <td className="py-3">
                            3 روز دیگر
                            <img src={calendarIcon} alt="calendar" className="mx-2"/>
                        </td>
                        <td className="py-3">
                            17.5
                            گندم
                        </td>
                        <td className="d-flex">
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={menuIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
                                <img src={copyIcon} alt="menu" className="mx-auto"/>
                            </div>
                            <div className="tableToolIconBgBlue d-flex align-items-center">
                                <img src={editIcon} alt="menu" className="mx-auto"/>
                            </div>
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

        </div>
    );
};

export default ActivitiesListPage;
