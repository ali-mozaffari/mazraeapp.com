import React, { useEffect, useState } from "react";
import App2 from "./chart";
import filterIcon from "../../assets/img/filterIcon.png";
import sortIcon from "../../assets/img/sort-down.svg";
import ForecastCultivationProgressItem from "./progressBar";
import { CONST } from "../../assets/strings/strings";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../tools/breadcrumbs";

const MainPageHeader = () => {
  const data = [
    {
      id: 2198,
      cultivation_list: [
        {
          id: 904,
          mahsul: {
            id: 2,
            guid: "7772d0ae-4630-468f-b6c0-daa42755a274",
            title: "جو",
            content: "یکی از اصلی ترین اعضای خانواده غلات",
            color: "#3BB9FF",
            product_id: 104,
            image:
              "/media/entity_files/7772d0ae-4630-468f-b6c0-daa42755a274.jpg",
            category: 3,
          },
          sal: {
            id: 5,
            guid: "9d6ea659-63f7-4c7e-ba57-a7ec477c2496",
            title: "1400-1401",
            year_date: "2022-03-21",
            start_date: "2021-08-23",
            end_date: "2022-11-21",
            position: 1,
            this_year: true,
            is_active: true,
          },
          mah_kasht: {
            id: 6,
            guid: "5157782c-813f-4ecd-b3a6-d44fb47ee4d8",
            title: "شهریور",
            number: 6,
          },
          mah_bardasht: {
            id: 8,
            guid: "80f7ebf6-c8b3-4dc3-9e1c-1227baabaa93",
            title: "آبان",
            number: 8,
          },
          points_list: [
            {
              id: 1093,
              utm: [
                "541505.8216011396-3939350.0807735412-39S",
                "542806.8920120428-3937993.7743115905-39S",
                "547242.999234561-3928488.615818296-39S",
                "544587.2063333561-3936531.4243215634-39S",
              ],
              guid: "06ec8897-e8bd-4906-b5c3-3a443c2fb022",
              points: [
                "35.59701902776685-51.45820140838624",
                "35.58473476410108-51.472492218017585",
                "35.49883191351043-51.52090072631837",
                "35.57147122743853-51.49206161499024",
              ],
            },
          ],
          guid: "45bdd738-34d8-4195-952d-983ae9e69e31",
          sathe_zire_kesht: "547.76",
          points: null,
          amalkard: null,
          gheymat: null,
          level: 1,
          ragham_mahsul: null,
          ragham_mahsul_org: "",
          vaziat: "tasmim_be_kesht",
          planting_datetime: "2021-09-07",
          harvest_datetime: "2022-11-16",
          farm: 2198,
        },
      ],
      ayesh_sal: [],
      utm: [
        "541505.8216011396-3939350.0807735412-39S",
        "542806.8920120428-3937993.7743115905-39S",
        "547242.999234561-3928488.615818296-39S",
        "544587.2063333561-3936531.4243215634-39S",
      ],
      guid: "00508bc0-a0bc-43b6-a2a2-e7ea0a66cca6",
      masahat: 547.76,
      abiyari_type: "",
      manbae_ab: "chah",
      name: "test",
      systeme_abyari: false,
      arzeshe_mazrae_hektar: "",
      arzeshe_mazrae_kol: "",
      malekiate_mazrae: [],
      malek_name: "",
      malek_address: "",
      malek_phone: "",
      malek_ejare: "",
      points: [
        "35.59701902776685-51.45820140838624",
        "35.58473476410108-51.472492218017585",
        "35.49883191351043-51.52090072631837",
        "35.57147122743853-51.49206161499024",
      ],
      location: "SRID=4326;POINT (51.45820140838624 35.59701902776685)",
      location_key: "210841",
      credit: 250000,
      owner: 2223,
    },
    {
      id: 2232,
      cultivation_list: [
        {
          id: 902,
          mahsul: {
            id: 19,
            guid: "289502d7-8477-4139-99ca-4641b05722f5",
            title: "پياز",
            content: "",
            color: "#FAAFBE",
            product_id: 158,
            image: null,
            category: null,
          },
          sal: {
            id: 5,
            guid: "9d6ea659-63f7-4c7e-ba57-a7ec477c2496",
            title: "1400-1401",
            year_date: "2022-03-21",
            start_date: "2021-08-23",
            end_date: "2022-11-21",
            position: 1,
            this_year: true,
            is_active: true,
          },
          mah_kasht: {
            id: 6,
            guid: "5157782c-813f-4ecd-b3a6-d44fb47ee4d8",
            title: "شهریور",
            number: 6,
          },
          mah_bardasht: {
            id: 8,
            guid: "80f7ebf6-c8b3-4dc3-9e1c-1227baabaa93",
            title: "آبان",
            number: 8,
          },
          points_list: [
            {
              id: 1091,
              utm: [
                "540043.017071811-3939591.08772604-39S",
                "540320.2629519786-3939317.548516027-39S",
                "539814.6159950615-3934146.915720596-39S",
                "537899.1910921624-3938196.081649205-39S",
              ],
              guid: "136e2854-88a2-4518-b4df-3ffd31cb5376",
              points: [
                "35.59925232772949-51.442065238952644",
                "35.596774756802695-51.44511222839356",
                "35.55017516833674-51.439275741577156",
                "35.58675900543163-51.418333053588874",
              ],
            },
          ],
          guid: "1269035a-7f28-4ca3-879f-7a859c7959ad",
          sathe_zire_kesht: "646.72",
          points: null,
          amalkard: null,
          gheymat: null,
          level: 1,
          ragham_mahsul: null,
          ragham_mahsul_org: "",
          vaziat: "tasmim_be_kesht",
          planting_datetime: "2021-08-23",
          harvest_datetime: "2022-11-21",
          farm: 2232,
        },
      ],
      ayesh_sal: [],
      utm: [
        "540043.017071811-3939591.08772604-39S",
        "540320.2629519786-3939317.548516027-39S",
        "539814.6159950615-3934146.915720596-39S",
        "537899.1910921624-3938196.081649205-39S",
      ],
      guid: "c934f979-7e3d-4261-b6f9-7d0a3d0eeb2a",
      masahat: 646.72,
      abiyari_type: "",
      manbae_ab: "chah",
      name: "test2",
      systeme_abyari: false,
      arzeshe_mazrae_hektar: "",
      arzeshe_mazrae_kol: "",
      malekiate_mazrae: [],
      malek_name: "",
      malek_address: "",
      malek_phone: "",
      malek_ejare: "",
      points: [
        "35.59925232772949-51.442065238952644",
        "35.596774756802695-51.44511222839356",
        "35.55017516833674-51.439275741577156",
        "35.58675900543163-51.418333053588874",
      ],
      location: "SRID=4326;POINT (51.44206523895264 35.59925232772949)",
      location_key: "210841",
      credit: 250000,
      owner: 2223,
    },
  ];

  const navigate = useNavigate();
  const path = window.location.pathname;
  console.log(window.location.pathname);
  console.log(window.location.href);

  const [crumbs, setCrumbs] = useState();
  const pathName = (crumbs) => {
    switch (crumbs) {
      case "/add-cultivation":
        return "افزودن کشت";
      case "/edit-farm":
        return "ویرایش مشخصات مزرعه";
      case "/edit-codination-farm":
        return "ویرایش مختصات مزرعه";
      case "/cultivation":
        return "کشت های کنونی مزرعه";
      case "/history":
        return "تاریخچه کشت های مزرعه";
      default:
        return "";
    }
  };
  console.log(pathName(crumbs));

  useEffect(() => {
    setCrumbs(path);
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ fontWeight: "bolder" }}>
          <span>
            {pathName(crumbs) === "" ? (
              <span style={{ fontWeight: 800 }}>مزرعه من</span>
            ) : (
              <span style={{ color: "#A2A2A2", fontWeight: 800 }}>
                مزرعه من /{" "}
              </span>
            )}
          </span>
          <span style={{ fontWeight: 800 }}>{pathName(crumbs)}</span>
          {/* <BreadCrumbs crumbs={crumbs} /> */}
        </div>

        {path === "/" || path === "/home" ? (
          <div>
            <button
              className="btn-dark-blue mx-1"
              onClick={() => navigate("/add-farm")}
            >
              مزرعه جدید
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn-light-pink mx-1"
              style={{ color: "#F1634B", backgroundColor: "#FED7D0" }}
              onClick={() => navigate("/")}
            >
              بازگشت
            </button>
          </div>
        )}
      </div>

      <ForecastCultivationProgressItem
        main={true}
        all
        // title={"مجموع مزارع"}
        // data={data}
        data={calculateFarmsProgressData(data)}
      />

      <hr />

      {path === "/" || path === "/home" ? (
        <div className="row d-flex align-items-center">
          <div className="col-md-6 mx-auto">
            <input
              className="search-input w-100"
              type="search"
              placeholder="جستجو . . ."
            />
          </div>
          <div className="col-md-6 mx-auto d-flex justify-content-around mt-3 mt-md-0">
            <div>
              <img src={filterIcon} alt="filter" className="mx-2" />
              <p className="d-inline">فیلتر کردن</p>
            </div>
            <div>
              <img src={sortIcon} alt="filter" className="mx-2" />
              <p className="d-inline">مرتب سازی</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );

  function calculateFarmsProgressData(farms) {
    let data = {
      masahat: 0,
      years: [],
      mahsuls: [],
    };
    farms.forEach((item) => {
      data.masahat = data.masahat + item.masahat;
      item.cultivation_list.forEach((element) => {
        if (
          element.sal.title === CONST.LAST_YEAR_TITLE &&
          element.level === 1
        ) {
          let indexOfExist;
          data.mahsuls.forEach((el, index) => {
            if (el.product_id === element.mahsul.product_id) {
              indexOfExist = index;
            }
          });

          if (typeof indexOfExist === "number") {
            data.mahsuls[indexOfExist] = {
              ...data.mahsuls[indexOfExist],
              masahat:
                data.mahsuls[indexOfExist].masahat +
                parseFloat(element.sathe_zire_kesht),
            };
          } else {
            data.mahsuls.push({
              ...element.mahsul,
              masahat: parseFloat(element.sathe_zire_kesht),
            });
          }
        }
      });
    });

    return data;
  }
};

export default MainPageHeader;
