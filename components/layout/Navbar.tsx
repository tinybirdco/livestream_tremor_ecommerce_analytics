import { useState } from "react";
import { TabList, Tab } from "@tremor/react";


export default function Navbar() {
    const [value, setValue] = useState(null);
    return (
        <TabList defaultValue="1">
          <Tab value="1" text="Peer performance" />
          <Tab value="2" text="Individual performance" />
        </TabList>
  );
};