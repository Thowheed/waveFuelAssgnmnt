import Chart from "react-google-charts";
import "./chart.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const GoolgeChart = (props: any) => {
  const { currentState } = props;
  const [weatherData, setWeatherData] = useState<any>(null);
  const fetchData = async () => {
    const getdata = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=${currentState}`,
      {
        headers: {
          key: "59653db75bde43c2b6492010240510",
        },
      }
    );
    setWeatherData(getdata);
  };

  useEffect(() => {
    fetchData();
  }, [currentState]);

  const data = [
    ["Parameter", "Value"],
    [
      "Pressure (in)",
      Math.max(-Infinity, weatherData?.data?.current?.humidity),
    ],
    [
      "Temperature (°F)",
      Math.max(-Infinity, weatherData?.data?.current?.temp_f),
    ],
    [
      "Humidity (%)",
      Math.max(-Infinity, weatherData?.data?.current?.pressure_in),
    ],
  ];

  const options = {
    title: " Weather Readings",
    hAxis: { title: "Parameters" },
    vAxis: { title: "Values" },
    legend: "none",
  };
  return (
    <>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default GoolgeChart;
