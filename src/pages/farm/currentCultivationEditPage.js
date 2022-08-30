import React from "react";
import CurrentCultivationEdit from "../../components/farm/currentCultivation/currentCultivationEdit";
import MainPageHeader from "../../components/farm/mainPageHeader";
const CurrentCultivationEditPage = () => {
  return (
    <div className="page-container container-fluid">
      <MainPageHeader/>
      <CurrentCultivationEdit />
    </div>
  );
};
export default CurrentCultivationEditPage;
