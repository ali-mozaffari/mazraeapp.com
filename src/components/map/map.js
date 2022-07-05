import React, {Suspense, useEffect, useRef, useState} from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Polygon, Popup, TileLayer, useMap, useMapEvent, useMapEvents} from "react-leaflet";
import './Map.css'
import {DeleteIcon, InfoIcon, LocationIcon, PolygonIcon} from "../../assets/icon";
import InfoModal from "../farm/modals/infoModal";
import getLocation from "../farm/utils/getLocation";
import moment from "moment";
import FormBottom from "./formBottom";
import * as turf from '@turf/turf'


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

function MapClickHandler(props) {
    const map = useMapEvent('dblclick', (e) => {
        if (props.addPoly) {
            let new_list = [...props.pointsState]
            new_list.push(e.latlng)
            props.refreshArea(new_list)
            props.setPointsState(new_list)
        }
    })
}

const Map = () => {

        let area_points = []
        const mapBoxUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVzdC1tYXoiLCJhIjoiY2trMnd4MHV2MTVjaTJ2cXMxemY1ZXRtZiJ9.FQEAeAkNLH7t2BAYLUBf-g'
        const [pointsState, setPointsState] = useState([]);
        const [addPoly, setAddPoly] = useState(false)
        const [_center, setCenter] = useState();
        const [infoModalOpen, setInfoModalOpen] = React.useState(false);
        const [realArea, setRealArea] = useState('');

        useEffect(() => {
            getLocation({setCenter})
        }, [_center])


        const refreshArea = (list) => {
            if (list.length >= 3) {
                for (let i = 0; i < list.length; i++) {
                    area_points.push([list[i]['lat'], list[i]['lng']])
                }
                const polygon = turf.polygon([[...area_points, area_points[0]]]);
                const area = turf.area(polygon);
                setRealArea(area.toFixed(2))
                // console.error(area.toFixed(2) / 10000)
                // onPointsAdd(pointsState, area / 10000)

            }
        }


        return (
            <div className="map-container">

                <div>

                    <div className="area-box">
                        {'مساحت مزرعه :'}
                        {' '}
                        { realArea / 1000 }
                    </div>

                    <Suspense fallback={<div></div>}>
                        <MapContainer attributionControl={true}
                                      zoomControl={true}
                                      doubleClickZoom={false}
                                      scrollWheelZoom={true}
                                      animate={true}
                                      maxZoom={40}
                                      id={'map'}
                                      center={_center ? _center : [35.715298, 51.404343]}
                                      zoom={13}
                                      style={{width: '100%', height: '100vh'}} easeLinearity={0.35}
                        >

                            <MapClickHandler addPoly={addPoly} pointsState={pointsState} setPointsState={setPointsState}
                                             refreshArea={refreshArea}/>

                            <TileLayer
                                attribution="[Mapbox]"
                                style={{zIndex: -1}}
                                // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                                url={mapBoxUrl}
                            />

                            {pointsState.map((item, index) => {
                                return (
                                    <Marker
                                        key={index.toString()}
                                        position={item}
                                        draggable={true}
                                        touchZoom={true}
                                        scrollWheelZoom={true}
                                        doubleClickZoom={false}
                                        eventHandlers={{
                                            drag: (e) => {
                                                const _points = [...pointsState];
                                                _points[index] = {lat: e.latlng.lat, lng: e.latlng.lng}
                                                setPointsState(_points)
                                                refreshArea(_points)
                                            },
                                            click: (e) => {
                                                let filtered_list = pointsState.filter(function (value, index2, arr) {
                                                    return index2 !== index;
                                                });
                                                setPointsState(filtered_list)
                                            }
                                        }}
                                    />
                                )
                            })}

                            {pointsState.length > 2 ? (
                                <Polygon
                                    draggable={true}
                                    color={'#00f'}
                                    positions={pointsState}
                                />
                            ) : null}

                        </MapContainer>
                    </Suspense>
                </div>

                <FormBottom pointsState={pointsState} area={realArea}
                            setPointsState={setPointsState} addPoly={addPoly} infoModalOpen={infoModalOpen}
                            setAddPoly={setAddPoly} setInfoModalOpen={setInfoModalOpen} setCenter={setCenter}/>

            </div>
        );
    }
;

export default Map;
