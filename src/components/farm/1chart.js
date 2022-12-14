/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// this file not used any where yet

class Chart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "گزارش مجموع مزارع",
				fontFamily:'IRANSans'
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabelFontFamily:'IRANSans',
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "گندم" },
					{ y: 49, label: "جغندر" },
					{ y: 9, label: "جو" },
					{ y: 5, label: "لوبیا" },
					{ y: 19, label: "گوجه فرنگی" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart
