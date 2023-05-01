import { Kpis } from "@/utils/utils";
import {
  Dropdown,
  DropdownItem,
  MultiSelectBox,
  MultiSelectBoxItem,
  Card,
  Metric,
  Text,
} from "@tremor/react";
import LiveChart from "./chart/LiveChart";

export default function Live() {
  return (
    <div className="mt-8">
      <div className="flex items-center space-x-2">
        <div className="flex-none rounded-full p-1 text-emerald-400 bg-emerald-400/30 animate-pulse">
          <div className="h-2 w-2 rounded-full bg-current"></div>
        </div>
        <span className="text-sm text-gray-700 font-medium">Last 24 hours</span>
      </div>
      <div className="mt-6 flex items-center space-x-3">
        <Dropdown
          className="w-48"
          onValueChange={(value) => console.log("The selected value is", value)}
          defaultValue={Kpis.Sales}
        >
          <DropdownItem value={Kpis.Sales} text={Kpis.Sales} />
          <DropdownItem value={Kpis.Units} text={Kpis.Units} />
          <DropdownItem value={Kpis.Customers} text={Kpis.Customers} />
        </Dropdown>
        <span className="text-sm text-gray-500"> filtered by </span>
        <MultiSelectBox placeholder="Select location" className="w-48">
          <MultiSelectBoxItem value="1" text="Option 1" />
          <MultiSelectBoxItem value="2" text="Option 2" />
          <MultiSelectBoxItem value="3" text="Option 3" />
        </MultiSelectBox>

        <MultiSelectBox placeholder="Select product" className="w-48">
          <MultiSelectBoxItem value="1" text="Option 1" />
          <MultiSelectBoxItem value="2" text="Option 2" />
          <MultiSelectBoxItem value="3" text="Option 3" />
        </MultiSelectBox>
      </div>
      <div className="mt-8">
        <Card>
          <Text> Gross volume </Text>
          <Metric> $ 32,450 </Metric>
          <LiveChart />
        </Card>
      </div>
    </div>
  );
}
