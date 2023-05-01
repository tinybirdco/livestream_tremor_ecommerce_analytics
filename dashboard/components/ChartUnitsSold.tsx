import { chartdata } from "../data/mockdata";
import { Kpis, formatters } from "@/utils/utils";
import { LineChart, Metric } from "@tremor/react";

const formatToUSD = (value: number) => `$ ${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartUnitsSold({ locations }: { locations: string[] }) {
    const unitsSold = formatters[Kpis.Units](50123);
    const data = chartdata;
    return (
        <>
            <Metric>{unitsSold}</Metric>
            <LineChart
                className="mt-10 h-72"
                data={ data }
                index="timestamp"
                categories={["value"]}
                colors={["blue"]}
                showYAxis={false}
                startEndOnly={true}
                showLegend={false}
            />
        </>
    )
}