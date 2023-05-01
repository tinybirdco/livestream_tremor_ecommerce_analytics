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
import ChartCustomers from "@/components/ChartCustomers";

import { locations as locationData } from "@/data/mockdata";

function renderChart(kpi: string, locations: string[]) {
  switch(kpi) {
    case Kpis.Sales:
      return <ChartSales locations={locations} />
    case Kpis.Units:
      return <ChartUnitsSold locations={locations} />
    case Kpis.Customers:
      return <ChartCustomers locations={locations} />
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
          <Tab value={Kpis.Customers} text={Kpis.Customers} />
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
          <BarList
            className="mt-5"
            data={[{ value: 10, name: "Product 1" }, { value: 5, name: "Product 2" }]}
            valueFormatter={formatters[Kpis.Units]}
          />
        </Card>
        <Card>
          <Flex className="space-x-2" justifyContent="start" alignItems="baseline">
            <Title>Top Channels</Title>
            <Text>by sales</Text>
          </Flex>
          <BarList
            className="mt-5"
            data={[{ value: 2000, name: "Instagram" }, { value: 1500, name: "SEO" }]}
            valueFormatter={formatters[Kpis.Sales]}
          />
        </Card>
      </Grid>
    </div>
    </main>
  );
}

export default Home;
