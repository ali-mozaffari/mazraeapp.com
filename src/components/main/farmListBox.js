import React from 'react';
import './main.css';
import 'chart.js/auto';
import menuIcon from "../../assets/img/menu.png";
import ForecastCultivationProgressItem from "./progressBar";
import {CONST} from "../../assets/strings/strings";
import RainChart from "./rainChart";
import {Menu, MenuItem} from "@mui/material";


    const data2 = [{"id":2198,"cultivation_list":[{"id":904,"mahsul":{"id":2,"guid":"7772d0ae-4630-468f-b6c0-daa42755a274","title":"جو","content":"یکی از اصلی ترین اعضای خانواده غلات","color":"#3BB9FF","product_id":104,"image":"/media/entity_files/7772d0ae-4630-468f-b6c0-daa42755a274.jpg","category":3},"sal":{"id":5,"guid":"9d6ea659-63f7-4c7e-ba57-a7ec477c2496","title":"1400-1401","year_date":"2022-03-21","start_date":"2021-08-23","end_date":"2022-11-21","position":1,"this_year":true,"is_active":true},"mah_kasht":{"id":6,"guid":"5157782c-813f-4ecd-b3a6-d44fb47ee4d8","title":"شهریور","number":6},"mah_bardasht":{"id":8,"guid":"80f7ebf6-c8b3-4dc3-9e1c-1227baabaa93","title":"آبان","number":8},"points_list":[{"id":1093,"utm":["541505.8216011396-3939350.0807735412-39S","542806.8920120428-3937993.7743115905-39S","547242.999234561-3928488.615818296-39S","544587.2063333561-3936531.4243215634-39S"],"guid":"06ec8897-e8bd-4906-b5c3-3a443c2fb022","points":["35.59701902776685-51.45820140838624","35.58473476410108-51.472492218017585","35.49883191351043-51.52090072631837","35.57147122743853-51.49206161499024"]}],"guid":"45bdd738-34d8-4195-952d-983ae9e69e31","sathe_zire_kesht":"547.76","points":null,"amalkard":null,"gheymat":null,"level":1,"ragham_mahsul":null,"ragham_mahsul_org":"","vaziat":"tasmim_be_kesht","planting_datetime":"2021-09-07","harvest_datetime":"2022-11-16","farm":2198}],"weather":{"five_day":"[{\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 11.1, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 178, \"English\": \"S\", \"Localized\": \"S\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 35.2, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 147, \"English\": \"SSE\", \"Localized\": \"جنوب-جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 5374.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.9, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-28T20:24:00+04:30\", \"Rise\": \"2022-06-28T05:51:00+04:30\", \"EpochSet\": 1656431640, \"EpochRise\": 1656379260}, \"Date\": \"2022-06-28T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=1&unit=c\", \"Moon\": {\"Age\": 29, \"Set\": \"2022-06-28T20:10:00+04:30\", \"Rise\": \"2022-06-28T04:53:00+04:30\", \"Phase\": \"WaningCrescent\", \"EpochSet\": 1656430800, \"EpochRise\": 1656375780}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 112, \"English\": \"ESE\", \"Localized\": \"شرق-جنوب‌شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 25.9, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 124, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 801.6, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 0.8, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656383400, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=1&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.6, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 28.6, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 17.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.8, \"Phrase\": \"گرمای خطرناک\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 27.9, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.0, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 27.9, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 11.1, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 139, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 37.0, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 145, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 6151.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 8.1, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-29T20:24:00+04:30\", \"Rise\": \"2022-06-29T05:51:00+04:30\", \"EpochSet\": 1656518040, \"EpochRise\": 1656465660}, \"Date\": \"2022-06-29T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=2&unit=c\", \"Moon\": {\"Age\": 0, \"Set\": \"2022-06-29T21:01:00+04:30\", \"Rise\": \"2022-06-29T05:41:00+04:30\", \"Phase\": \"New\", \"EpochSet\": 1656520260, \"EpochRise\": 1656465060}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 65, \"English\": \"ENE\", \"Localized\": \"شرق و شمال شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 125, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 889.5, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656469800, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=2&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.6, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 16.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 42.3, \"Phrase\": \"گرمای خطرناک\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.8, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 38.9, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.8, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 174, \"English\": \"S\", \"Localized\": \"S\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 33.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 145, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 6918.1, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.6, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-30T20:24:00+04:30\", \"Rise\": \"2022-06-30T05:51:00+04:30\", \"EpochSet\": 1656604440, \"EpochRise\": 1656552060}, \"Date\": \"2022-06-30T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=3&unit=c\", \"Moon\": {\"Age\": 1, \"Set\": \"2022-06-30T21:46:00+04:30\", \"Rise\": \"2022-06-30T06:33:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656609360, \"EpochRise\": 1656554580}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 101, \"English\": \"E\", \"Localized\": \"E\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 29.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 138, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1081.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 0.8, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656556200, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=3&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.0, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 15.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.3, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 38.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 143, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 33.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 139, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 8431.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.6, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-07-01T20:24:00+04:30\", \"Rise\": \"2022-07-01T05:52:00+04:30\", \"EpochSet\": 1656690840, \"EpochRise\": 1656638520}, \"Date\": \"2022-07-01T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=4&unit=c\", \"Moon\": {\"Age\": 2, \"Set\": \"2022-07-01T22:25:00+04:30\", \"Rise\": \"2022-07-01T07:30:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656698100, \"EpochRise\": 1656644400}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 73, \"English\": \"ENE\", \"Localized\": \"شرق و شمال شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 128, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1163.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656642600, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=4&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.5, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.1, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 15.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 37.9, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 221, \"English\": \"SW\", \"Localized\": \"جنوب غربی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 270, \"English\": \"W\", \"Localized\": \"W\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 9164.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.4, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sun\": {\"Set\": \"2022-07-02T20:24:00+04:30\", \"Rise\": \"2022-07-02T05:52:00+04:30\", \"EpochSet\": 1656777240, \"EpochRise\": 1656724920}, \"Date\": \"2022-07-02T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=5&unit=c\", \"Moon\": {\"Age\": 3, \"Set\": \"2022-07-02T22:59:00+04:30\", \"Rise\": \"2022-07-02T08:29:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656786540, \"EpochRise\": 1656734340}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 247, \"English\": \"WSW\", \"Localized\": \"غرب- جنوب غربی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 277, \"English\": \"W\", \"Localized\": \"W\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1255.6, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656729000, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=5&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 37.2, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 22.5, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 12.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 21.6, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 35.7, \"Phrase\": \"داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 21.6, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}]","current_condition":"{\"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/current-weather/210841\", \"Wind\": {\"Speed\": {\"Metric\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Imperial\": {\"Unit\": \"mi/h\", \"Value\": 4.6, \"UnitType\": 9}}, \"Direction\": {\"Degrees\": 0, \"English\": \"N\", \"Localized\": \"N\"}}, \"Ceiling\": {\"Metric\": {\"Unit\": \"m\", \"Value\": 12192.0, \"UnitType\": 5}, \"Imperial\": {\"Unit\": \"ft\", \"Value\": 40000.0, \"UnitType\": 0}}, \"UVIndex\": 0, \"DewPoint\": {\"Metric\": {\"Unit\": \"C\", \"Value\": -3.9, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 25.0, \"UnitType\": 18}}, \"Pressure\": {\"Metric\": {\"Unit\": \"mb\", \"Value\": 1007.0, \"UnitType\": 14}, \"Imperial\": {\"Unit\": \"inHg\", \"Value\": 29.74, \"UnitType\": 12}}, \"WindGust\": {\"Speed\": {\"Metric\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Imperial\": {\"Unit\": \"mi/h\", \"Value\": 4.6, \"UnitType\": 9}}}, \"EpochTime\": 1656377820, \"IsDayTime\": false, \"Precip1hr\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"CloudCover\": 0, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/current-weather/210841\", \"Visibility\": {\"Metric\": {\"Unit\": \"km\", \"Value\": 16.1, \"UnitType\": 6}, \"Imperial\": {\"Unit\": \"mi\", \"Value\": 10.0, \"UnitType\": 2}}, \"Temperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}, \"UVIndexText\": \"پایین\", \"WeatherIcon\": 33, \"WeatherText\": \"صاف\", \"HasPrecipitation\": false, \"PressureTendency\": {\"Code\": \"S\", \"LocalizedText\": \"مداوم\"}, \"RelativeHumidity\": 11, \"PrecipitationType\": null, \"TemperatureSummary\": {\"Past6HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 32.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 91.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}}, \"Past12HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 38.9, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 102.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}}, \"Past24HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 39.4, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 103.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.1, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 79.0, \"UnitType\": 18}}}}, \"WetBulbTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 12.1, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 54.0, \"UnitType\": 18}}, \"ApparentTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 25.0, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 77.0, \"UnitType\": 18}}, \"RealFeelTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.6, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 80.0, \"Phrase\": \"دلپذیر\", \"UnitType\": 18}}, \"PrecipitationSummary\": {\"PastHour\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past3Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past6Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past9Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past12Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past18Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past24Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Precipitation\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}}, \"WindChillTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}, \"IndoorRelativeHumidity\": 11, \"LocalObservationDateTime\": \"2022-06-28T05:27:00+04:30\", \"ObstructionsToVisibility\": \"\", \"RealFeelTemperatureShade\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.6, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 80.0, \"Phrase\": \"دلپذیر\", \"UnitType\": 18}}, \"Past24HourTemperatureDeparture\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 0.0, \"UnitType\": 18}}}"},"ayesh_sal":[],"utm":["541505.8216011396-3939350.0807735412-39S","542806.8920120428-3937993.7743115905-39S","547242.999234561-3928488.615818296-39S","544587.2063333561-3936531.4243215634-39S"],"guid":"00508bc0-a0bc-43b6-a2a2-e7ea0a66cca6","masahat":547.76,"abiyari_type":"","manbae_ab":"chah","name":"test","systeme_abyari":false,"arzeshe_mazrae_hektar":"","arzeshe_mazrae_kol":"","malekiate_mazrae":[],"malek_name":"","malek_address":"","malek_phone":"","malek_ejare":"","points":["35.59701902776685-51.45820140838624","35.58473476410108-51.472492218017585","35.49883191351043-51.52090072631837","35.57147122743853-51.49206161499024"],"location":"SRID=4326;POINT (51.45820140838624 35.59701902776685)","location_key":"210841","credit":250000,"owner":2223},{"id":2232,"cultivation_list":[{"id":902,"mahsul":{"id":19,"guid":"289502d7-8477-4139-99ca-4641b05722f5","title":"پيا‏ز","content":"","color":"#FAAFBE","product_id":158,"image":null,"category":null},"sal":{"id":5,"guid":"9d6ea659-63f7-4c7e-ba57-a7ec477c2496","title":"1400-1401","year_date":"2022-03-21","start_date":"2021-08-23","end_date":"2022-11-21","position":1,"this_year":true,"is_active":true},"mah_kasht":{"id":6,"guid":"5157782c-813f-4ecd-b3a6-d44fb47ee4d8","title":"شهریور","number":6},"mah_bardasht":{"id":8,"guid":"80f7ebf6-c8b3-4dc3-9e1c-1227baabaa93","title":"آبان","number":8},"points_list":[{"id":1091,"utm":["540043.017071811-3939591.08772604-39S","540320.2629519786-3939317.548516027-39S","539814.6159950615-3934146.915720596-39S","537899.1910921624-3938196.081649205-39S"],"guid":"136e2854-88a2-4518-b4df-3ffd31cb5376","points":["35.59925232772949-51.442065238952644","35.596774756802695-51.44511222839356","35.55017516833674-51.439275741577156","35.58675900543163-51.418333053588874"]}],"guid":"1269035a-7f28-4ca3-879f-7a859c7959ad","sathe_zire_kesht":"646.72","points":null,"amalkard":null,"gheymat":null,"level":1,"ragham_mahsul":null,"ragham_mahsul_org":"","vaziat":"tasmim_be_kesht","planting_datetime":"2021-08-23","harvest_datetime":"2022-11-21","farm":2232}],"weather":{"five_day":"[{\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 11.1, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 178, \"English\": \"S\", \"Localized\": \"S\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 35.2, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 147, \"English\": \"SSE\", \"Localized\": \"جنوب-جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 5374.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.9, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-28T20:24:00+04:30\", \"Rise\": \"2022-06-28T05:51:00+04:30\", \"EpochSet\": 1656431640, \"EpochRise\": 1656379260}, \"Date\": \"2022-06-28T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=1&unit=c\", \"Moon\": {\"Age\": 29, \"Set\": \"2022-06-28T20:10:00+04:30\", \"Rise\": \"2022-06-28T04:53:00+04:30\", \"Phase\": \"WaningCrescent\", \"EpochSet\": 1656430800, \"EpochRise\": 1656375780}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 112, \"English\": \"ESE\", \"Localized\": \"شرق-جنوب‌شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 25.9, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 124, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 801.6, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 0.8, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656383400, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=1&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.6, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 28.6, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 17.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.8, \"Phrase\": \"گرمای خطرناک\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 27.9, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.0, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 27.9, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 11.1, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 139, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 37.0, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 145, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 6151.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 8.1, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-29T20:24:00+04:30\", \"Rise\": \"2022-06-29T05:51:00+04:30\", \"EpochSet\": 1656518040, \"EpochRise\": 1656465660}, \"Date\": \"2022-06-29T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=2&unit=c\", \"Moon\": {\"Age\": 0, \"Set\": \"2022-06-29T21:01:00+04:30\", \"Rise\": \"2022-06-29T05:41:00+04:30\", \"Phase\": \"New\", \"EpochSet\": 1656520260, \"EpochRise\": 1656465060}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 65, \"English\": \"ENE\", \"Localized\": \"شرق و شمال شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 125, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 889.5, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656469800, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=2&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.6, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 16.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 42.3, \"Phrase\": \"گرمای خطرناک\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.8, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 38.9, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.8, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 174, \"English\": \"S\", \"Localized\": \"S\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 33.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 145, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 6918.1, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.6, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-06-30T20:24:00+04:30\", \"Rise\": \"2022-06-30T05:51:00+04:30\", \"EpochSet\": 1656604440, \"EpochRise\": 1656552060}, \"Date\": \"2022-06-30T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=3&unit=c\", \"Moon\": {\"Age\": 1, \"Set\": \"2022-06-30T21:46:00+04:30\", \"Rise\": \"2022-06-30T06:33:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656609360, \"EpochRise\": 1656554580}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 5.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 101, \"English\": \"E\", \"Localized\": \"E\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 29.6, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 138, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1081.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 0.8, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656556200, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=3&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 40.0, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 15.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.3, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 38.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.5, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 143, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 33.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 139, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 8431.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.6, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sun\": {\"Set\": \"2022-07-01T20:24:00+04:30\", \"Rise\": \"2022-07-01T05:52:00+04:30\", \"EpochSet\": 1656690840, \"EpochRise\": 1656638520}, \"Date\": \"2022-07-01T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=4&unit=c\", \"Moon\": {\"Age\": 2, \"Set\": \"2022-07-01T22:25:00+04:30\", \"Rise\": \"2022-07-01T07:30:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656698100, \"EpochRise\": 1656644400}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 73, \"English\": \"ENE\", \"Localized\": \"شرق و شمال شرقی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 128, \"English\": \"SE\", \"Localized\": \"جنوب شرقی\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 0, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1163.3, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 0}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656642600, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=4&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.5, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.1, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 15.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 41.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 37.9, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 26.3, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}, {\"Day\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 1, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 9.3, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 221, \"English\": \"SW\", \"Localized\": \"جنوب غربی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 270, \"English\": \"W\", \"Localized\": \"W\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"آفتابی\", \"LongPhrase\": \"آفتاب درخشان\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"آفتاب درخشان\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 9164.8, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 7.4, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sun\": {\"Set\": \"2022-07-02T20:24:00+04:30\", \"Rise\": \"2022-07-02T05:52:00+04:30\", \"EpochSet\": 1656777240, \"EpochRise\": 1656724920}, \"Date\": \"2022-07-02T07:00:00+04:30\", \"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=5&unit=c\", \"Moon\": {\"Age\": 3, \"Set\": \"2022-07-02T22:59:00+04:30\", \"Rise\": \"2022-07-02T08:29:00+04:30\", \"Phase\": \"WaxingCrescent\", \"EpochSet\": 1656786540, \"EpochRise\": 1656734340}, \"Night\": {\"Ice\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Icon\": 33, \"Rain\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Snow\": {\"Unit\": \"cm\", \"Value\": 0.0, \"UnitType\": 4}, \"Wind\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 247, \"English\": \"WSW\", \"Localized\": \"غرب- جنوب غربی\"}}, \"WindGust\": {\"Speed\": {\"Unit\": \"km/h\", \"Value\": 31.5, \"UnitType\": 7}, \"Direction\": {\"Degrees\": 277, \"English\": \"W\", \"Localized\": \"W\"}}, \"CloudCover\": 0, \"HoursOfIce\": 0.0, \"IconPhrase\": \"صاف\", \"LongPhrase\": \"صاف\", \"HoursOfRain\": 0.0, \"HoursOfSnow\": 0.0, \"ShortPhrase\": \"صاف\", \"TotalLiquid\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"IceProbability\": 0, \"RainProbability\": 1, \"SnowProbability\": 0, \"SolarIrradiance\": {\"Unit\": \"W/m²\", \"Value\": 1255.6, \"UnitType\": 33}, \"HasPrecipitation\": false, \"Evapotranspiration\": {\"Unit\": \"mm\", \"Value\": 1.0, \"UnitType\": 3}, \"HoursOfPrecipitation\": 0.0, \"ThunderstormProbability\": 0, \"PrecipitationProbability\": 1}, \"Sources\": [\"AccuWeather\"], \"EpochDate\": 1656729000, \"HoursOfSun\": 14.5, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/daily-weather-forecast/210841?day=5&unit=c\", \"Temperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 37.2, \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 22.5, \"UnitType\": 17}}, \"AirAndPollen\": [{\"Name\": \"AirQuality\", \"Type\": \"ازن\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Grass\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Mold\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Ragweed\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"Tree\", \"Value\": 0, \"Category\": \"خوب\", \"CategoryValue\": 1}, {\"Name\": \"UVIndex\", \"Value\": 12, \"Category\": \"بسیار ناسالم\", \"CategoryValue\": 5}], \"DegreeDaySummary\": {\"Cooling\": {\"Unit\": \"C\", \"Value\": 12.0, \"UnitType\": 17}, \"Heating\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}}, \"RealFeelTemperature\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 39.4, \"Phrase\": \"بسیار داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 21.6, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}, \"RealFeelTemperatureShade\": {\"Maximum\": {\"Unit\": \"C\", \"Value\": 35.7, \"Phrase\": \"داغ\", \"UnitType\": 17}, \"Minimum\": {\"Unit\": \"C\", \"Value\": 21.6, \"Phrase\": \"دلپذیر\", \"UnitType\": 17}}}]","current_condition":"{\"Link\": \"http://www.accuweather.com/fa/ir/tehran/210841/current-weather/210841\", \"Wind\": {\"Speed\": {\"Metric\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Imperial\": {\"Unit\": \"mi/h\", \"Value\": 4.6, \"UnitType\": 9}}, \"Direction\": {\"Degrees\": 0, \"English\": \"N\", \"Localized\": \"N\"}}, \"Ceiling\": {\"Metric\": {\"Unit\": \"m\", \"Value\": 12192.0, \"UnitType\": 5}, \"Imperial\": {\"Unit\": \"ft\", \"Value\": 40000.0, \"UnitType\": 0}}, \"UVIndex\": 0, \"DewPoint\": {\"Metric\": {\"Unit\": \"C\", \"Value\": -3.9, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 25.0, \"UnitType\": 18}}, \"Pressure\": {\"Metric\": {\"Unit\": \"mb\", \"Value\": 1007.0, \"UnitType\": 14}, \"Imperial\": {\"Unit\": \"inHg\", \"Value\": 29.74, \"UnitType\": 12}}, \"WindGust\": {\"Speed\": {\"Metric\": {\"Unit\": \"km/h\", \"Value\": 7.4, \"UnitType\": 7}, \"Imperial\": {\"Unit\": \"mi/h\", \"Value\": 4.6, \"UnitType\": 9}}}, \"EpochTime\": 1656377820, \"IsDayTime\": false, \"Precip1hr\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"CloudCover\": 0, \"MobileLink\": \"http://www.accuweather.com/fa/ir/tehran/210841/current-weather/210841\", \"Visibility\": {\"Metric\": {\"Unit\": \"km\", \"Value\": 16.1, \"UnitType\": 6}, \"Imperial\": {\"Unit\": \"mi\", \"Value\": 10.0, \"UnitType\": 2}}, \"Temperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}, \"UVIndexText\": \"پایین\", \"WeatherIcon\": 33, \"WeatherText\": \"صاف\", \"HasPrecipitation\": false, \"PressureTendency\": {\"Code\": \"S\", \"LocalizedText\": \"مداوم\"}, \"RelativeHumidity\": 11, \"PrecipitationType\": null, \"TemperatureSummary\": {\"Past6HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 32.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 91.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}}, \"Past12HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 38.9, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 102.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}}, \"Past24HourRange\": {\"Maximum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 39.4, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 103.0, \"UnitType\": 18}}, \"Minimum\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.1, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 79.0, \"UnitType\": 18}}}}, \"WetBulbTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 12.1, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 54.0, \"UnitType\": 18}}, \"ApparentTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 25.0, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 77.0, \"UnitType\": 18}}, \"RealFeelTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.6, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 80.0, \"Phrase\": \"دلپذیر\", \"UnitType\": 18}}, \"PrecipitationSummary\": {\"PastHour\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past3Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past6Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past9Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past12Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past18Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Past24Hours\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}, \"Precipitation\": {\"Metric\": {\"Unit\": \"mm\", \"Value\": 0.0, \"UnitType\": 3}, \"Imperial\": {\"Unit\": \"in\", \"Value\": 0.0, \"UnitType\": 1}}}, \"WindChillTemperature\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 27.8, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 82.0, \"UnitType\": 18}}, \"IndoorRelativeHumidity\": 11, \"LocalObservationDateTime\": \"2022-06-28T05:27:00+04:30\", \"ObstructionsToVisibility\": \"\", \"RealFeelTemperatureShade\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 26.6, \"Phrase\": \"بسیار گرم\", \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 80.0, \"Phrase\": \"دلپذیر\", \"UnitType\": 18}}, \"Past24HourTemperatureDeparture\": {\"Metric\": {\"Unit\": \"C\", \"Value\": 0.0, \"UnitType\": 17}, \"Imperial\": {\"Unit\": \"F\", \"Value\": 0.0, \"UnitType\": 18}}}"},"ayesh_sal":[],"utm":["540043.017071811-3939591.08772604-39S","540320.2629519786-3939317.548516027-39S","539814.6159950615-3934146.915720596-39S","537899.1910921624-3938196.081649205-39S"],"guid":"c934f979-7e3d-4261-b6f9-7d0a3d0eeb2a","masahat":646.72,"abiyari_type":"","manbae_ab":"chah","name":"test2","systeme_abyari":false,"arzeshe_mazrae_hektar":"","arzeshe_mazrae_kol":"","malekiate_mazrae":[],"malek_name":"","malek_address":"","malek_phone":"","malek_ejare":"","points":["35.59925232772949-51.442065238952644","35.596774756802695-51.44511222839356","35.55017516833674-51.439275741577156","35.58675900543163-51.418333053588874"],"location":"SRID=4326;POINT (51.44206523895264 35.59925232772949)","location_key":"210841","credit":250000,"owner":2223}]


