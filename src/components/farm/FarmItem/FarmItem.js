import React, {useRef} from "react";
import propTypes from 'prop-types';

import {Link, withRouter} from 'react-router-dom';
import {Map as LeafletMap, Polygon} from 'react-leaflet';

import './FarmItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSeedling, faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import {Dropdown} from 'react-bootstrap'
import * as turf from '@turf/turf'
import ForecastCultivationProgressItem
    from "../../ForecastCultivation/ForecastCultivationProgressItem/ForecastCultivationProgressItem";
import {CONST} from "../../../../../assets/Const";
import {geogorian2jalili, getWeekday} from "../../../../../assets/Tools";

FarmItem.propTypes = {
    data: propTypes.object.isRequired,
    onDelete: propTypes.func.isRequired,
}

function FarmItem(props) {
    const {data, onDelete} = props;
    const map = useRef()

    const _points = [];
    const _points_ = [];
    let _center;
    try {
        if (data.points && data.points.length !== 0) {
            data.points.forEach(item => {
                const items = item.split('-')
                _points.push({
                    lat: parseFloat(items[0]),
                    lon: parseFloat(items[1]),
                })
                _points_.push([parseFloat(items[0]), parseFloat(items[1])])
            })

            const polygon = turf.polygon([[..._points_, _points_[0]]])
            _center = turf.centroid(polygon).geometry.coordinates
        }
    } catch (e) {

    }

    if (map && map?.current) {
        map.current.leafletElement.fitBounds(_points_);
    }

    let weather = [1, 2, 3]
    if (data?.weather?.five_day) {
        const _data = data.weather.five_day;
        weather = [_data[0], _data[1], _data[2]];
    }

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 '>
            <div className="farm-item">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon className="more-icon" icon={faEllipsisV}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item> <Link to={`/edit-farm/${data.guid}/${data.id}`}>
                            ویرایش مشخصات مزرعه
                        </Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/add-farm/${data.guid}`}>
                            ویرایش مختصات مزرعه
                        </Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/add-cultivation/${data.id}/${data.name}/${data.guid}`}>
                            افزودن کشت
                        </Link></Dropdown.Item>
                        <Dropdown.Item><Link to={`/cultivation/${data.guid}/${data.name}`}>
                            کشت های کنونی مزرعه
                        </Link></Dropdown.Item>
                        <Dropdown.Item> <Link to={`/history/${data.guid}/${data.name}`}>
                            تاریخچه کشت های مزرعه
                        </Link></Dropdown.Item>
                        <Dropdown.Item> <Link onClick={onDelete}>
                            حذف مزرعه
                        </Link></Dropdown.Item>


                    </Dropdown.Menu>
                </Dropdown>
                <FontAwesomeIcon className="bck-icon3" icon={faSeedling}/>

                <div className='map-container-farm-item'>
                    <LeafletMap
                        ref={map}
                        className="leaflet-container-farm-item"
                        center={_center}
                        zoom={16}
                        attributionControl={false}
                        zoomControl={false}
                        doubleClickZoom={false}
                        scrollWheelZoom={false}
                        dragging={false}
                        easeLinearity={0.35}
                    >

                        {(data.points && data.points.length !== 0) && (
                            <Polygon
                                draggable={false}
                                fillColor={'#f9e69a'}
                                weight={2}
                                opacity={1}
                                fillOpacity={1}
                                color={'#f9e69a'}
                                positions={_points}
                            />
                        )}

                    </LeafletMap>
                </div>

                <span className='w-date'>{data.name}</span>
                <br/>
                {data.weather && (
                    <div className="farm-rain">
                        <h3>
                            بارش در 3 روز آینده
                        </h3>

                        <div className="rain-container">
                            <ul>
                                {weather.map(item => {
                                    const rainFall = Math.round((item?.Day?.TotalLiquid?.Value + item?.Night?.TotalLiquid?.Value));
                                    const height = rainFall * 5;

                                    return (
                                        <li>

                                            {rainFall || '*'}
                                            <span className="wh-bar">
                                                <span className="wh-bar-1" style={{
                                                    backgroundColor: 'transparent',
                                                    'height': !rainFall
                                                        ? '0px' :
                                                        `${100 - (height > 100 ? 100 : height)}%`,
                                                }}/>
                                                <span className="wh-bar-1"
                                                      style={{
                                                          'height': !rainFall
                                                              ? '0px' :
                                                              `${height > 100 ? 100 : height}%`,
                                                      }}/>
                                            </span>

                                        </li>
                                    )
                                })}

                                <li style={{'margin-top': '0px'}} className="themp">
                                    <span>
                                        mm
                                </span>
                                </li>
                            </ul>

                        </div>
                        <ul className="day-time">
                            {weather.map(item => {
                                return (
                                    <li>
                                        {getWeekday(item?.Date?.split('T')[0], true)}
                                    </li>
                                )
                            })}
                            <li>

                            </li>
                        </ul>


                    </div>
                )}

                {/*{data.cultivation_list.length !== 0 && (*/}
                {/*    <ul className='cul-items'>*/}
                {/*        {[data.cultivation_list[0]].map(item => {*/}
                {/*            return (*/}

                {/*                <li>*/}
                {/*                    <h6 className='w-date'>{item.mahsul.title}</h6>*/}
                {/*                    <h6 className='w-date2'>{item.sathe_zire_kesht} هکتار </h6>*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </ul>*/}
                {/*)}*/}

                {calculateFarmYearsProgressData(data).map(handleShowingItem)}

            </div>

        </div>
    )

    function handleShowingItem(item) {
        return (
            <div>
                <ForecastCultivationProgressItem
                    data={item}
                    farm={data}
                    level={1}
                    all
                    isItem={true}
                />

                {item.upLevelMahsuls && item.upLevelMahsuls.length !== 0 && (
                    <ForecastCultivationProgressItem
                        data={item}
                        farm={data}
                        level={2}
                        mahsulKey={'upLevelMahsuls'}
                        all
                        isItem={true}
                        notShowMasahat
                    />
                )}
            </div>
        )
    }

    function calculateFarmYearsProgressData(farm) {
        let data = []

        let _data = {
            masahat: 0,
            years: [],
            mahsuls: [],
            upLevelMahsuls: []
        }

        for (let i = 0; i < farm.cultivation_list.length; i++) {
            const item = farm.cultivation_list[i]

            if (item.sal.title !== CONST.LAST_YEAR_TITLE || item.level !== 1) {
                continue
            }

            // if ((level === 1 && item.level === 1) || (level > 1 && item.level > 1)) {
            let indexOf
            data.forEach((element, index) => {
                if (element.years.includes(item.sal?.title)) {
                    indexOf = index
                }
            })

            _data.masahat = farm.masahat
            _data.years = [item.sal?.title]

            if (typeof indexOf === 'number') {
                const mahsuls = []
                const upLevelMahsuls = []
                farm.cultivation_list.forEach(element => {
                    if (element.sal?.title === item.sal?.title) {
                        let indexOfEl
                        let indexOfElLevelUp
                        mahsuls.forEach(((el, indexEl) => {
                            if (el.product_id === element.mahsul.product_id) {
                                indexOfEl = indexEl
                            }
                        }))
                        upLevelMahsuls.forEach(((el, indexEl) => {
                            if (el.product_id === element.mahsul.product_id) {
                                indexOfElLevelUp = indexEl
                            }
                        }))

                        if (element.level === 1) {
                            if (typeof indexOfEl === 'number') {
                                mahsuls[indexOfEl] = {
                                    ...mahsuls[indexOfEl],
                                    masahat: mahsuls[indexOfEl].masahat + parseFloat(element.sathe_zire_kesht)
                                }
                            } else {
                                mahsuls.push({
                                    ...element.mahsul,
                                    masahat: parseFloat(element.sathe_zire_kesht)
                                })
                            }
                        } else {
                            if (typeof indexOfElLevelUp === 'number') {
                                upLevelMahsuls[indexOfElLevelUp] = {
                                    ...upLevelMahsuls[indexOfElLevelUp],
                                    masahat: upLevelMahsuls[indexOfElLevelUp].masahat + parseFloat(element.sathe_zire_kesht)
                                }
                            } else {
                                upLevelMahsuls.push({
                                    ...element.mahsul,
                                    masahat: parseFloat(element.sathe_zire_kesht)
                                })
                            }
                        }

                    }
                })

                data[indexOf] = {
                    ..._data,
                    mahsuls: mahsuls,
                    upLevelMahsuls: upLevelMahsuls
                }
            } else {
                data.push({
                    ..._data,
                    mahsuls: [{
                        ...item.mahsul,
                        masahat: parseFloat(item.sathe_zire_kesht)
                    }]
                })
            }
            // }
        }

        return data
    }

}

export default withRouter(FarmItem);
