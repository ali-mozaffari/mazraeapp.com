import React from "react";
import EditFarmInfo from "../../components/farm/editFarm/editFarmInfo";
import MainPageHeader from "../../components/farm/mainPageHeader";
const EditFarmInfoPage = () => {
  return (
    <div className="page-container container-fluid">
      <MainPageHeader/>
      <EditFarmInfo />
    </div>
  );
};

export default EditFarmInfoPage;
