import { LineChart } from "@tremor/react";


const chartdata = [
    {
      timestamp: "09:00",
      value: 674,
      previousValue: 551,
    },
    {
      timestamp: "10:00",
      value: 493,
      previousValue: 182,
    },
    {
      timestamp: "11:00",
      value: 691,
      previousValue: 451,
    },
    {
      timestamp: "12:00",
      value: 698,
      previousValue: 551,
    },
    {
      timestamp: "13:00",
      value: 452,
      previousValue: 351,
    },
    {
      timestamp: "14:00",
      value: 653,
      previousValue: 751,
    },
    {
      timestamp: "15:00",
      value: 551,
      previousValue: 451,
    },
  ];

  const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function LiveChart() { 
    return (
        <LineChart
            className="mt-10 h-72"
            data={ chartdata }
            index="timestamp"
            categories={["value", "previousValue"]}
            colors={["blue", "gray"]}
            valueFormatter={ dataFormatter }
            showYAxis={ false }
            startEndOnly={ true }
            showLegend={ false }
        />
    );
};