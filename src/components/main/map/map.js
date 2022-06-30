// import React, {useEffect, useRef, useState} from "react";
// import propTypes from 'prop-types'

// import {withRouter} from 'react-router-dom';
// import {Map as LeafletMap, TileLayer, Marker, Popup, Polygon, Circle} from 'react-leaflet';
// import L from 'leaflet';
// import * as turf from '@turf/turf'
// import ReactLeafletSearch from "react-leaflet-search";
// import pointInPolygon from 'point-in-polygon'
// import Moment from 'moment'

// import './Map.css';
// // import maker from "../../../../../../assets/img/icon-maker.png";
// // import makerLast from "../../../../../../assets/img/icon_marker_last.png";
// // import userLocation from "../../../../../../assets/img/user_location.png";
// import YesNoModal from "../../../../../../components/base/YesNoModal/YesNoModal";
// import {faQuestion, faTrash, faCrosshairs} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import moment from "moment";
// import { Alert } from "bootstrap";

// const mapBoxUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVzdC1tYXoiLCJhIjoiY2trMnd4MHV2MTVjaTJ2cXMxemY1ZXRtZiJ9.FQEAeAkNLH7t2BAYLUBf-g'

// const makerIcon = new L.Icon({
//     // iconUrl: maker,
//     // iconRetinaUrl: maker,
//     popupAnchor: [-0, -0],
//     iconSize: [16, 16],
// });
// const makerIconLast = new L.Icon({
//     // iconUrl: makerLast,
//     // iconRetinaUrl: makerLast,
//     popupAnchor: [-0, -0],
//     iconSize: [12, 12],
// });

// const userLocationIcon = new L.Icon({
//     // iconUrl: userLocation,
//     // iconRetinaUrl: userLocation,
//     popupAnchor: [-0, -0],
//     iconSize: [16, 16],
// });

// Map.propTypes = {
//     points: propTypes.array.isRequired,
//     onPointsAdd: propTypes.func.isRequired,
//     center: propTypes.array,
//     onCancel: propTypes.func,
//     onConfirm: propTypes.func,
//     staticPolygon: propTypes.array,
//     toggle: propTypes.bool,
//     cultivations: propTypes.array,
//     startDate: propTypes.any,
//     endDate: propTypes.any,
//     type: propTypes.string,
//     onToggle: propTypes.func,
// }

// function Map(props) {
//     const {
//         points, onPointsAdd, center, onConfirm, onCancel, staticPolygon, toggle, cultivations,
//         startDate, endDate, type, onToggle
//     } = props
//     const [pointsState, setPointsState] = useState([])
//     const [zoom, setZoom] = useState(points ? 15 : 13)
//     const [draggable, setDraggable] = useState(true)
//     const [showDeletePoint, setShowDeletePoint] = useState(false)
//     const [showDeleteAllPoint, setShowDeleteAllPoint] = useState(false)
//     const [showHelp, setShowHelp] = useState(false)
//     const [map, setMap] = useState(false)
//     const [cultivationPolygons, setCultivationPolygons] = useState([])
//     const [polygon, setPolygon] = useState([])
//     const [polygon1, setPolygon1] = useState([])
//     const [likeToAddNearestPoint, setLikeToAddNearestPoint] = useState({
//         point: null,
//         nearestPoint: null,
//         index: null
//     })
//     const [_center, setCenter] = useState(center)
//     const userLocationMarker = useRef()
//     const dragging = useRef(false)

//     let lastMapClickTime = moment();

//     useEffect(() => {
//         isPolygonIntersect()
//     }, [])

//     useEffect(() => {
//         if (map) {
//             new L.TileLayer(
//                 mapBoxUrl,
//                 {
//                     attribution: '[Mapbox]',
//                     tileSize: 512,
//                     zoomOffset: -1
//                 }
//             ).addTo(map.leafletElement)
//         }
//     }, [map])

//     useEffect(() => {
//         if (!_center) {
//             setCenter(center)
//         }
//     }, [center])

//     useEffect(() => {
//         setPointsState(points || [])
//     }, [points])

