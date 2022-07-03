import React from "react";
import MainPageHeader from "../../components/farm/mainPageHeader";
import FarmListBox from "../../components/farm/farmListBox";

const Main = () => {
    return (
        <div className="page-container container-fluid pb-5 mb-5">

                <MainPageHeader/>

                <FarmListBox/>

        </div>
    );
};

export default Main;
