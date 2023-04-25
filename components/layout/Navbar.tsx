import { useState } from "react";
import { TabList, Tab } from "@tremor/react";


export default function Navbar() {
    const [value, setValue] = useState(null);
    return (
        <TabList defaultValue="1" className="mt-4">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Detail" />
        </TabList>
  );
};