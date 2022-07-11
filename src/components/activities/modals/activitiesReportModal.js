import React, { useState, memo } from "react";
import { Modal, Button } from "react-bootstrap";
import warning from "./../../../assets/img/warning.png";
import closeNotification from "./../../../assets/img/close-notification.png";
// import { borderBottom, grid, padding } from "@mui/system";
import "./activitiesModal.css";
import { deleteFarmList } from "./../../../redux/slice/farm/farmListBox";
import { useDispatch } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";

const labels = [
  ["", "#505050"],
  ["", "#ff0000"],
  ["", "#07b9a2"],
  ["", "#18cc12"],
];

// https://www.gsma.com/mobileeconomy/#trends
const data = [
  {
    name: "barname",
    numbers: [25, 20, 20, 35],
    color: "#505050",
  },
  {
    name: "jari",
    // numbers: [6, 12, 82, 20],
    color: "#ff0000",
  },
  {
    name: "anjamshode",
    // numbers: [6, 12, 82],
    color: "#07b9a2",
  },
  {
    name: "moavvagh",
    // numbers: [6, 12, 82],
    color: "#18cc12",
  },
];

const dataByName = new Map(
  Object.entries(
    data.reduce((o, c) => {
      o[c.name] = c.numbers;
      return o;
    }, {})
  )
);

const Select = memo(({ data, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)}>
    {data.map(({ name }) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
));

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

const DeleteConfirmationModal = ({
  showModal,
  hideModal,
  confirmModal,
  id,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFarmList(id));
    confirmModal();
    hideModal();
  };

  const [selected, setSelected] = useState(data[0].name);

  const onSelect = (name) => {
    console.log(name);
    setSelected(name);
  };

  return (
    <Modal
      show={showModal}
      sx={{ borderRadius: "25px !important" }}
      style={{ borderRadius: "25px !important" }}
    >
      <div className="modal-header justify-content-start">
        <img
          src={closeNotification}
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            height: "20px",
            cursor: "pointer",
          }}
          onClick={hideModal}
        />

        <h6 style={{ fontWeight: "800", color: "#676767" }}>گزارش فعالیت ها</h6>
      </div>
      <Modal.Body
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "16px",
          color: "#aeaeae",
        }}
      >
        <div className="d-flex justify-content-around">
          {data.map((item) => {
            return (
              <div>
                  <span>{item.name}</span>
                  <span
                    style={{
                      backgroundColor: `${item.color}`,
                      height: "10px",
                      width: "10px",
                      position: "absolute",
                      borderRadius: "5px",
                      margin: "5px"
                    }}
                  ></span>
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
      <Modal.Footer className="justify-content-start border-top-0">
        <Button
          variant="secondary"
          onClick={hideModal}
          style={{
            fontWeight: "800",
            padding: "10px",
            width: "25%",
            borderRadius: "10px",
          }}
        >
          باشه
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;
