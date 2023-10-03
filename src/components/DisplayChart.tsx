import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

interface ChartProps {
  dataset: {
    labels: string[];
    data: number[];
    backgroundColor: string[];
  };
  chartType: 'bar' | 'line' | 'pie' | 'doughnut';
}

const DisplayChart: React.FC<ChartProps> = ({ dataset, chartType }) => {
  const chartData = {
    labels: dataset.labels,
    datasets: [
      {
        label: dataset.labels[0],
        data: dataset.data,
        backgroundColor: dataset.backgroundColor,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  let ChartTypeComponent;

  switch (chartType) {
    case 'bar':
      ChartTypeComponent = Bar;
      break;
    case 'line':
      ChartTypeComponent = Line;
      break;
    case 'pie':
      ChartTypeComponent = Pie;
      break;
    case 'doughnut':
      ChartTypeComponent = Doughnut;
      break;
    default:
      ChartTypeComponent = Bar;
  }

  return (
    <div className="chart-container">
      <ChartTypeComponent data={chartData} options={chartOptions} />
    </div>
  );
};

export default DisplayChart;
