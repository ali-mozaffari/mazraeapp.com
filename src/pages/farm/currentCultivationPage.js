import React from "react";
import CurrentCultivation from "../../components/farm/currentCultivation/currentCultivation";
import MainPageHeader from "../../components/farm/mainPageHeader";
const CurrentCultivationPage = () => {
  return (
    <div className="page-container container-fluid">
      <MainPageHeader/>
      <CurrentCultivation />
    </div>
  );
};
export default CurrentCultivationPage;
