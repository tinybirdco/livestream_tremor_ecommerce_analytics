import { Kpis, formatters } from "@/utils/utils";
import { BarList, Flex, Text } from "@tremor/react";
import { useFetchPipe } from "trm-tb-plugin";

export default function BarListTopChannels({ locations }: { locations: string[]}) {
    const { data } = useFetchPipe("top_channels_by_sales_api", { locations: locations.length > 0 ? locations : undefined })

    return (
        <>
        <Flex className="mt-3">
          <Text>Channel</Text>
          <Text>Sales</Text>
        </Flex>
        <BarList
            className="mt-2"
            data={data?.map((item: any) => ({ value: item.sales, name: item.utm_source })) ?? []}
            valueFormatter={formatters[Kpis.Sales]}
          />
        </>
    )
}