//     useEffect(() => {
//         if (pointsState.length >= 3 && !dragging.current) {
//             const polygon = turf.polygon([[...pointsState, pointsState[0]]]);
//             const area = turf.area(polygon);

//             onPointsAdd(pointsState, area / 10000)
//         }
//     }, [pointsState])

//     useEffect(() => {
//         let points = pointsState
//         if (staticPolygon && staticPolygon.length) {
//             points = staticPolygon
//         }

//         if (map && map.leafletElement && points.length) {
//             map.leafletElement.fitBounds(points, {
//                 paddingBottomRight: [100, 350],
//                 padding: [100, 0],
//                 maxZoom: 15
//             })
//         }
//     }, [map])

//     return (
//         <div>
//             <div className='map-container'>
//                 <LeafletMap
//                     id={'map'}
//                     ref={setMap}
//                     style={{cursor: toggle ? 'pointer' : 'unset'}}
//                     className='leaflet-container'
//                     center={_center}
//                     zoom={zoom}
//                     attributionControl={true}
//                     zoomControl={true}
//                     doubleClickZoom={true}
//                     scrollWheelZoom={true}
//                     animate={true}
//                     maxZoom={30}
//                     onClick={(e) => {
//                         if (toggle) {
//                             if (moment().diff(lastMapClickTime, 'second') > 0) {
//                                 lastMapClickTime = moment();
//                                 const _points = [...pointsState];
//                                 let point = [e.latlng.lat, e.latlng.lng]

//                                 if (!staticPolygon || pointInPolygon(point, staticPolygon)) {
//                                     setZoom(map.leafletElement.getZoom())
//                                     const pointDist = nearestPolygonSideToPoint(point, staticPolygon)
//                                     if (pointDist?.properties.dist < 10) {
//                                         setLikeToAddNearestPoint({
//                                             point,
//                                             nearestPoint: pointDist.geometry.coordinates,
//                                             index: null
//                                         })
//                                         return
//                                     }
//                                     _points.push(point)
//                                     setPointsState(_points)
//                                 } else {
//                                     Alert.warning('سامانه مزرعه: \n شما نمیتوانید کشت را خارج از مزرعه مشخصی کنید', 2000);
//                                 }
//                             }
//                         } else {
//                             if (onToggle) {
//                                 createPolygonOnSelectedRegion([e.latlng.lat, e.latlng.lng])
//                             }
//                         }
//                     }}
//                     easeLinearity={0.35}
//                 >
//                     {/*<TileLayer*/}
//                     {/*    attribution="[Mapbox]"*/}
//                     {/*    url={mapBoxUrl}*/}
//                     {/*/>*/}

//                     {pointsState.map((item, index) => {
//                         return (
//                             <Marker
//                                 key={index.toString()}
//                                 position={item}
//                                 icon={(index === pointsState.length - 1)
//                                     ? makerIconLast
//                                     : makerIcon
//                                 }
//                                 draggable={draggable}
//                                 onClick={() => setShowDeletePoint(index)}
//                                 touchZoom={true}
//                                 scrollWheelZoom={true}
//                                 doubleClickZoom={true}
//                                 onDrag={(e) => {
//                                     dragging.current = true
//                                     const _points = [...pointsState];
//                                     _points[index] = [e.latlng.lat, e.latlng.lng]
//                                     setPointsState(_points)
//                                     setZoom(map.leafletElement.getZoom())
//                                 }}
//                                 onDragend={(e) => {
//                                     lastMapClickTime = moment();
//                                     dragging.current = false
//                                     const _points = [...pointsState];
//                                     let point = [e.target.getLatLng().lat, e.target.getLatLng().lng];

//                                     if (!staticPolygon || pointInPolygon(point, staticPolygon)) {
//                                         setZoom(map.leafletElement.getZoom())
//                                         const pointDist = nearestPolygonSideToPoint(point, staticPolygon)
//                                         if (pointDist?.properties.dist < 10) {
//                                             setLikeToAddNearestPoint({
//                                                 point,
//                                                 nearestPoint: pointDist.geometry.coordinates,
//                                                 index
//                                             })
//                                         }
//                                         _points[index] = point
//                                         setPointsState(_points)
//                                     } else {
//                                         Alert.warning('سامانه مزرعه: \n شما نمیتوانید کشت را خارج از مزرعه مشخصی کنید', 2000);
//                                     }

