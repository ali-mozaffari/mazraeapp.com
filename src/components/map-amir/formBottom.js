import React, { useEffect, useState } from "react";
import getLocation from "../farm/utils/getLocation";
import {
  DeleteIcon,
  InfoIcon,
  LocationIcon,
  PolygonIcon,
} from "../../assets/icon";
import InfoModal from "../farm/modals/infoModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFarm, clearFarm } from "../../redux/slice/farm/addFarm";
import * as turf from "@turf/turf";
import Loading from "../loading/loading";
import { startLoading, stopLoading } from "../../redux/slice/loading/loading";

const FormBottom = ({
  setCenter,
  area,
  addPoly,
  setAddPoly,
  pointsState,
  setPointsState,
  setInfoModalOpen,
  infoModalOpen,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addFarm);
  const navigate = useNavigate();
  const [farmName, setFarmName] = useState("");

  useEffect(() => {
    if (data["loading"]) {
      dispatch(startLoading(data["loading"]));
    } else {
      if (data["data"]) {
        if (Number(data["status"]) === 400) {
          dispatch(startLoading(data["loading"]));
          toast.error(data["data"]["data"]["message"], {
            position: "top-center",
            theme: "dark",
          });
          // dispatch(clearFarm())
        }
        // if (data['data']['guid']) {
        //     dispatch(startLoading(data['loading']))
        //     toast.success('مزرعه با موفقیت ایجاد شد', {position: 'top-center', theme: 'dark'})
        //     // dispatch(clearFarm())
        //     navigate('/home')
        // }
      }
    }
  }, [data]);

  const handleInfoModalClickOpen = () => {
    setInfoModalOpen(true);
  };

  const handleInfoModalClose = () => {
    setInfoModalOpen(false);
  };

  const submitHandler = () => {
    if (pointsState.length > 2) {
      if (farmName.length > 2) {
        if (area / 1000 > 1000) {
          toast.error("مساحت انتخاب شده بیشتر از ۱۰۰۰ هکتار می باشد", {
            position: "top-center",
            theme: "dark",
          });
          return;
        }

        const points = pointsState;

        let fd = {
          location: `POINT(${points[0]["lat"]} ${points[0]["lng"]})`,
        };

        let _points = "";
        pointsState.forEach((item) => {
          _points = _points
            ? `${_points},${item["lat"]}-${item["lng"]}`
            : `${item["lat"]}-${item["lng"]}`;
        });

        const new_farm = {
          points_array: _points,
          location: fd.location,
          masahat: Number(area / 1000).toFixed(2),
          name: farmName,
        };

        // dispatch(startLoading(true))
        dispatch(addFarm(new_farm));
      } else {
        toast.error("نام مزرعه خود را وارد نمایید", {
          position: "top-center",
          theme: "dark",
        });
      }
    } else {
      toast.error("مختصات مزرعه خود را وارد نمایید", {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <div className="map-tools">
        <div
          style={{
            width: "100px",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <button
            className="btn btn-tools"
            type="button"
            onClick={() => {
              getLocation({ setCenter });
            }}
          >
            <LocationIcon />
          </button>
          <button
            className={addPoly ? "btn btn-tools-checked" : "btn btn-tools"}
            onClick={() => setAddPoly(!addPoly)}
          >
            {addPoly ? <PolygonIcon fill={"white"} /> : <PolygonIcon />}
          </button>

          {pointsState.length > 3 ? (
            <button
              className="btn btn-tools"
              onClick={() => {
                setPointsState([]);
              }}
            >
              <DeleteIcon fill={"#000"} />
            </button>
          ) : null}
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <input
                className="farm-name-input w-100"
                placeholder="نام مزرعه ..."
                onChange={(e) => setFarmName(e.target.value)}
              />
            </div>
            <div className="col-md-5 mx-auto d-md-block d-flex justify-content-between mt-3 mt-md-0">
              <button
                className="btn-farm-add mx-md-2 py-2 py-md-0"
                onClick={submitHandler}
              >
                ذخیره
              </button>
              <button
                className="btn-farm-cancel mx-md-2 py-2 py-md-0"
                onClick={() => navigate("/home")}
              >
                بازگشت
              </button>
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-tools h-100 d-none d-md-block mx-md-2 py-2 py-md-0"
                onClick={handleInfoModalClickOpen}
              >
                <InfoIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <InfoModal open={infoModalOpen} handleClose={handleInfoModalClose} />
    </div>
  );
};

export default FormBottom;
