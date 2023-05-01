import { Kpis } from "@/utils/utils";
import { Dropdown, DropdownItem } from "@tremor/react";

export default function DropdownKpi() {
  return (
    <Dropdown
      className="w-48"
      onValueChange={(value) => console.log("The selected value is", value)}
      defaultValue={Kpis.Sales}
    >
      <DropdownItem value={Kpis.Sales} text={Kpis.Sales} />
      <DropdownItem value={Kpis.Units} text={Kpis.Units} />
      <DropdownItem value={Kpis.Customers} text={Kpis.Customers} />
    </Dropdown>
  );
}
