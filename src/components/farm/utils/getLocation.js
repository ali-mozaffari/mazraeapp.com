const getLocation = ({setCenter}) => {

    navigator.permissions.query({name: 'geolocation'}).then(function (result) {
        // granted, prompt
        if (result.state === 'denied') {
            alert('سامانه مزرعه: \n لطفا دسترسی موقعیت مکانی را به سامانه مزرعه بدهید');
        }
        // result.onchange = function() {
        // }
    });

    navigator.geolocation.getCurrentPosition(function (position) {
        setCenter([position.coords.latitude, position.coords.longitude]);

        // userLocationMarker.current = L.marker([position.coords.latitude, position.coords.longitude], {icon: userLocationIcon}).addTo(map);
        // if (userLocationMarker.current) {
        //     map.leafletElement.removeLayer(userLocationMarker.current)
        // }
        // userLocationMarker.current = L.marker([position.coords.latitude, position.coords.longitude], {icon: userLocationIcon}).addTo(map.leafletElement);
    });


}
export default getLocation;
