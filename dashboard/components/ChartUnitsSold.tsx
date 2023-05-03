import { chartdata } from "../data/mockdata";
import { Kpis, formatters } from "@/utils/utils";
import { AreaChart, Metric } from "@tremor/react";
import { useFetchPipe } from "trm-tb-plugin";

const formatToUSD = (value: number) => `$ ${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartUnitsSold({ locations }: { locations: string[] }) {
    const data = chartdata;
    const { data: dataTotalUnitsSold } = useFetchPipe("total_units_sold_api", {
        locations: locations.length > 0 ? locations : undefined,
    });
    const unitsSold = formatters[Kpis.Units](dataTotalUnitsSold ? dataTotalUnitsSold[0]["units_sold"] : 0);

    const { data: dataTotalUnitsSoldPerHour } = useFetchPipe("total_units_sold_per_hour_api", {
        locations: locations.length > 0 ? locations : undefined,
    });
    return (
        <>
            <Metric>{unitsSold}</Metric>
            { dataTotalUnitsSoldPerHour && dataTotalUnitsSoldPerHour.length > 0 ? <AreaChart
                className="mt-10 h-72"
                data={ dataTotalUnitsSoldPerHour }
                index="hour"
                categories={["units_sold"]}
                colors={["blue"]}
                valueFormatter={formatters[Kpis.Units]}
                showYAxis={false}
                startEndOnly={true}
                showLegend={false}
            /> : "loading"}
        </>
    )
}