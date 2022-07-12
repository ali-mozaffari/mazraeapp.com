import React, { useEffect } from 'react';
import FilterActivitiesBar from "../../components/activities/filterActivitiesBar";
import ActivitiesListBox from "../../components/activities/activitiesListBox";
import {useDispatch, useSelector} from "react-redux";
import { getActivitiesList } from '../../redux/slice/activities/activitiesListBox';



const ActivitiesPage = () => {

    return (
        <div className="page-container container-fluid">

            <FilterActivitiesBar/>

            <ActivitiesListBox/>

        </div>
    );
};

export default ActivitiesPage;