const options = [
    'علامت گذاری به عنوان انجام شده',
    'علامت گذاری به عنوان لغو شده',
    'جزئیات',
];

const ITEM_HEIGHT = 48;



const FarmListBox = () => {
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
                <div className="col-11 col-md-3 mx-md-4 farm-item-box">

                    {/*  farm box header  */}
                    <div className="d-flex justify-content-between align-items-center text-bold">
                        <div>
                            مزرعه گندم شماره 2
                        </div>
                        <div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
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

                            </div>
                        </div>
                    </div>

                    <p className="small text-gray mt-3">
                        بارش باران در 3 روز آینده
                    </p>


                    <div className="rain-3d-report d-flex">

                        <div className="rain-unit ">
                            میلی لیتر
                        </div>

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
                        <div className="small text-bold">
                            میزان باد
                        </div>
                        <div className="small text-gray wind-duration-title">
                            (در 24 ساعت آینده )
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="wind-unit">
                                mph
                            </span>
                            <span>
                                24.34
                            </span>

                        </div>
                    </div>

                    <hr/>


                    <ForecastCultivationProgressItem
                        main={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    />


                </div>
                <div className="col-11 col-md-3 mx-md-4 farm-item-box">

                    {/*  farm box header  */}
                    <div className="d-flex justify-content-between align-items-center text-bold">
                        <div>
                            مزرعه گندم شماره 2
                        </div>
                        <div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
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

                            </div>
                        </div>
                    </div>

                    <p className="small text-gray mt-3">
                        بارش باران در 3 روز آینده
                    </p>


                    <div className="rain-3d-report d-flex">

                        <div className="rain-unit ">
                            میلی لیتر
                        </div>

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
                        <div className="small text-bold">
                            میزان باد
                        </div>
                        <div className="small text-gray wind-duration-title">
                            (در 24 ساعت آینده )
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="wind-unit">
                                mph
                            </span>
                            <span>
                                24.34
                            </span>

                        </div>
                    </div>

                    <hr/>


                    <ForecastCultivationProgressItem
                        main={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    />


                </div>
                <div className="col-11 col-md-3 mx-md-4 farm-item-box">

                    {/*  farm box header  */}
                    <div className="d-flex justify-content-between align-items-center text-bold">
                        <div>
                            مزرعه گندم شماره 2
                        </div>
                        <div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
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

                            </div>
                        </div>
                    </div>

                    <p className="small text-gray mt-3">
                        بارش باران در 3 روز آینده
                    </p>


                    <div className="rain-3d-report d-flex">

                        <div className="rain-unit ">
                            میلی لیتر
                        </div>

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
                        <div className="small text-bold">
                            میزان باد
                        </div>
                        <div className="small text-gray wind-duration-title">
                            (در 24 ساعت آینده )
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="wind-unit">
                                mph
                            </span>
                            <span>
                                24.34
                            </span>

                        </div>
                    </div>

                    <hr/>


                    <ForecastCultivationProgressItem
                        main={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    />


                </div>
                <div className="col-11 col-md-3 mx-md-4 farm-item-box">

                    {/*  farm box header  */}
                    <div className="d-flex justify-content-between align-items-center text-bold">
                        <div>
                            مزرعه گندم شماره 2
                        </div>
                        <div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
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

                            </div>
                        </div>
                    </div>

                    <p className="small text-gray mt-3">
                        بارش باران در 3 روز آینده
                    </p>


                    <div className="rain-3d-report d-flex">

                        <div className="rain-unit ">
                            میلی لیتر
                        </div>

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
                        <div className="small text-bold">
                            میزان باد
                        </div>
                        <div className="small text-gray wind-duration-title">
                            (در 24 ساعت آینده )
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="wind-unit">
                                mph
                            </span>
                            <span>
                                24.34
                            </span>

                        </div>
                    </div>

                    <hr/>


                    <ForecastCultivationProgressItem
                        main={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    />


                </div>
                <div className="col-11 col-md-3 mx-md-4 farm-item-box">

                    {/*  farm box header  */}
                    <div className="d-flex justify-content-between align-items-center text-bold">
                        <div>
                            مزرعه گندم شماره 2
                        </div>
                        <div>
                            <div className="tableToolIconBgGray d-flex align-items-center">
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

                            </div>
                        </div>
                    </div>

                    <p className="small text-gray mt-3">
                        بارش باران در 3 روز آینده
                    </p>


                    <div className="rain-3d-report d-flex">

                        <div className="rain-unit ">
                            میلی لیتر
                        </div>

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
                        <div className="small text-bold">
                            میزان باد
                        </div>
                        <div className="small text-gray wind-duration-title">
                            (در 24 ساعت آینده )
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="wind-unit">
                                mph
                            </span>
                            <span>
                                24.34
                            </span>

                        </div>
                    </div>

                    <hr/>


                    <ForecastCultivationProgressItem
                        main={false}
                        all
                        title={'مجموع مزارع'}
                        // data={data}
                        data={calculateFarmsProgressData(data2)}
                    />


                </div>
            </div>
        </div>
    );

    function calculateFarmsProgressData(farms) {
        let data = {
            masahat: 0,
            years: [],
            mahsuls: []
        }
        farms.forEach(item => {
            data.masahat = data.masahat + item.masahat
            item.cultivation_list.forEach(element => {
                if (element.sal.title === CONST.LAST_YEAR_TITLE && element.level === 1) {
                    let indexOfExist
                    data.mahsuls.forEach((el, index) => {
                        if (el.product_id === element.mahsul.product_id) {
                            indexOfExist = index
                        }
                    })

                    if (typeof indexOfExist === 'number') {
                        data.mahsuls[indexOfExist] = {
                            ...data.mahsuls[indexOfExist],
                            masahat: data.mahsuls[indexOfExist].masahat + parseFloat(element.sathe_zire_kesht)
                        }
                    } else {
                        data.mahsuls.push({
                            ...element.mahsul,
                            masahat: parseFloat(element.sathe_zire_kesht)
                        })
                    }
                }
            })
        })

        return data
    }

};

export default FarmListBox;
