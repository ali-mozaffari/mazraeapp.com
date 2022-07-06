import React from 'react';
import AddActivityTopBar from "../../components/activities/addActivityTopBar";
import AddActivityForm from "../../components/activities/addActivityForm";
const AddActivityPage = () => {
    return (

        <div className="page-container container-fluid">

            <AddActivityTopBar/>

            <hr/>

            <AddActivityForm/>

        </div>
    );
};

export default AddActivityPage;
