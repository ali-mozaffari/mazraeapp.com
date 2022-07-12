import React, { useState, memo } from "react";
import { Modal, Button } from "react-bootstrap";
import warning from "./../../../assets/img/warning.png";
import closeNotification from "./../../../assets/img/close-notification.png";
// import { borderBottom, grid, padding } from "@mui/system";
import "./activitiesmodal.css";
import { deleteFarmList } from "./../../../redux/slice/farm/farmListBox";
import { useDispatch, useSelector } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";


/* Pie Chart */
const labels = [
  ["", "#16db93"],
  ["", "#f29e4c"],
  ["", "#2c699a"],
  ["", "#f2634c"],
];

// https://www.gsma.com/mobileeconomy/#trends
// const items = [
//   {
//     name: "anjamshode",
//     fName: 'انجام شده',
//     numbers: [25, 20, 20, 35],
//     color: "#16db93",
//     // count: {countVaziat(anjamshode)},
//   },
//   {
//     name: "barname",
//     fName: 'برنامه',
//     // numbers: [25, 20, 20, 35],
//     color: "#f29e4c",
//   },
//   {
//     name: "jari",
//     fName: 'جاری',
//     // numbers: [6, 12, 82, 20],
//     color: "#2c699a",
//   },
//   {
//     name: "moavvagh",
//     fName: 'معوق',
//     // numbers: [6, 12, 82],
//     color: "#f2634c",
//   },
// ];

// const dataByName = new Map(
//   Object.entries(
//     items.reduce((o, c) => {
//       o[c.name] = c.numbers;
//       return o;
//     }, {})
//   )
// );

/* ---------------Not Usable----------------- */
// const Select = memo(({ data, onSelect }) => (
//   <select onChange={(e) => onSelect(e.target.value)}>
//     {data.map(({ name }) => (
//       <option key={name} value={name}>
//         {name}
//       </option>
//     ))}
//   </select>
// ));

const Chart = memo(({ data }) => {
  const pieChartData = data.map((value, index) => ({
    title: labels[index][0],
    value,
    color: labels[index][1],
  }));

  return (
    <div>
      <PieChart
        paddingAngle={5}
        labelStyle={{
          fontSize: "5px",
          fill: "#000",
        }}
        labelPosition={87}
        lineWidth={25}
        label={({ dataEntry }) =>
          `${dataEntry.title} ${Math.round(dataEntry.percentage)}%`
        }
        data={pieChartData}
      />
    </div>
  );
});

const ActivitiesReportModal = ({
  showModal,
  hideModal,
  confirmModal,
  id,
  items,
  dataByName,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFarmList(id));
    confirmModal();
    hideModal();
    items();
    dataByName();
  };

  const [selected, setSelected] = useState(items[0].name);
  const onSelect = (name) => {
    console.log(name);
    setSelected(name);
  };
  // console.warn(items)
  // console.log(items)


  return (
    <Modal show={showModal}>
      <div className="modal-header justify-content-start">
        <img
          src={closeNotification}
          style={{
            position: "absolute",
            left: "20px",
            top: "15px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={hideModal}
        />

        <h6 style={{ fontWeight: "800", color: "#676767" }}>گزارش فعالیت ها</h6>
      </div>
      <hr />
      <Modal.Body
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "16px",
          color: "#aeaeae",
        }}
      >
        <div className="d-flex justify-content-around">
          {items.map((item) => {
            return (
              <div style={{ color: "#676767" }}>
                <div>{item.count}</div>
                <div>
                  <div
                    style={{
                      backgroundColor: `${item.color}`,
                      height: "10px",
                      width: "10px",
                      position: "absolute",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  ></div>
                  <div style={{ paddingRight: "20px" }}>
                    {item.fName}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <Select data={data} onSelect={onSelect} /> */}
        <div style={{ padding: "20%" }}>
          <Chart
            data={dataByName.has(selected) ? dataByName.get(selected) : []}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-top-0">
        <Button
          onClick={hideModal}
          style={{
            fontWeight: "800",
            padding: "15px",
            width: "90%",
            borderRadius: "10px",
            backgroundColor: "#B7B7B7",
            border: "none",
          }}
        >
          باشه
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActivitiesReportModal;
