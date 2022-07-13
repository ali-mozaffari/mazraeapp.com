import React from 'react';
import EditActivityForm from "../../components/activities/editActivityForm";
import EditActivityTopBar from '../../components/activities/editActivityTopBar';
const EditActivityPage = () => {
    return (

        <div className="page-container container-fluid">

            <EditActivityTopBar/>

            <hr/>

            <EditActivityForm/>

        </div>
    );
};

export default EditActivityPage;
