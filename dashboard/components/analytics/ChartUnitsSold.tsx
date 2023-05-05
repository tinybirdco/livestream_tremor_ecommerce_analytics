import { dateRange } from '@/pages';
import { FilterProps, formatters } from '@/utils/utils';
import { AreaChart, Metric } from '@tremor/react';
import { useFetchPipe } from 'trm-tb-plugin';

interface UnitsSoldParams {
  units_sold: number;
}

export default function ChartUnitsSold({ locations }: FilterProps) {
  const { data: dataTotalUnitsSold } = useFetchPipe<UnitsSoldParams>(
    'total_units_sold_api',
    {
      locations: locations.length > 0 ? locations : undefined,
      ...dateRange,
    }
  );
  const { data: dataTotalUnitsSoldPerHour } = useFetchPipe(
    'total_units_sold_per_hour_api',
    {
      locations: locations.length > 0 ? locations : undefined,
      ...dateRange,
    }
  );

  const unitsSold = formatters.units(
    dataTotalUnitsSold?.[0]['units_sold'] ?? 0
  );

  return (
    <>
      <Metric>{unitsSold}</Metric>
      <AreaChart
        className="mt-10 h-72"
        data={dataTotalUnitsSoldPerHour ?? [{ hour: 0 }]}
        index="hour"
        categories={['units_sold']}
        colors={['blue']}
        valueFormatter={formatters.units}
        showYAxis={false}
        startEndOnly={true}
        showLegend={false}
      />
    </>
  );
}
