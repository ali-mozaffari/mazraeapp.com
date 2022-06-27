import React from 'react';
import {Badge} from "react-bootstrap";
import calendarIcon from "../../assets/img/calendar.png";
import menuIcon from "../../assets/img/menu.png";
import {Menu, MenuItem, Tooltip} from "@mui/material";
import copyIcon from "../../assets/img/copy-gray.png";
import editIcon from "../../assets/img/edit.png";
import trashIcon from "../../assets/img/trash.png";

const options = [
    'علامت گذاری به عنوان انجام شده',
    'علامت گذاری به عنوان لغو شده',
    'جزئیات',
];

const ITEM_HEIGHT = 48;



const ActivitiesListBox = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
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
    );
};

export default ActivitiesListBox;
