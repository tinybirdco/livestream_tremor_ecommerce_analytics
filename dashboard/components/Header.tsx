import { UsersIcon, OfficeBuildingIcon, TagIcon } from "@heroicons/react/solid";
import { Title, Text, Flex } from "@tremor/react";

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

export default function Header() {
  return (
    <div className="pt-10 pb-5 px-10 bg-slate-50 border-b">
      <Title>Mockingbird Merch Shop, Inc.</Title>
      <Flex justifyContent="start" className="mt-3 space-x-8">
        <HeaderKpi Icon={UsersIcon} count={102} text="customers" />
        <HeaderKpi Icon={OfficeBuildingIcon} count={13} text="locations" />
        <HeaderKpi Icon={TagIcon} count={372} text="products" />
      </Flex>
    </div>
  );
}
