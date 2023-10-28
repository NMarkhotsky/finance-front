import { useMemo} from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  // Text
} from "recharts";

const colors = ["#FF751D", "#FFDAC0", "#FFDAC0"];

const getColor = (index) => {
  
  return colors[index % colors.length];
};

const data = [
  { id: 1, name: "Риба хотіла лежати і нікого не чіпала", price: 1500 },
  { id: 2, name: "М'ясо любить тишу", price: 800 },
  { id: 3, name: "Ковбаса", price: 1700 },
  { id: 4, name: "Ліки", price: 1800 },
  { id: 5, name: "Комуналка", price: 3200 },
  { id: 6, name: "Хотєлки", price: 500 },
  { id: 7, name: "Окунь", price: 4500 },
  { id: 8, name: "Труси", price: 300 },
  { id: 9, name: "Пальто", price: 5000 },
  { id: 10, name: "Борошно", price: 2100 },
];

const sortedData = [...data].sort((a, b) => b.price - a.price);

const modifiedData = sortedData.map((item) => {
  const words = item.name.split(" ");
  return { ...item, name: words[0] };
});

const prices = modifiedData.map(item => item.price);
const maxPrice = Math.max(...prices);

const number = maxPrice / 100; 

const dataWithWidth = modifiedData.map(d => ({ ...d, width: d.price / number }));

const widthAxis = dataWithWidth.map((item) => item.width);


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

// const BAR_AXIS_SPACE = 10;

export const BarChartMobile = () => {

  const maxTextWidth = useMemo(
    () =>
      data.reduce((acc, cur) => {
        const value = cur["price"];
        const width = measureText14HelveticaNeue(value);
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    []
  );


  return (
    <ResponsiveContainer width="100%" height={50 * data.length} debounce={50}>
      <BarChart
        data={dataWithWidth}
        layout="vertical"
        margin={{ left: 10, right: maxTextWidth}}
      >
        <XAxis hide axisLine={false} type="number" />
          <YAxis
            yAxisId={0}
            dataKey="name"
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
          // orientation="left"
          orientation="right"
          yAxisId={1}
          dataKey="price"
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value}
          mirror
          padding={{ top: 5 }}
          
          unit=" грн"
          // dx={120}
          textAnchor="end"
          dy={-14}
        />
        <Bar dataKey="price" minPointSize={2} barSize={12} barGap={0}>
          {dataWithWidth.map((d, idx) => {
            return (
              <Cell
                key={d.name}
                fill={getColor(idx)}
                radius={[0, 10, 10, 0]}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
