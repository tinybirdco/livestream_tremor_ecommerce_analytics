import { dateRange } from '@/pages';
import { FilterProps, PipeParams, formatters } from '@/utils/utils';
import { BarList, Flex, Text } from '@tremor/react';
import { useFetchPipe } from 'trm-tb-plugin';

export default function BarListTopChannels({ locations }: FilterProps) {
  const { data } = useFetchPipe<{}, PipeParams>('top_channels_by_sales_api', {
    locations: locations.length > 0 ? locations : undefined,
    ...dateRange,
  });

  return (
    <>
      <Flex className="mt-3">
        <Text>Channel</Text>
        <Text>Sales</Text>
      </Flex>
      <BarList
        className="mt-2"
        data={
          data?.map((item: any) => ({
            value: item.sales,
            name: item.utm_source,
          })) ?? []
        }
        valueFormatter={formatters.sales}
      />
    </>
  );
}
