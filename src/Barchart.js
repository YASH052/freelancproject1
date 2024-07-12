import React from "react";
import { Chart } from "react-google-charts";


export const options = {
    title: "STP/NSTP (%)",
    chartArea: { width: "60%" },
    colors: ["#008f53", "#ff5e4b"],
    hAxis: {
        title: "Region",
    },
    vAxis: {
        title: "Percentage",
        format: 'percent',
        minValue: 0,
        maxValue: 1,
    },
};

export function Barchart() {
    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="250px"
            data={[
                ["Region", "STP (%)", "NSTP (%)"],
                ["East", 0.50, 0.95],
                ["West", 0.57, 0.93],
                ["North", 0.82, 0.18],
                ["South", 0.52, 0.48],
            ]}
            options={options}
        />
    );
}

export default Barchart;
