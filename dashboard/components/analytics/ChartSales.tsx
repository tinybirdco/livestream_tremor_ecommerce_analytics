import { dateRange } from '@/pages';
import { FilterProps, formatters } from '@/utils/utils';
import { AreaChart, Metric } from '@tremor/react';
import { useFetchPipe } from 'trm-tb-plugin';

interface TotalSalesParams {
  sales: number;
}

export default function ChartSales({ locations }: FilterProps) {
  const { data: dataTotalSales } = useFetchPipe<TotalSalesParams>(
    'total_sales_api',
    {
      locations: locations.length > 0 ? locations : undefined,
      ...dateRange,
    }
  );
  const { data: dataTotalSalesPerHour } = useFetchPipe(
    'total_sales_per_hour_api',
    {
      locations: locations.length > 0 ? locations : undefined,
      ...dateRange,
    }
  );

  const sales = formatters.sales(dataTotalSales?.[0]['sales'] ?? 0);

  return (
    <>
      <Metric>{sales}</Metric>
      <AreaChart
        className="mt-10 h-72"
        data={dataTotalSalesPerHour ?? [{ hour: 0 }]}
        index="hour"
        categories={['sales']}
        colors={['blue']}
        valueFormatter={formatters.sales}
        showYAxis={false}
        startEndOnly={true}
        showLegend={false}
      />
    </>
  );
}
