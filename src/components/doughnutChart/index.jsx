import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing the "auto" version of Chart.js

const DoughnutChart = () => {
  const chartRef = useRef();
  let chartInstance = null;

  useEffect(() => {
    initializeChart();

    return () => {
      destroyChart();
    };
  }, []);

  const initializeChart = () => {
    const chartCanvas = chartRef.current.getContext('2d');

    chartInstance = new Chart(chartCanvas, config);
  };

  const destroyChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40, 50],
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  };


  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets[0].data = [ // Change data values here
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ];
        chart.update();
      },
    },
    // Define more actions here
    // ...
  ];

  return (
    <div>
      <canvas ref={chartRef} className='w-[213px] h-[213px]' />
      <div>
        {actions.map((action, index) => (
          <button key={index} onClick={() => action.handler(chartInstance)}>
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
