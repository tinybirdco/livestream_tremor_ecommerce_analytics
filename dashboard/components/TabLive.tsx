import { Kpis } from "@/utils/utils";
import {
  Card,
  Dropdown,
  DropdownItem,
  MultiSelectBox,
  MultiSelectBoxItem,
  Metric,
  Text,
  Flex,
  LineChart,
  TabList,
  Tab,
  Divider,
  Grid,
  BarList,
  Title,
} from "@tremor/react";
import PulseIcon from "./PulseIcon";
import { useState } from "react";

const chartdata = [
  {
    timestamp: "09:00",
    value: 674,
    previousValue: 551,
  },
  {
    timestamp: "10:00",
    value: 493,
    previousValue: 182,
  },
  {
    timestamp: "11:00",
    value: 691,
    previousValue: 451,
  },
  {
    timestamp: "12:00",
    value: 698,
    previousValue: 551,
  },
  {
    timestamp: "13:00",
    value: 452,
    previousValue: 351,
  },
  {
    timestamp: "14:00",
    value: 653,
    previousValue: 751,
  },
  {
    timestamp: "15:00",
    value: 551,
    previousValue: 451,
  },
];

export default function Live() {
  const [kpi, setKpi] = useState(Kpis.Sales);
  const [locations, setLocations] = useState(["1"]);
  return (
    <div className="mt-8">
      <Flex justifyContent="start" className="space-x-2">
        <PulseIcon />
        <Text className="font-medium">Last 24 hours</Text>
      </Flex>
      <Card className="mt-8">
        <TabList value="Sales">
          <Tab value="Sales" text="Sales" />
          <Tab value="Units" text="Units Sold" />
          <Tab value="Customers" text="Customers" />
        </TabList>
        <Flex className="mt-5 space-x-3">
          <div>
            <Text>Gross volume</Text>
            <Metric>$ 32,450</Metric>
          </div>
          <MultiSelectBox placeholder="Select location" className="max-w-xs" value={locations} onValueChange={setLocations}>
            <MultiSelectBoxItem value="1" text="Option 1" />
            <MultiSelectBoxItem value="2" text="Option 2" />
            <MultiSelectBoxItem value="3" text="Option 3" />
          </MultiSelectBox>
        </Flex>
        <LineChart
          className="mt-10 h-72"
          data={ chartdata }
          index="timestamp"
          categories={["value"]}
          colors={["blue", "gray"]}
          valueFormatter={ (value: number) => `$ ${Intl.NumberFormat("us").format(value).toString()}` }
          showYAxis={ false }
          startEndOnly={ true }
          showLegend={ false }
        />
      </Card>
      <Divider />
      <Grid numColsLg={2} className="gap-x-5">
        <Card>
          <Flex className="space-x-2" justifyContent="start" alignItems="baseline">
            <Title>Top Products</Title>
            <Text>by units sold</Text>
          </Flex>
          <BarList className="mt-5" data={[{ value: 10, name: "Product 1" }, { value: 5, name: "Product 2" }]} />
        </Card>
        <Card>
          <Flex className="space-x-2" justifyContent="start" alignItems="baseline">
            <Title>Top Channels</Title>
            <Text>by sales</Text>
          </Flex>
          <BarList
            className="mt-5"
            data={[{ value: 2000, name: "Instagram" }, { value: 1500, name: "SEO" }]}
            valueFormatter={(v: number) => `$ ${Intl.NumberFormat("us").format(v).toString()}`}
          />
        </Card>
      </Grid>
    </div>
  );
}
