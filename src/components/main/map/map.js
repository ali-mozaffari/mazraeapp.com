import React, {Suspense, useEffect, useRef, useState} from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Polygon, Popup, TileLayer, useMap} from "react-leaflet";
import './Map.css'
import {InfoIcon, LocationIcon, PolygonIcon} from "../../../assets/icon";
import InfoModal from "../modals/infoModal";
import getLocation from "../utils/getLocation";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const Map = () => {

        const mapBoxUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVzdC1tYXoiLCJhIjoiY2trMnd4MHV2MTVjaTJ2cXMxemY1ZXRtZiJ9.FQEAeAkNLH7t2BAYLUBf-g'
        const ref = useRef();
        const [pointsState, setPointsState] = useState([]);
        const [_center, setCenter] = useState();
        const [infoModalOpen, setInfoModalOpen] = React.useState(false);

        const handleInfoModalClickOpen = () => {
            setInfoModalOpen(true);
        };

        const handleInfoModalClose = () => {
            setInfoModalOpen(false);
        };

        useEffect(() => {
            getLocation({setCenter})
        }, [_center])

        return (
            <div className="map-container">

                <div>
                    <Suspense fallback={<div></div>}>
                        <MapContainer attributionControl={true}
                                      zoomControl={true}
                                      doubleClickZoom={true}
                                      scrollWheelZoom={true}
                                      animate={true}
                                      maxZoom={40}
                                      ref={ref}
                                      id={'map'}
                                      center={_center ? _center : [35.715298, 51.404343]}
                                      zoom={13}
                                      style={{width: '100%', height: '100vh'}} easeLinearity={0.35}>
                            <TileLayer
                                attribution="[Mapbox]"
                                style={{zIndex: -1}}
                                // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                                url={mapBoxUrl}
                            />

                            <Marker position={_center ? _center : [35.715298, 51.404343]}>
                                <Popup>
                                    test
                                </Popup>
                            </Marker>

                        </MapContainer>
                    </Suspense>
                </div>

                <div className="map-tools">
                    <div style={{width: '100px', display: 'flex', flexDirection: 'column-reverse'}}>
                        <button className="btn btn-tools"
                                type="button"
                                onClick={() => {
                                    getLocation({setCenter})
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
                            <div className="col-md-5 mx-auto d-md-block d-flex justify-content-between mt-3 mt-md-0">
                                <button className="btn-farm-add mx-md-2 py-2 py-md-0">
                                    ذخیره
                                </button>
                                <button className="btn-farm-cancel mx-md-2 py-2 py-md-0">
                                    بازگشت
                                </button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-tools h-100 d-none d-md-block mx-md-2 py-2 py-md-0"
                                        onClick={handleInfoModalClickOpen}>
                                    <InfoIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <InfoModal open={infoModalOpen} handleClose={handleInfoModalClose}/>

            </div>
        );
    }
;

export default Map;
