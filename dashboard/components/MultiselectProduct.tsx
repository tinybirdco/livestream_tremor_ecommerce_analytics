import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";

export default function MultiselectProduct() {
  return (
    <MultiSelectBox placeholder="Select Product" className="w-48">
    <MultiSelectBoxItem value="1" text="Option 1" />
    <MultiSelectBoxItem value="2" text="Option 2" />
    <MultiSelectBoxItem value="3" text="Option 3" />
  </MultiSelectBox>
  );
}
