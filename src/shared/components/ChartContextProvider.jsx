import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ChartContext = createContext();

export const useChartContext = () => useContext(ChartContext);

export const ChartContextProvider = ({ children }) => {
  
  const [chartData, setChartData] = useState(null);

  const setChartDataHandler = (data) => {
    setChartData(data);
  };

  console.log("chartData", chartData);

  return (
    <ChartContext.Provider value={{ chartData, setChartDataHandler }}>
      {children}
    </ChartContext.Provider>
  );
};

ChartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}