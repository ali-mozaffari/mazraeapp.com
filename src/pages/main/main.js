import React from "react";
import MainPageHeader from "../../components/main/mainPageHeader";
import FarmListBox from "../../components/main/farmListBox";

const Main = () => {
    return (
        <div className="page-container container-fluid pb-5 mb-5">

                <MainPageHeader/>

                <FarmListBox/>

        </div>
    );
};

export default Main;
