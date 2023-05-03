import { useState } from "react";
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
  BarList,
} from "@tremor/react";
import Header from "@/components/Header";
import PulseIcon from "@/components/PulseIcon";
import { Kpis, formatters } from "@/utils/utils";
import ChartUnitsSold from "@/components/ChartUnitsSold";
import ChartSales from "@/components/ChartSales";

import { locations as locationData } from "@/data/mockdata";
import BarListTopProducts from "@/components/BarListTopProducts";
import BarListTopChannels from "@/components/BarListTopChannels";

function renderChart(kpi: string, locations: string[]) {
  switch(kpi) {
    case Kpis.Sales:
      return <ChartSales locations={locations} />
    case Kpis.Units:
      return <ChartUnitsSold locations={locations} />
  }
}

export function Home() {
  const [kpi, setKpi] = useState(Kpis.Sales);
  const [locations, setLocations] = useState<string[]>([]);

  return (
    <main className="mx-auto">
        <Header />
        <div className="mt-8 px-10">
      <Flex justifyContent="start" className="space-x-2">
        <Flex justifyContent="start" className="space-x-2">
          <PulseIcon />
          <Text className="font-medium">Last 24 hours</Text>
        </Flex>
        <MultiSelectBox placeholder="Select location" className="max-w-xs" value={locations} onValueChange={setLocations}>
          { locationData.map((item) => (
            <MultiSelectBoxItem key={item} value={item} />
          )) }
        </MultiSelectBox>
      </Flex>
      <Card className="mt-8">
        <TabList className="mb-5" value={kpi} onValueChange={setKpi}>
          <Tab value={Kpis.Sales} text={Kpis.Sales} />
          <Tab value={Kpis.Units} text={Kpis.Units} />
        </TabList>
        { renderChart(kpi, locations) }
      </Card>
      <Divider />
      <Grid numColsLg={2} className="gap-x-5">
        <Card>
          <Flex className="space-x-2" justifyContent="start" alignItems="baseline">
            <Title>Top Products</Title>
            <Text>by units sold</Text>
          </Flex>
          <BarListTopProducts locations={locations} />
        </Card>
        <Card>
          <Flex className="space-x-2" justifyContent="start" alignItems="baseline">
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