//                                 }}
//                             />
//                         )
//                     })}

//                     {(staticPolygon && staticPolygon.length) && (
//                         <Polygon
//                             draggable={false}
//                             // pathOptions={{ color: '#2d8549' }}
//                             color={'#007bff'}
//                             positions={staticPolygon}
//                         />
//                     )}

//                     {cultivationPolygons?.map(item => {
//                         return (
//                             <Polygon
//                                 draggable={false}
//                                 // pathOptions={{ color: '#2d8549' }}
//                                 color={'#ffbb00'}
//                                 positions={item}
//                             />
//                         )
//                     })}

//                     {/*{polygon?.map(item => {*/}
//                     {/*    return (*/}
//                     {/*        <Polygon*/}
//                     {/*            draggable={false}*/}
//                     {/*            // pathOptions={{ color: '#2d8549' }}*/}
//                     {/*            color={'#ff88ff'}*/}
//                     {/*            positions={item}*/}
//                     {/*        />*/}
//                     {/*    )*/}
//                     {/*})}*/}

//                     {/*{polygon1?.map(item => {*/}
//                     {/*    return (*/}
//                     {/*        <Polygon*/}
//                     {/*            draggable={false}*/}
//                     {/*            // pathOptions={{ color: '#2d8549' }}*/}
//                     {/*            color={'#88ff88'}*/}
//                     {/*            positions={item}*/}
//                     {/*        />*/}
//                     {/*    )*/}
//                     {/*})}*/}

//                     <Polygon
//                         draggable={true}
//                         // pathOptions={{ color: '#2d8549' }}
//                         color={'#2d8549'}
//                         positions={pointsState}
//                     />

//                     <ReactLeafletSearch
//                         className="map-search-box"
//                         position="topright"
//                         inputPlaceholder="مکان مورد نظر خود را جستجو کنید"
//                         zoom={16}
//                         showMarker={false}
//                         showPopup={false}
//                         openSearchOnLoad={false}
//                         closeResultsOnClick={true}
//                     />
//                 </LeafletMap>

//                 <button className="btn-help btn btn-primary btn-md btn-block"
//                         type="button"
//                         onClick={() => setShowHelp(true)}>
//                     <FontAwesomeIcon icon={faQuestion}/>
//                 </button>

//                 <button className="btn-location-map btn btn-primary btn-md btn-block"
//                         type="button"
//                         onClick={() => {
//                             navigator.permissions.query({name: 'geolocation'}).then(function (result) {

//                                 // granted, prompt
//                                 if (result.state === 'denied') {
//                                     Alert.warning('سامانه مزرعه: \n لطفا دسترسی موقعیت مکانی را به سامانه مزرعه بدهید', 2000);
//                                 }

//                                 // result.onchange = function() {
//                                 // }
//                             });

//                             navigator.geolocation.getCurrentPosition(function (position) {
//                                 setCenter([position.coords.latitude, position.coords.longitude])
//                                 if (userLocationMarker.current) {
//                                     map.leafletElement.removeLayer(userLocationMarker.current)
//                                 }
//                                 userLocationMarker.current = L.marker([position.coords.latitude, position.coords.longitude], {icon: userLocationIcon}).addTo(map.leafletElement);
//                             });

//                             // navigator.permissions.revoke({name: 'geolocation'}).then(function (result) {
//                             //     console.log('debug', result);
//                             // });
//                         }}>
//                     <FontAwesomeIcon icon={faCrosshairs}/>
//                 </button>

//                 {pointsState.length !== 0 && (
//                     <button className="btn-clear-map btn btn-primary btn-md btn-block"
//                             title={'پاک کردن همه نقاط'}
//                             type="button"
//                             onClick={() => setShowDeleteAllPoint(true)}>
//                         <FontAwesomeIcon icon={faTrash}/>
//                     </button>
//                 )}

//                 {onConfirm && (
//                     <div className='map-buttons'>
//                         <button className="btn btn-primary btn-md btn-block"
//                                 type="button"
//                                 onClick={onCancel}>
//                             لغو
//                         </button>

