import React from 'react';

import WeatherTopBar from '../../components/weather/weatherTopBar';
import WeatherListBox from '../../components/weather/weatherListBox';
import WeatherMidBar from '../../components/weather/weatherMidBar ';



const WeatherPage = () => {

    return (
        <div className="page-container container-fluid">

            <WeatherTopBar/>

            <WeatherListBox/>

            <WeatherMidBar/>

        </div>
    );
};

export default WeatherPage;
