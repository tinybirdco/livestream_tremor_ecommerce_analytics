import { useState } from "react";
import { TabList, Tab } from "@tremor/react";
import { TabViews } from "@/utils/utils";



export default function Navbar() {
    const [selectedTabView, setSelectedTabView] = useState(TabViews.Overview);
    return (
        <TabList
            className="mt-6"
            defaultValue={ TabViews.Overview }
            onValueChange={ (value) => setSelectedTabView(value) }
        >   
            <Tab value={ TabViews.Overview } text={ TabViews.Overview } />
            <Tab value={ TabViews.Detail } text={ TabViews.Detail } />
            {/* <Tab value={ TabViews.Live } text={ TabViews.Live } /> */}
        </TabList>
  );
};