//                         <button className="btn btn-primary btn-md btn-block"
//                                 type="button"
//                                 onClick={() => {
//                                     if (pointsState.length < 3) {
//                                         Alert.warning('سامانه مزرعه: \n لطفا حداقل ۳ نقطه را انتخاب کنبد', 2000);
//                                         // window.alert('سامانه مزرعه: \n لطفا حداقل ۳ نقطه را انتخاب کنبد')
//                                         return
//                                     }

//                                     if (isPolygonIntersect().hasConflict) {
//                                         Alert.warning('سامانه مزرعه: \n کشت شما نمیتواند با کشت های دیگر در این زمان همپوشانی داشته باشد', 5000);
//                                         return
//                                     }

//                                     if (isPolygonOutsideOfFarm()) {
//                                         Alert.warning('سامانه مزرعه: \n کشت شما نمیتواند خارج از مزرعه باشد', 5000);
//                                         return
//                                     }

//                                     const polygonsDetails = isPolygonIntersect()

//                                     const _polygonLevel1 = [];
//                                     polygonsDetails.polygonLevel1.forEach(item => {
//                                         const polygon = turf.polygon([item]);
//                                         const area = turf.area(polygon);
//                                         const _area = Number((area / 10000).toFixed(2))
//                                         if (_area) {
//                                             _polygonLevel1.push({
//                                                 points: item,
//                                                 masahat: _area
//                                             })
//                                         }
//                                     })
//                                     const _polygonLevel2 = [];
//                                     polygonsDetails.polygonLevel2.forEach(item => {
//                                         const polygon = turf.polygon([item]);
//                                         const area = turf.area(polygon);
//                                         const _area = Number((area / 10000).toFixed(2))
//                                         if (_area) {
//                                             _polygonLevel2.push({
//                                                 points: item,
//                                                 masahat: _area
//                                             })
//                                         }
//                                     })

//                                     onConfirm(
//                                         polygonsDetails.level,
//                                         _polygonLevel1,
//                                         _polygonLevel2,
//                                         pointsState
//                                     )
//                                 }}>
//                             ثبت
//                         </button>
//                     </div>
//                 )}

//             </div>

//             <YesNoModal
//                 title={"حذف نقطه"}
//                 content={"آیا از حذف نقطه اطمینان دارید؟"}
//                 show={typeof showDeletePoint === 'number'}
//                 no_press={() => setShowDeletePoint(false)}
//                 yes_press={() => {
//                     const _points = [...pointsState];
//                     _points.splice(showDeletePoint, 1)
//                     setPointsState(_points)
//                     setZoom(map.leafletElement.getZoom())
//                     setShowDeletePoint(true)
//                 }}
//             />

//             <YesNoModal
//                 title={"حذف همه نقاط"}
//                 content={"آیا از حذف همه نقاط اطمینان دارید؟"}
//                 show={showDeleteAllPoint}
//                 no_press={() => setShowDeleteAllPoint(false)}
//                 yes_press={() => {
//                     setPointsState([])
//                     setShowDeleteAllPoint(false)
//                 }}
//             />

//             <YesNoModal
//                 title={`راهنمای تعیین مختصات ${type === 'AddFarm' ? 'مزرعه' : 'کشت'}`}
//                 isHelp={true}
//                 isAddFarm={type === 'AddFarm'}
//                 show={showHelp}
//                 no_press={() => setShowHelp(false)}
//             />

//             <YesNoModal
//                 title={"نقطه نزدیک مرز"}
//                 content={"مایل به چسباندن نقطه به مرز هستید؟"}
//                 show={likeToAddNearestPoint.point}
//                 no_press={() => {
//                     const _points = [...pointsState];
//                     _points.push(likeToAddNearestPoint.point)
//                     setPointsState(_points)
//                     setLikeToAddNearestPoint({
//                         point: null,
//                         nearestPoint: null,
//                         index: null
//                     })
//                 }}
//                 yes_press={() => {
//                     const _points = [...pointsState];
//                     if (likeToAddNearestPoint.index && typeof likeToAddNearestPoint.index === 'number') {
//                         _points[likeToAddNearestPoint.index] = likeToAddNearestPoint.nearestPoint
//                     } else {
//                         _points.push(likeToAddNearestPoint.nearestPoint)
//                     }
//                     setPointsState(_points)
//                     setLikeToAddNearestPoint({
//                         point: null,
//                         nearestPoint: null,
//                         index: null
//                     })
//                 }}
//             />

