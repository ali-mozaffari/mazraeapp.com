import React from 'react';
import EditAccessTopBar from "../../components/access/editAccessTopBar";
import EditAccessForm from "../../components/access/editAccessForm";
const EditAccessPage = () => {
    return (

        <div className="page-container container-fluid">

            <EditAccessTopBar/>

            <EditAccessForm/>

        </div>
    );
};

export default EditAccessPage;
