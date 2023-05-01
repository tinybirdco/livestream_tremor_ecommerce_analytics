import { chartdata } from "../data/mockdata";
import { Kpis, formatters } from "@/utils/utils";
import { LineChart, Metric } from "@tremor/react";

export default function ChartSales({ locations }: { locations: string[] }) {
    const sales = formatters[Kpis.Sales](32450);
    const data = chartdata;
    return (
        <>
            <Metric>{sales}</Metric>
            <LineChart
                className="mt-10 h-72"
                data={ data }
                index="timestamp"
                categories={["value"]}
                colors={["blue"]}
                valueFormatter={formatters[Kpis.Sales]}
                showYAxis={false}
                startEndOnly={true}
                showLegend={false}
            />
        </>
    )
}