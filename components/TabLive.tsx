import { Kpis } from "@/utils/utils";
import {
  Card,
  Metric,
  Text,
  Flex,
} from "@tremor/react";
import LiveChart from "./chart/LiveChart";
import PulseIcon from "./PulseIcon";
import DropdownKpi from "./DropdownKpi";
import MultiselectLocation from "./MultiselectLocation";
import MultiselectProduct from "./MultiselectProduct";

export default function Live() {
  return (
    <div className="mt-8">
      <Flex justifyContent="start" className="space-x-2">
        <PulseIcon />
        <span className="text-sm text-gray-700 font-medium">Last 24 hours</span>
      </Flex>
      <Flex justifyContent="start" className="mt-6 space-x-3">
        <DropdownKpi />
        <Text> filtered by </Text>
        <MultiselectLocation />
        <MultiselectProduct />
      </Flex>
      <Card className="mt-8">
        <Text> Gross volume </Text>
        <Metric> $ 32,450 </Metric>
        <LiveChart />
      </Card>
    </div>
  );
}
