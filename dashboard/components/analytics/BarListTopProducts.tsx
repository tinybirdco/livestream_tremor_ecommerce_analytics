import { dateRange } from '@/pages';
import { FilterProps } from '@/utils/utils';
import { BarList, Flex, Text } from '@tremor/react';
import { useFetchPipe } from 'trm-tb-plugin';

export default function BarListTopProducts({ locations }: FilterProps) {
  const { data } = useFetchPipe('top_products_by_units_sold_api', {
    locations: locations.length > 0 ? locations : undefined,
    ...dateRange,
  });

  return (
    <>
      <Flex className="mt-3">
        <Text>Product Id</Text>
        <Text>Units Sold</Text>
      </Flex>
      <BarList
        className="mt-2"
        data={
          data?.map((item: any) => ({
            value: item.units_sold,
            name: item.product_id,
          })) ?? []
        }
      />
    </>
  );
}
