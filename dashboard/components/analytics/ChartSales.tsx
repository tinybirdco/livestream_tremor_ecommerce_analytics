import { chartdata } from '../data/mockdata';
import { Kpis, formatters } from '@/utils/utils';
import { AreaChart, Metric } from '@tremor/react';
import { useFetchPipe } from 'trm-tb-plugin';

export default function ChartSales({ locations }: { locations: string[] }) {
  const { data: dataTotalSales } = useFetchPipe('total_sales_api', {
    locations: locations.length > 0 ? locations : undefined,
  });

  const sales = formatters[Kpis.Sales](
    dataTotalSales ? dataTotalSales[0]['sales'] : 0
  );
  const { data: dataTotalSalesPerHour } = useFetchPipe(
    'total_sales_per_hour_api',
    {
      locations: locations.length > 0 ? locations : undefined,
    }
  );

  return (
    <>
      <Metric>{sales}</Metric>
      {dataTotalSalesPerHour && dataTotalSalesPerHour.length > 0 ? (
        <AreaChart
          className="mt-10 h-72"
          data={dataTotalSalesPerHour}
          index="hour"
          categories={['sales']}
          colors={['blue']}
          valueFormatter={formatters[Kpis.Sales]}
          showYAxis={false}
          startEndOnly={true}
          showLegend={false}
        />
      ) : (
        'loading'
      )}
    </>
  );
}
