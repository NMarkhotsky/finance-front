import {
  Chart as ChartJS,
  BarElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useState, useEffect } from "react";
import { SectionChart, ContainerChart } from "./BarChart.styled";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export const BarChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
      console.log(window.innerWidth);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  console.log("isMobile", isMobile);

  const dataMoney = [1700, 1500, 800, 500, 300, 4800, 4500, 3200, 2100, 1800];
  const sortData = dataMoney.sort((a, b) => b - a);

  const labelsList = [
    "Риба",
    "М'ясо",
    "Ковбаса",
    "Ліки",
    "Комуналка",
    "Хотєлки",
    "Риба",
    "М'ясо",
    "Ковбаса",
    "Ліки",
  ];

  const data = {
    labels: labelsList,
    datasets: [
      {
        label: "Chart",
        backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
        borderWidth: 0,
        borderRadius: 10,
        data: sortData,
        barThickness: 38,
        // barPercentage: 0.6, // Всі стовпці повністю заповнюють доступну ширину
        // categoryPercentage: 0.5, // Змініть це значення для відступів між колонками
      },
    ],
  };

  const options = {
    indexAxis: isMobile ? 'y' : 'x',
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          // drawOnChartArea: false,
          color: "#F5F6FB",
          lineWidth: 2,
        },
        ticks: {
          display: isMobile ? false : true,
          // display: false, // Приховати показники діаграми зліва
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0, // Робить підписи під колонками рівними (горизонтальними)
          minRotation: 0,
        }
      },
  
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "#52555F",
        anchor: "end",
        align: "top",
        offset: 4,
        padding: 0,
        formatter: (value, context) => {
          const price = context.dataset.data[context.dataIndex];
          return price + " грн";
        },
      },
    },
  };

  return (
    <SectionChart>
      <ContainerChart>
        <Bar data={data} plugins={[ChartDataLabels]} options={options}/>
      </ContainerChart>
    </SectionChart>
  );
};