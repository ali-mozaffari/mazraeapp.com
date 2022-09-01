import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackNewIcon } from "../../assets/pestIcons/arrowBackNew";
import { CheckNewIcon } from "../../assets/pestIcons/checkNewIcon";
import "./../../components/pests/pest.css";
import React, { useState } from "react";
import PestInfoContentCollapse from "../../components/pests/pestInfo/pestInfoContentCollapse";
import PestInfoDetectCollapse from "../../components/pests/pestInfo/pestInfoDetectCollapse";
import PestInfoPreventionCollapse from "../../components/pests/pestInfo/pestInfoPrevention";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PestFalseDetected from "../../components/pests/pestInfo/pestFalseDetected";
import PestTrueDetected from "../../components/pests/pestInfo/pestTrueDetected";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import PestCarousel from "../../components/pests/pestInfo/pestCarusel";

const PestInfoPage = () => {
  const [selectTrueDetected, setSelectedTrueDetected] = useState(0);
  const { state } = useLocation();
  const { pest } = state;
  const navigate = useNavigate();

  return (
    <div className="page-container container-fluid mb-5 pb-4">
      <div className="position-relative">
        <div>
          <PestCarousel images={pest?.image}></PestCarousel>
        </div>
        <div
          className="position-absolute bg-white px-3 py-1"
          style={{
            top: "8px",
            left: "8px",
            borderRadius: "16px",
            color: "#2C689A",
            fontWeight: 800,
          }}
        >
          <span onClick={() => navigate(-1)}>
            <ArrowBackNewIcon />
          </span>
        </div>
      </div>

      <div
        className="bg-white py-3 px-3"
        style={{ borderRadius: "16px", transform: "translate(0px,-10px)" }}
      >
        <h5 style={{ color: "#0DB39F", fontWeight: 800 }}>{pest.fa_title}</h5>

        <hr />

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CheckNewIcon />
            <span>نام علمی:</span>
          </div>
          <div>{pest.en_title}</div>
        </div>

        <hr />

        <PestInfoContentCollapse content={pest.content} />

        <hr />

        <PestInfoDetectCollapse detect={pest.detect} />

        <hr />

        <PestInfoPreventionCollapse solution={pest.solution} />

        <hr />

        <div className="d-flex align-items-center justify-content-between px-2">
          <div className="small">آیا تشخیص درست است؟</div>
          <RadioGroup row>
            <FormControlLabel
              value="1"
              control={
                <Radio
                sx={{
                  "&.Mui-checked": {
                    fontSize: 24,
                    color: '#16DB93'
                  },
                }}
                />
              }
              label="بله"
              labelPlacement="end"
              onChange={(e) => setSelectedTrueDetected(1)}
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      fontSize: 24,
                      color: '#16DB93'
                    },
                  }}
                />
              }
              label="خیر"
              labelPlacement="end"
              onChange={(e) => setSelectedTrueDetected(2)}
            />
          </RadioGroup>
        </div>

        {selectTrueDetected === 2 ? <PestFalseDetected /> : null}

        {selectTrueDetected === 1 ? <PestTrueDetected /> : null}
      </div>
    </div>
  );
};

export default PestInfoPage;
