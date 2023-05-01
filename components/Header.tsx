import { TabViews } from "@/utils/utils";
import { UsersIcon, OfficeBuildingIcon, TagIcon } from "@heroicons/react/solid";
import { Tab, TabList, Title, Text, Flex } from "@tremor/react";

interface HeaderKpi {
  Icon: React.ElementType;
  count: number;
  text: string;
}

function HeaderKpi({ Icon, count, text }: HeaderKpi) {
  return (
    <div className="flex space-x-2 items-center">
      <Icon className="w-4 h-4 text-gray-400" />
      <Text className="text-sm">
        {count} {text}
      </Text>
    </div>
  );
}

interface Header {
  title: string;
  setSelectedTabView: any;
}

export default function Header({ title, setSelectedTabView }: Header) {
  return (
    <div className="px-10 pt-10 bg-slate-50 border-b-[1px]">
      <Title> Mockingbird Merch Shop, Inc. </Title>
      <Flex justifyContent="start" className="mt-3 space-x-8">
        <HeaderKpi Icon={UsersIcon} count={102} text="customers" />
        <HeaderKpi Icon={OfficeBuildingIcon} count={13} text="locations" />
        <HeaderKpi Icon={TagIcon} count={372} text="products" />
      </Flex>
      <TabList
        className="mt-6 -mb-[1px]"
        defaultValue={TabViews.Live}
        onValueChange={(value) => setSelectedTabView(value)}
      >
        {/* <Tab value={ TabViews.Overview } text={ TabViews.Overview } /> */}
        <Tab value={TabViews.Live} text={TabViews.Live} />
      </TabList>
    </div>
  );
}
