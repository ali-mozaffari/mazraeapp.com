import React, {Suspense, useEffect, useRef, useState} from 'react';
// import {ReactLeafletSearch} from "react-leaflet-search";
import {MapContainer, Marker, Polygon, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import './Map.css'
import {CopyIcon, LocationIcon, PolygonIcon} from "../../../assets/icon";


const Map = () => {

    const mapBoxUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVzdC1tYXoiLCJhIjoiY2trMnd4MHV2MTVjaTJ2cXMxemY1ZXRtZiJ9.FQEAeAkNLH7t2BAYLUBf-g'
    const ref = useRef();
    const [pointsState, setPointsState] = useState([])
    const [_center, setCenter] = useState()


    // console.warn(_center)


    useEffect(() => {
        if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }

    }, []);

    return (
        <div className="map-container">

            <div style={{zIndex: -1}}>
                <Suspense fallback={<div></div>}>
                    <MapContainer attributionControl={true}
                                  zoomControl={true}
                                  doubleClickZoom={true}
                                  scrollWheelZoom={true}
                                  animate={true}
                                  maxZoom={40}
                                  ref={ref}
                                  center={[35.715298, 51.404343]}
                                  zoom={13}
                                  style={{width: '100%', height: '100vh'}} easeLinearity={0.35}>
                        <TileLayer
                            attribution="[Mapbox]"
                            style={{zIndex: -1}}
                            // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url={mapBoxUrl}
                        />

                        {/*<Polygon*/}
                        {/*    draggable={true}*/}
                        {/*    // pathOptions={{ color: '#2d8549' }}*/}
                        {/*    color={'#2d8549'}*/}
                        {/*    positions={pointsState}*/}
                        {/*/>*/}

                        {/*<Marker position={[51.505, -0.09]}>*/}
                        {/*    <Popup>*/}
                        {/*        test*/}
                        {/*    </Popup>*/}
                        {/*</Marker>*/}


                        {/*<ReactLeafletSearch/>*/}

                    </MapContainer>

                </Suspense>
            </div>

            <div className="map-tools">
                <div style={{width: '100px', display: 'flex', flexDirection: 'column-reverse'}}>

                    <button className="btn btn-tools"
                            type="button"
                            onClick={() => {
                                navigator.permissions.query({name: 'geolocation'}).then(function (result) {

                                    // granted, prompt
                                    if (result.state === 'denied') {
                                        alert('سامانه مزرعه: \n لطفا دسترسی موقعیت مکانی را به سامانه مزرعه بدهید');
                                    }

                                    // result.onchange = function() {
                                    // }
                                });

                                navigator.geolocation.getCurrentPosition(function (position) {
                                    setCenter([position.coords.latitude, position.coords.longitude])
                                    // if (userLocationMarker.current) {
                                    //     map.leafletElement.removeLayer(userLocationMarker.current)
                                    // }
                                    // userLocationMarker.current = L.marker([position.coords.latitude, position.coords.longitude], {icon: userLocationIcon}).addTo(map.leafletElement);
                                });

                                // navigator.permissions.revoke({name: 'geolocation'}).then(function (result) {
                                //     console.log('debug', result);
                                // });
                            }}>
                        <LocationIcon/>
                    </button>

                    <button className="btn btn-tools">
                        <PolygonIcon/>
                    </button>
                </div>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-6 mx-auto">
                            <input className="farm-name-input w-100" placeholder="نام مزرعه ..."/>
                        </div>
                        <div className="col-md-6 mx-auto d-md-block d-flex justify-content-between mt-3 mt-md-0">
                            <button className="btn-farm-add mx-md-2 py-2 py-md-0">
                                ذخیره
                            </button>
                            <button className="btn-farm-cancel mx-md-2 py-2 py-md-0">
                                بازگشت
                            </button>
                        </div>
                    </div>
                </div>

                {/*// <div>*/}
                {/*//     <button className=""*/}
                {/*//             type="button"*/}
                {/*//             onClick={() => {*/}
                {/*//                 navigator.permissions.query({name: 'geolocation'}).then(function (result) {*/}
                {/*//                     // granted, prompt*/}
                {/*//                     if (result.state === 'denied') {*/}
                {/*//                         alert('سامانه مزرعه: \n لطفا دسترسی موقعیت مکانی را به سامانه مزرعه بدهید');*/}
                {/*//                     }*/}
                {/*//                     // result.onchange = function() {*/}
                {/*//                     // }*/}
                {/*//                 });*/}
                {/*//                 navigator.geolocation.getCurrentPosition(function (position) {*/}
                {/*//                     setCenter([position.coords.latitude, position.coords.longitude])*/}
                {/*//                     // if (userLocationMarker.current) {*/}
                {/*//                     // map.leafletElement.removeLayer(userLocationMarker.current)*/}
                {/*                    // }*/}
                {/*                    // userLocationMarker.current = L.marker([position.coords.latitude, position.coords.longitude], {icon: userLocationIcon}).addTo(map.leafletElement);*/}
                {/*                });*/}
                {/*                // navigator.permissions.revoke({name: 'geolocation'}).then(function (result) {*/}
                {/*                //     console.log('debug', result);*/}
                {/*                // });*/}
                {/*            }}>*/}
                {/*        /!*<CopyIcon/>*!/*/}
                {/*        delete*/}
                {/*    </button>*/}
                {/*</div>*/}

            </div>


        </div>
    );
};

export default Map;
