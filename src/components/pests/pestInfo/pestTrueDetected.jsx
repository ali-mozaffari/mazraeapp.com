import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PestSelectFarmModal from "./pestSelectFarm";
import { Field, Form, Formik } from "formik";
import { ArrowSingleDownIcon } from "../../../assets/icon";

const PestTrueDetected = () => {
  const [foundPest, setFoundPest] = useState(0);
  const [selectedFarm, setSelectedFarm] = useState();
  const [farmSelectionModal, setFarmSelectionModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {

    console.log('d')

  };

  //   useEffect(() => {
  //     if(foundPest == 1){
  //         setFarmSelectionModal(true)
  //     }else{
  //         setFarmSelectionModal(false)
  //     }
  //   }, [foundPest])

  return (
    <div>
      <hr />
      <div className="text-center">
        <p style={{ fontWeight: 800 }}>جدول توصیه مصرف سموم</p>
      </div>

      <div className="border rounded-3 overflow-visible">
        <div class="table-responsive-sm px-2">
          <table class="table table-borderless text-center mt-3">
            <thead>
              <tr>
                <th
                  style={{ color: "#54478C", fontWeight: 800 }}
                  className="px-4"
                >
                  نام آفت‌کش
                </th>
                <th
                  style={{ color: "#54478C", fontWeight: 800 }}
                  className="px-4"
                >
                  فرمولاسیون
                </th>
                <th
                  style={{ color: "#54478C", fontWeight: 800 }}
                  className="px-4"
                >
                  دوز مصرفی (per10000Meter){" "}
                </th>
                <th
                  style={{ color: "#54478C", fontWeight: 800 }}
                  className="px-4"
                >
                  واحد
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "#444" }}>
              <tr>
                <td>دیازینون</td>
                <td>امولسیون</td>
                <td>۱.۵</td>
                <td>لیتر</td>
              </tr>
              <tr>
                <td>دیازینون</td>
                <td>امولسیون</td>
                <td>۱.۵</td>
                <td>لیتر</td>
              </tr>
              <tr>
                <td>دیازینون</td>
                <td>امولسیون</td>
                <td>۱.۵</td>
                <td>لیتر</td>
              </tr>
              <tr>
                <td>دیازینون</td>
                <td>امولسیون</td>
                <td>۱.۵</td>
                <td>لیتر</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="small">آیا آفت اکنون در مزرعه شما وجود دارد؟</div>
        <RadioGroup row className="w-50">
          <FormControlLabel
            value="1"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 22,
                  },
                }}
              />
            }
            label="بله"
            labelPlacement="end"
            className="small"
            onChange={(e) => setFoundPest(1)}
          />
          <FormControlLabel
            value="2"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 22,
                  },
                }}
              />
            }
            label="خیر"
            labelPlacement="end"
            className="small"
            onChange={(e) => setFoundPest(2)}
          />
        </RadioGroup>
      </div>

      {foundPest == 1 ? (
        <Formik
          onSubmit={(values, formikHelpers) => {
            onSubmit(values);
            formikHelpers.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <div className="container" style={{ maxWidth: "768px" }}>
              <Form className="row">
                <Box
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    justifyContent: "space-between",
                    padding: "0",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "48%" },
                      position: "relative",
                    }}
                  >
                    <Field
                      name="productGroup"
                      type="button"
                      autoComplete="off"
                      className="search-input"
                    />
                    {!selectedFarm?.name ? (
                      <span
                        className="fieldTitleEmpty"
                        onClick={() => setFarmSelectionModal(true)}
                      >
                        گروه محصول
                      </span>
                    ) : (
                      <span className="fieldTitleFilled">
                        {selectedFarm.name}
                      </span>
                    )}
                    <span className="fieldIcon">
                      <ArrowSingleDownIcon />
                    </span>
                  </Box>
                </Box>
              </Form>
            </div>
          )}
        </Formik>
      ) : null}
      <PestSelectFarmModal
        farmSelectionModal={farmSelectionModal}
        setFarmSelectionModal={setFarmSelectionModal}
        setSelectedFarm={setSelectedFarm}
      />

      <div>
        {foundPest == 0 ? (
          <button className="pest-submit-report-disable w-100 mt-3 mb-4">
            ثبت بازخورد
          </button>
        ) : null}
        {foundPest == 1 ? (
          <button className="pest-submit-report w-100 mt-3 mb-4">
            ثبت بازخورد
          </button>
        ) : null}
        {foundPest == 2 ? (
          <button
            className="pest-submit-back-home w-100 mt-3 "
            onClick={() => navigate("/desises")}
          >
            بازگشت
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PestTrueDetected;
