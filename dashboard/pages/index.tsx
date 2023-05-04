import { useState } from 'react';
import {
  Title,
  Tab,
  TabList,
  Text,
  Card,
  Grid,
  MultiSelectBox,
  MultiSelectBoxItem,
  Flex,
  Divider,
} from '@tremor/react';
import Header from '@/components/Header';
import PulseIcon from '@/components/PulseIcon';
import { Kpis } from '@/utils/utils';
import ChartUnitsSold from '@/components/analytics/ChartUnitsSold';
import ChartSales from '@/components/analytics/ChartSales';

import BarListTopProducts from '@/components/analytics/BarListTopProducts';
import BarListTopChannels from '@/components/analytics/BarListTopChannels';
import { useFetchPipe } from 'trm-tb-plugin';
import { format, startOfDay, startOfToday } from 'date-fns';

function renderChart(kpi: string, locations: string[]) {
  switch (kpi) {
    case Kpis.Sales:
      return <ChartSales locations={locations} />;
    case Kpis.Units:
      return <ChartUnitsSold locations={locations} />;
  }
}

const TODAY = format(startOfDay(new Date(2023, 4, 4)), 'yyyy-MM-dd');
const TOMORROW = format(startOfDay(new Date(2023, 4, 5)), 'yyyy-MM-dd');
export const dateRange = { date_from: TODAY, date_to: TOMORROW };

export function Home() {
  const [kpi, setKpi] = useState(Kpis.Sales);
  const [locations, setLocations] = useState<string[]>([]);

  const { data: locationsData } = useFetchPipe('locations_api');
  const locationsList = locationsData?.map((item: any) => item.location) ?? [];

  return (
    <main className="mx-auto">
      <Header />
      <div className="py-8 px-10">
        <Flex justifyContent="start" className="space-x-2">
          <Flex justifyContent="start" className="space-x-2">
            <PulseIcon />
            <Text className="font-medium">Last 24 hours</Text>
          </Flex>
          <MultiSelectBox
            placeholder="Select location"
            className="max-w-xs"
            value={locations}
            onValueChange={setLocations}
          >
            {locationsList.map((item) => (
              <MultiSelectBoxItem key={item} value={item} />
            ))}
          </MultiSelectBox>
        </Flex>
        <Card className="mt-8">
          <TabList className="mb-5" value={kpi} onValueChange={setKpi}>
            <Tab value={Kpis.Sales} text={Kpis.Sales} />
            <Tab value={Kpis.Units} text={Kpis.Units} />
          </TabList>
          {renderChart(kpi, locations)}
        </Card>
        <Divider />
        <Grid numColsLg={2} className="gap-x-5">
          <Card>
            <Flex
              className="space-x-2"
              justifyContent="start"
              alignItems="baseline"
            >
              <Title>Top Products</Title>
              <Text>by units sold</Text>
            </Flex>
            <BarListTopProducts locations={locations} />
          </Card>
          <Card>
            <Flex
              className="space-x-2"
              justifyContent="start"
              alignItems="baseline"
            >
              <Title>Top Channels</Title>
              <Text>by sales</Text>
            </Flex>
            <BarListTopChannels locations={locations} />
          </Card>
        </Grid>
      </div>
    </main>
  );
}

export default Home;
