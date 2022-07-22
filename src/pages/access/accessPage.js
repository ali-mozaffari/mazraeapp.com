import React from 'react';

import AccessTopBar from '../../components/access/accessTopBar';
import AccessListBox from '../../components/access/accessListBox';



const AccessPage = () => {

    return (
        <div className="page-container container-fluid">

            <AccessTopBar/>

            <AccessListBox/>

        </div>
    );
};

export default AccessPage;
