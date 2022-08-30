import React from "react";
import CultivationHistory from "../../components/farm/cultivationHistory/cultivationHistory";
import MainPageHeader from "../../components/farm/mainPageHeader";

const CultivationHistoryPage = () => {
  return (
    <div className="page-container container-fluid">
      <MainPageHeader/>
      <CultivationHistory />
    </div>
  );
};

export default CultivationHistoryPage;
