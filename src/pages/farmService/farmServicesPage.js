import React from 'react';
import FilterFarmServiceBar from "../../components/farmServices/filterFarmServiceBar";
import FarmServicesListBox from "../../components/farmServices/farmServicesListBox";

const FarmServicesPage = () => {
    return (
        <div className="page-container container-fluid">

            <FilterFarmServiceBar/>

            <FarmServicesListBox/>
        </div>
    );
};

export default FarmServicesPage;
