import { useState } from "react";
import MockOverviewChart from "@/components/chart/LiveChart";
import { TabViews, Kpis } from "@/utils/utils";
import {
  Metric,
  Title,
  Tab,
  TabList,
  Text,
  Card,
  Grid,
  DateRangePicker,
  Dropdown,
  DropdownItem,
  Badge,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react";
import {
  CubeIcon,
  CubeTransparentIcon,
  OfficeBuildingIcon,
  ReplyIcon,
  SwitchHorizontalIcon,
  TagIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Header from "@/components/Header";
import Overview from "@/components/TabOverview";
import Live from "@/components/TabLive";
import PageLayout from "@/components/layout/PageLayout";

const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function Home() {
  const [selectedTabView, setSelectedTabView] = useState(TabViews.Live);
  return (
    <main>
      <Header
        title="Mockingbird Merch Shop, Inc."
        setSelectedTabView={setSelectedTabView}
      />

      <div className="px-10">
        {selectedTabView === TabViews.Overview ? (
          <Overview />
        ) : (
          <Live />
        )}
      </div>
    </main>
  );
}

export default Home;
