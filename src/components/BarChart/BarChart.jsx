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

import {SectionChart,
ContainerChart,
// ChartContainer,
// ColumnContainer,
// BoxLabel
} from
"./BarChart.styled";
import { BarChartMobile } from "./BarChartMobile";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

export const BarChartComp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.visualViewport.width <= 480;

      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobile]);


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
        // barThickness: window.visualViewport.width > 480 ? 38 : 10,
        // barPercentage: 0.6, // Всі стовпці повністю заповнюють доступну ширину
        // categoryPercentage: 0.5, // Змініть це значення для відступів між колонками
      },
    ],
  };

  const options = {
    indexAxis: isMobile ? "y" : "x",
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: isMobile ? false : true,
          color: "#F5F6FB",
          lineWidth: 2,
        },
        ticks: {
          // display: isMobile ? true : false, // Приховати показники діаграми зліва
          display: false, // Приховати показники діаграми зліва
          font: {
            size: window.visualViewport.width <= 768 ?  10 : 12
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: isMobile ? false : true,
          // display: false,
          maxRotation: 0, // Робить підписи під колонками рівними (горизонтальними)
          minRotation: 0,
          font: {
            size: window.visualViewport.width <= 768 ?  10 : 12
          },
        },
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
        padding: {
          top: 10,
        },
        formatter: (value, context) => {
          // const price = context.dataset.data[context.dataIndex];
          // const labels = data.labels;
          // // context.display = 'flex';
          // if (!isMobile) {
          //   return price + " грн";
          // } else {
          //   return `${labels[context.dataIndex]} ${value}грн`;
          // }
          const price = context.dataset.data[context.dataIndex];
          return price + " грн";
        },
      },
    },
    layout: {
      padding: {
        // left: 20, // Відступ ліворуч
        // right: 20, // Відступ праворуч
        top: 20, // Відступ зверху
        // bottom: 20 // Відступ знизу
      },
    },
  };

  // const valueFormatter = (value) => `${value} грн`;

  return (
    <>
    {!isMobile ? (    <SectionChart>
      <ContainerChart>
        <Bar data={data} plugins={[ChartDataLabels]} options={options}/>
      </ContainerChart>
    </SectionChart>) : <BarChartMobile/>}
    </>

  );
    }

