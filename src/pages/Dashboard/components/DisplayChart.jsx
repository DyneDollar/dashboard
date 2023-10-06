// Chart.js
import React from "react";
import Chart from "react-apexcharts";

const DisplayChart = ({ chartType="line", timestamps, priceData }) => {

  const chartOptions = {
    chart: {
      id: "price-chart"
    },
    xaxis: {
      categories: timestamps,
    }
  };
  const chartSeries = [
    {
      name: "Price",
      data: priceData,
    },
  ];
  

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type={chartType}
      width="100%"
    />
  );
};

export default DisplayChart;
