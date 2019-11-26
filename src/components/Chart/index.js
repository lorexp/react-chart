import React from 'react';
import { Chart } from 'react-google-charts';

  
  const options = {
    hAxis: { title: "Meses"},
    vAxis: { title: "Lucro"},
  };

const ExampleChart = props => (
    <div className="Chart">
        <Chart
            chartType="LineChart"
            data={props.data}
            options={options}
            width="100%"
            height="400px"
        />
    </div>
);

export default ExampleChart;