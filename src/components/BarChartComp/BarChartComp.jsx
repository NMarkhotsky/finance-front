import { useEffect, useState, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
} from "recharts";
import { getExpensesDescription } from "../../services/expensesApi";
import { getIncomeDescription } from "../../services/incomeApi";
import { useMyContext } from "../../utils";
import { SectionDesktopChart } from "./BarChartComp.styled";

const colors = ["#FF751D", "#FFDAC0", "#FFDAC0"];

const getColor = (index) => {
  return colors[index % colors.length];
};

let ctx;

const measureText14HelveticaNeue = (text, fontSize) => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
    ctx.font = `${fontSize}px 'Helvetica Neue'`;
    return ctx.measureText(text).width;
  }

  return ctx.measureText(text).width;
};

export const BarChartComp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dataTransactions, setDataTransactions] = useState([]);
  
  const { itemCategory } = useMyContext();

  useEffect(() => {
    if (Object.keys(itemCategory).length === 0 || !itemCategory) {
      return;
    }
  }, [itemCategory]);

  useEffect(() => {
    (async () => {

      if (itemCategory.date && Object.keys(itemCategory).length !== 0) {
        if (itemCategory.activeTab === "expenses") {
          const { report } = await getExpensesDescription(
            { category: itemCategory.activeCategory },
            itemCategory.date
          );
          setDataTransactions(report);
        } else {
          const { report } = await getIncomeDescription(
            { category: itemCategory.activeCategory },
            itemCategory.date
          );
          setDataTransactions(report);
        }
      }
    
    })();
  }, [itemCategory]);

  useEffect(() => {
    if (dataTransactions.length === 0) {
      return;
    }
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.visualViewport.width <= 767;

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

  const modifiedData = dataTransactions.map((item) => {
    const words = item.description.split(" ");
    const modifiedSum = +item.total_sum.slice(0, -3);
    return { ...item, description: words[0], total_sum: modifiedSum };
  });

  const maxTextWidth = useMemo(
    () =>
      dataTransactions.reduce((acc, cur) => {
        const value = cur["total_sum"];
        const valueSlice = value.slice(0, -3);
        const width = measureText14HelveticaNeue(valueSlice);
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    [dataTransactions]
  );

  return (
    <div>
      {isMobile ? (
        <ResponsiveContainer
          width="100%"
          height={50 * modifiedData.length}
          debounce={50}
          style={{
            paddingTop: 22,
            paddingBottom: 20,
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          <BarChart data={modifiedData} layout="vertical">
            <XAxis hide axisLine={false} type="number" />
            <YAxis
              yAxisId={0}
              dataKey="description"
              type="category"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value}
              padding={{ top: 5 }}
              dx={8}
              textAnchor="start"
              dy={-16}
            />
            <YAxis
              orientation="right"
              yAxisId={1}
              dataKey="total_sum"
              type="category"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value}
              padding={{ top: 5 }}
              unit=" грн"
              textAnchor="end"
              dy={-14}
            />
            <Bar dataKey="total_sum" minPointSize={4} barSize={15} barGap={0}>
              {modifiedData.map((d, idx) => (
                <Cell key={idx} fill={getColor(idx)} radius={[0, 10, 10, 0]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <SectionDesktopChart>
          <ResponsiveContainer width="100%" height={425}>
            <BarChart
              data={modifiedData}
              margin={{ left: 10, right: maxTextWidth, top: 20 }}
              layout="horizontal"
            >
              <XAxis
                axisLine={false}
                type="category"
                dataKey="description"
                tickLine={false}
                align="center"
              />
              <YAxis
                axisLine={false}
                type="number"
                dataKey="total_sum"
                tickLine={false}
                hide
              />
              <CartesianGrid
                vertical={false}
                horizontalCoordinatesGenerator={({ width }) => {
                  const lines = [];
                  for (let i = 40; i < width; i += 40) {
                    lines.push(i);
                  }
                  return lines;
                }}
                style={{ strokeWidth: "2px", stroke: "#F5F6FB" }}
              />
              <Bar
                style={{ zIndex: 2 }}
                dataKey="total_sum"
                minPointSize={4}
                barSize={38}
                label={{
                  position: "top",
                  fill: "#52555F",
                  dy: -5,
                  content: (labelProps) => (
                    <text
                      x={labelProps.x}
                      y={labelProps.y}
                      fill="black"
                      dy={-10}
                    >
                      {`${labelProps.value} грн`}
                    </text>
                  ),
                }}
                name="total_sum"
              >
                {modifiedData.map((d, idx) => {
                  return (
                    <Cell
                      key={idx}
                      fill={getColor(idx)}
                      radius={[10, 10, 0, 0]}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionDesktopChart>
      )}
    </div>
  );
};
