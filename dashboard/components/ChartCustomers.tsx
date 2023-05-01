import { chartdata } from "../data/mockdata";
import { Kpis, formatters } from "@/utils/utils";
import { LineChart, Metric } from "@tremor/react";

export default function ChartCustomers({ locations }: { locations: string[] }) {
    const customers = formatters[Kpis.Customers](1250);
    const data = chartdata;

    return (
        <>
            <Metric>{customers}</Metric>
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