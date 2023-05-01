import { TabViews } from "@/utils/utils";
import { UsersIcon, OfficeBuildingIcon, TagIcon } from "@heroicons/react/solid";
import { Tab, TabList, Title } from "@tremor/react";

interface Header {
    title: string;
    setSelectedTabView: any
}

export default function Header({title, setSelectedTabView }:Header) {
  return (
    <div className="px-10 pt-10 bg-slate-50 border-b-[1px]">
      <Title> Mockingbird Merch Shop, Inc. </Title>

      <div className="mt-2 flex items-center space-x-5">
        <div className="flex items-center space-x-1">
          <UsersIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500"> 102 customers </span>
        </div>
        <div className="flex items-center space-x-1">
          <OfficeBuildingIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500"> 13 locations </span>
        </div>
        <div className="flex items-center space-x-1">
          <TagIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500"> 120 transactions </span>
        </div>
      </div>

      <TabList
        className="mt-6 -mb-[1px]"
        defaultValue={TabViews.Live}
        onValueChange={(value) => setSelectedTabView(value)}
      >
        <Tab value={ TabViews.Overview } text={ TabViews.Overview } />
        <Tab value={TabViews.Live} text={TabViews.Live} />
      </TabList>
    </div>
  );
}
