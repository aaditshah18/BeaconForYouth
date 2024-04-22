import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Chart.js needs to be imported to register the controllers, elements, scales, and plugins.

interface PieChartProps {
  data: {
    pending: number;
    inProgress: number;
    completed: number;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        label: 'Complaints',
        data: [data.pending, data.inProgress, data.completed],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
