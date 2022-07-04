import React, {useState, useEffect} from "react";
import "./main.css";
import "chart.js/auto";
import menuIcon from "../../assets/img/menu.png";
import ForecastCultivationProgressItem from "./progressBar";
import {CONST} from "../../assets/strings/strings";
import RainChart from "./rainChart";
import {Menu, MenuItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getFarmListBoxAPI} from "../../redux/slice/farm/farmListBox";
import {useNavigate, Link, NavLink} from "react-router-dom";
import DeleteConfirmationModal from "./modals/deleteConfirmationModal";


const ITEM_HEIGHT = 48;

const FarmListBox = () => {
    const navigate = useNavigate();
    // const [showDeleteFarm, setShowDeleteFarm] = useState(false);
    // const [data, setData] = useState([]);
    // const [dropdown, SetDropdown] = useState([]);

    // useEffect(() => {
    //   const items = [
    //     // {name:"ویرایش مشخصات مزرعه", path: "/edit-farm/"`${data.guid}/${data.id}`},
    //     { name: "ویرایش مشخصات مزرعه", path: "/edit-farm/" },
    //     { name: "ویرایش مختصات مزرعه", path: "/add-cultivation" },
    //     { name: "افزودن کشت", path: "/add-cultivation" },
    //     { name: "کشت های کنونی مزرعه", path: "/cultivation" },
    //     { name: "تاریخچه کشت های مزرعه", path: "/history" },
    //     { name: "حذف مزرعه", path: `${showDeleteModal()}` },
    //   ];
    //   SetDropdown(items);
    // }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFarmListBoxAPI());
    }, []);

    const farmlist = useSelector((state) => state.farmlist);
    const {postList, loading} = farmlist;

    const [type, setType] = useState(null);
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] =
        useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    // Handle the displaying of the modal based on type and id
    const showDeleteModal = (type, id) => {
        setType(type);
        setId(id);
        // setFruitMessage(null);
        // setVegetableMessage(null);

        // setDeleteMessage(`Are you sure you want to delete the fruit '${fruits.find((x) => x.id === id).name}'?`);
        // setDeleteMessage(`Are you sure you want to delete the fruit`);

        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    // Handle the actual deletion of the item
    const submitDelete = (type, id) => {
        // setFruitMessage(`The fruit '${fruits.find((x) => x.id === id).name}' was deleted successfully.`);
        // setFruitMessage(`The fruit was deleted successfully.`);
        // setFruits(fruits.filter((fruit) => fruit.id !== id));
        setDisplayConfirmationModal(false);
    };
    // const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

    // const handleDeleteModalClickOpen = () => {
    //   setDeleteModalOpen(true);
    // };

    // const handleDeleteModalClose = () => {
    //   setDeleteModalOpen(false);
    // };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="container-fluid mt-4">
            <div className="row d-md-flex justify-content-center">
                {loading ? (
                    <h1 style={{jusfigyContent: "center"}}>درحال بازگذاری ...</h1>
                ) : (
                    postList?.map((item) => (
                        <div
                            key={item?.guid}
                            className="col-11 col-md-3 mx-md-4 farm-item-box"
                        >
                            {/*  farm box header  */}
                            <div className="d-flex justify-content-between align-items-center text-bold">
                                <div>{item?.name}</div>
                                {/* <div>مزرعه من 2</div> */}
                                <div>
                                    <div className="tableToolIconBgGray d-flex align-items-center">
                                        <div
                                            className="tableToolIconBgGray d-flex align-items-center"
                                            aria-label="more"
                                            id="long-button"
                                            aria-controls={open ? "long-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <img src={menuIcon} alt="menu" className="mx-auto"/>
                                        </div>

                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                "aria-labelledby": "long-button",
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 5,
                                                    width: "40ch",
                                                },
                                            }}
                                        >
                                            <MenuItem>
                                                <Link to={"/edit-farm/"} className="dropdownItem">
                                                    ویرایش مشخصات مزرعه
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link
                                                    to={"/edit-codination-farm"}
                                                    className="dropdownItem"
                                                >
                                                    ویرایش مختصات مزرعه
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to={"/add-cultivation"} className="dropdownItem">
                                                    افزودن کشت
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to={"/cultivation"} className="dropdownItem">
                                                    کشت های کنونی مزرعه
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link to={"/history"} className="dropdownItem">
                                                    تاریخچه کشت های مزرعه
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <div
                                                    className="dropdownItem"
                                                    onClick={() => showDeleteModal()}
                                                >
                                                    حذف مزرعه
                                                </div>
                                            </MenuItem>

                                            {/* {dropdown.map((item, index) => (
                        <MenuItem key={index}>
                          <Link
                            to={item.path}
                            style={{
                              textDecoration: "none",
                              color: "#212529",
                              fontSize: "14px",
                            }}
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))} */}
                                        </Menu>
                                    </div>
                                </div>
                            </div>

                            <p className="small text-gray mt-3">بارش باران در 3 روز آینده</p>

                            <div className="rain-3d-report d-flex">
                                <div className="rain-unit ">میلی لیتر</div>

                                <div className="w-100 d-flex justify-content-evenly align-items-center">
                                    <div className="text-center">
                                        18
                                        <br/>
                                        <span className="small text-gray">شنبه</span>
                                    </div>
                                    <div className="text-center">
                                        23
                                        <br/>
                                        <span className="small text-gray">یکشنبه</span>
                                    </div>
                                    <div className="align-items-center text-center">
                                        12
                                        <br/>
                                        <span className="small text-gray">دوشنبه</span>
                                    </div>
                                </div>
                            </div>

                            {/*<hr/>*/}

                            <RainChart/>
                            <hr/>

                            <div className="d-flex justify-content-evenly align-items-center">
                                <div className="small text-bold">میزان باد</div>
                                <div className="small text-gray wind-duration-title">
                                    (در 24 ساعت آینده )
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="wind-unit">mph</span>
                                    <span>24.34</span>
                                </div>
                            </div>

                            <hr/>

                            {/* <ForecastCultivationProgressItem
                        farm={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    /> */}
                        </div>
                    ))
                )}
            </div>

            <DeleteConfirmationModal
                showModal={displayConfirmationModal}
                confirmModal={submitDelete}
                hideModal={hideConfirmationModal}
                type={type}
                id={id}
            />
            {/* <DeleteModal open={deleteModalOpen} handleClose={handleDeleteModalClose}/> */}
        </div>
    );

    function calculateFarmsProgressData(farms) {
        let data = {
            masahat: 0,
            years: [],
            mahsuls: [],
        };
        farms.forEach((item) => {
            data.masahat = data.masahat + item.masahat;
            item.cultivation_list.forEach((element) => {
                if (
                    element.sal.title === CONST.LAST_YEAR_TITLE &&
                    element.level === 1
                ) {
                    let indexOfExist;
                    data.mahsuls.forEach((el, index) => {
                        if (el.product_id === element.mahsul.product_id) {
                            indexOfExist = index;
                        }
                    });

                    if (typeof indexOfExist === "number") {
                        data.mahsuls[indexOfExist] = {
                            ...data.mahsuls[indexOfExist],
                            masahat:
                                data.mahsuls[indexOfExist].masahat +
                                parseFloat(element.sathe_zire_kesht),
                        };
                    } else {
                        data.mahsuls.push({
                            ...element.mahsul,
                            masahat: parseFloat(element.sathe_zire_kesht),
                        });
                    }
                }
            });
        });

        return data;
    }
};

export default FarmListBox;