//         </div>
//     )

//     function isPolygonIntersect() {
//         const _polygon = []
//         let _polygon1 = []
//         const polygons = []
//         let _intersection
//         const previousCultivationPolygonsHasConflict = []
//         cultivations?.forEach(item => {
//             // is selected start date between planting_datetime & harvest_datetime
//             const isStartDateConflict = Moment(startDate).isSameOrBefore(item.harvest_datetime, 'day')

//             // is selected end date between planting_datetime & harvest_datetime
//             const isEndDateConflict = Moment(endDate).isSameOrAfter(item.planting_datetime, 'day')

//             // create this cultivation polygons
//             const allPoints = [];
//             item.points_list.forEach(element => {
//                 const _points = [];
//                 element.points.forEach(item => {
//                     if (item) {
//                         _points.push([
//                             parseFloat(item.split('-')[0]),
//                             parseFloat(item.split('-')[1]),
//                         ])
//                     }
//                 })
//                 allPoints.push(_points)
//             })

//             // check conflict between this cultivation's polygon and draw polygon
//             let isPolygonConflict = false
//             if (pointsState && pointsState.length) {
//                 allPoints.forEach(item => {
//                     const polygon = turf.polygon([[...pointsState, pointsState[0]]]);
//                     const polygon2 = turf.polygon([[...item, item[0]]]);
//                     if (!isPolygonConflict) {
//                         isPolygonConflict = turf.intersect(polygon, polygon2)
//                     }
//                 })
//             }

//             // store and show this cultivation's polygon if draw polygon has conflict in date range
//             if (isStartDateConflict && isEndDateConflict) {
//                 if (!_intersection) {
//                     _intersection = isPolygonConflict;
//                 }
//                 allPoints.forEach(item => {
//                     polygons.push(item)
//                 })

//                 // check conflict section between this cultivation's polygon and draw polygon and store it as polygon level 1
//                 // and store this cultivation' polygon
//             } else {
//                 if (isPolygonConflict) {
//                     isPolygonConflict.geometry.coordinates.forEach(el => {
//                         _polygon.push(el.length === 1 ? el[0] : el)
//                     })
//                     previousCultivationPolygonsHasConflict.push(item)
//                 }
//             }
//         })

//         // find difference between draw polygon and conflict polygons
//         if (pointsState.length > 3) {
//             let differencePolygon = turf.polygon([[...pointsState, pointsState[0]]])
//             _polygon.forEach(item => {
//                 const polygon2 = turf.polygon([[...item, item[0]]]);
//                 const temp = turf.difference(differencePolygon, polygon2)
//                 const _tempPolygon1 = []
//                 temp?.geometry.coordinates.forEach(el => {
//                     _tempPolygon1.push(el.length === 1 ? el[0] : el)
//                 })
//                 _polygon1 = _tempPolygon1;
//                 if (temp) {
//                     differencePolygon = temp
//                 }
//             })
//         }

//         setCultivationPolygons(polygons)
//         setPolygon(_polygon)
//         setPolygon1(_polygon1)

//         let level = 1
//         previousCultivationPolygonsHasConflict.forEach(item => {
//             if (item.level === level) {
//                 level = item.level + 1
//             }
//         })

//         // console.log('debug', _polygon)
//         // console.log('debug', _polygon1)
//         return {
//             hasConflict: _intersection ? true : false,
//             level,
//             polygonLevel1: _polygon1,
//             polygonLevel2: _polygon,
//         }
//     }

//     function isPolygonOutsideOfFarm() {
//         const polygon = turf.polygon([[...pointsState, pointsState[0]]]);
//         const polygon2 = turf.polygon([[...staticPolygon, staticPolygon[0]]]);
//         const difference = turf.difference(polygon, polygon2)

