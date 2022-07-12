import React, { useEffect } from 'react';
import FilterActivitiesBar from "../../components/activities/filterActivitiesBar";
import ActivitiesListBox from "../../components/activities/activitiesListBox";



const ActivitiesPage = () => {

    return (
        <div className="page-container container-fluid">

            <FilterActivitiesBar/>

            <ActivitiesListBox/>

        </div>
    );
};

export default ActivitiesPage;
