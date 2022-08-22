import { NoEncryption } from "@mui/icons-material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = "IRANSans";

const RainChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
      tooltip: {
        enabled: false,
        // xAlign: "center",
        // // yAlign: 'bottom',
        // backgroundColor: "#FFF",
        // titleColor: "#676767",
        // displayColors: true,
        // titleFont: {
        //   size: 10,
        // },
        // bodyFont: {
        //   size: 12,
        // },
        // bodyColor() {},
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 5,
        // grace: 3,
        // weight: 3,
        position: "right",
        ticks: {
          callback: function (value, index, values) {
            return `میلی متر ${value}`;
          },
          font: {
            size: 10,
          },
          stepSize: 5
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          // color: '#fff',
          drawBorder: false,
        },
        // position: "top",
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  // const labels = ["شنبه", "یکشنبه", "دوشنبه"];
  // const labels = ["میلی متر", "میلی متر", "میلی متر"];
  // const labels = ["", "", ""];

  const colors = [
    // 'rgb(44,105,154, 0.5)',
    // 'rgb(22,219,147, 0.5)',
    // 'rgb(255,140,25, 0.5)'
    "#2C689A",
  ];

  const data = {
    // labels,
    labels: [`${12} میلی متر`, `${17} میلی متر`, `${7} میلی متر`],
    datasets: [
      {
        data: [12, 17, 7],
        // backgroundColor: colors.map((item) => item),
        backgroundColor: colors,
        borderRadius: 4,
        barThickness: 35,
      },
    ],

    // options: {
    //     layout: {
    //         padding: {left: 50, right: 50}
    //     }
    // },
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default RainChart;