//         return difference ? true : false
//     }

//     function createPolygonOnSelectedRegion(selectedPoint) {
//         let _polygon = []

//         const _point1 = turf.point(selectedPoint);
//         const _poly1 = turf.polygon([[...staticPolygon, staticPolygon[0]]]);
//         const _isPointInPolygon1 = turf.booleanPointInPolygon(_point1, _poly1);

//         if (_isPointInPolygon1) {
//             _polygon = staticPolygon
//         }

//         let _difference

//         for (let i = 0; i < cultivationPolygons.length; i++) {
//             const item = cultivationPolygons[i];

//             const point1 = turf.point(selectedPoint);
//             // const _element = item.length === 1 ? item[0] : item
//             const poly1 = turf.polygon([[...item, item[0]]]);
//             const isPointInPolygon1 = turf.booleanPointInPolygon(point1, poly1);

//             if (isPointInPolygon1) {
//                 _polygon = []
//                 return
//             }

//             const __difference = _difference || staticPolygon
//             const polygon = turf.polygon([[...__difference, __difference[0]]]);
//             const polygon2 = turf.polygon([[...item, item[0]]]);
//             const difference = turf.difference(polygon, polygon2)
//             if (difference) {
//                 let isMask = false;
//                 _difference = difference.geometry.coordinates[0]
//                 let poly1
//                 let poly2
//                 if (difference.geometry.coordinates.length > 1) {
//                     const one = difference.geometry.coordinates[0].length === 1 ? difference.geometry.coordinates[0][0] : difference.geometry.coordinates[0]
//                     const two = difference.geometry.coordinates[1].length === 1 ? difference.geometry.coordinates[1][0] : difference.geometry.coordinates[1]

//                     poly1 = turf.polygon([[...one, one[0]]]);
//                     poly2 = turf.polygon([[...two, two[0]]]);
//                     const intersect = turf.intersect(poly1, poly2)
//                     isMask = intersect ? true : false
//                 }

//                 if (isMask) {
//                     const masked = turf.mask(poly2, poly1);
//                 } else {
//                     difference.geometry.coordinates.forEach(element => {
//                         const point = turf.point(selectedPoint);
//                         const _element = element.length === 1 ? element[0] : element
//                         const poly = turf.polygon([_element]);
//                         const isPointInPolygon = turf.booleanPointInPolygon(point, poly);

//                         if (isPointInPolygon) {
//                             _polygon = _element
//                         }
//                     })
//                 }

//             }
//         }

//         if (_polygon.length) {
//             if (
//                 _polygon[0][0] === _polygon[_polygon.length - 1][0]
//                 && _polygon[0][1] === _polygon[_polygon.length - 1][1]
//             ) {
//                 _polygon = _polygon.slice(0, _polygon.length - 1)
//             }
//         }

//         setPointsState(_polygon)
//         onToggle(true)
//     }

//     function nearestPolygonSideToPoint(point, _points) {
//         if (!_points) {
//             return
//         }

//         let distance = {properties: {dist: 1000000000000}}
//         let startPoint
//         let endPoint
//         let startIndex
//         let endIndex
//         _points.forEach((el, index) => {
//             const nextPointIndex = _points[index + 1] ? index + 1 : 0;
//             if (_points[nextPointIndex]) {
//                 const next = _points[nextPointIndex]
//                 if (nearestPointOnLine(point, [el, next]).properties.dist < distance.properties.dist) {
//                     startPoint = el
//                     endPoint = next
//                     startIndex = index
//                     endIndex = index + 1
//                     distance = nearestPointOnLine(point, [el, next])
//                 }
//             }
//         })

//         return {
//             ...distance,
//             line: {
//                 start: {
//                     index: startIndex,
//                     point: startPoint
//                 },
//                 end: {
//                     index: endIndex,
//                     point: endPoint
//                 },
//             }
//         }
//     }

//     function nearestPointOnLine(point, _points) {
//         const line = turf.lineString(_points);
//         const pt = turf.point(point);

//         return turf.nearestPointOnLine(line, pt, {units: 'meters'});
//     }
// }

// export default Map;
