import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    [">17 Hrs", 17],
    ["<2 Hrs", 2],
    ["7 Hrs", 7], 
];

export const options = {
    title: "Closed Call Response Time",
    pieHole: 0.7,
    is3D: false,
};

export function Donutchart() {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="250px"
            data={data}
            options={options}
        />
    );
}
export default Donutchart
