import Navbar from '@/components/layout/Navbar';
import PageLayout from '@/components/layout/PageLayout'
import { Metric, Title, Subtitle, Bold, Italic, Text, Card, Grid, DateRangePicker, Dropdown, DropdownItem, LineChart, Badge } from "@tremor/react";
import { CubeIcon, CubeTransparentIcon, OfficeBuildingIcon, ReplyIcon, SwitchHorizontalIcon, TagIcon, UsersIcon } from "@heroicons/react/solid";

const chartdata = [
  {
    timestamp: "09:00",
    value: 674,
    previousValue: 551,
  },
  {
    timestamp: "10:00",
    value: 493,
    previousValue: 182,
  },
  {
    timestamp: "11:00",
    value: 691,
    previousValue: 451,
  },
  {
    timestamp: "12:00",
    value: 698,
    previousValue: 551,
  },
  {
    timestamp: "13:00",
    value: 452,
    previousValue: 351,
  },
  {
    timestamp: "14:00",
    value: 653,
    previousValue: 751,
  },
  {
    timestamp: "15:00",
    value: 551,
    previousValue: 451,
  },
];

const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function Home() {
  return (
    <main>

      <div className="px-10 pt-10 bg-slate-50">

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

        <Navbar />

      </div>
      
      <div className="px-10">

        <div className="mt-10 flex items-center space-x-3">
          <DateRangePicker className="w-60" enableDropdown={false} />
          <span className="text-sm font-medium text-gray-700">compared to</span>
          <Dropdown
            className="w-60"
            onValueChange={(value) => console.log("The selected value is", value)}
            defaultValue="1"
          >
            <DropdownItem value="1" text="Same period last year" />
            <DropdownItem value="2" text="Benchmark" />
          </Dropdown>
        </div>

        <div className="py-8">
          <Grid numColsSm={2} numColsLg={3} className="gap-8">
              <Card>
              {/* <Card className="shadow-none ring-0 p-0"> */}
                <div className="flex items-center justify-start space-x-2">
                  <Text> Gross volume </Text>
                  <Badge className="rounded-md bg-emerald-100 text-emerald-800 py-0.5 px-1.5">+23.1%</Badge>
                </div>
                <div className="mt-1 flex items-end justify-between">
                  <Metric> $ 32,450 </Metric>
                  <Metric className="text-base text-gray-500"> $ 21,250 </Metric>
                </div>
                <LineChart
                  className="mt-10 h-72"
                  data={ chartdata }
                  index="timestamp"
                  categories={["value", "previousValue"]}
                  colors={["blue", "gray"]}
                  valueFormatter={ dataFormatter }
                  showYAxis={ false }
                  startEndOnly={ true }
                  showLegend={ false }
                />
              </Card>
              <Card>
              {/* <Card className="shadow-none ring-0 p-0"> */}
                <div className="flex items-center justify-start space-x-2">
                  <Text> Units sold </Text>
                  <Badge className="rounded-md bg-emerald-100 text-emerald-800 py-0.5 px-1.5">+9.4%</Badge>
                </div>
                <div className="mt-1 flex items-end justify-between">
                  <Metric> 2,450 </Metric>
                  <Metric className="text-base text-gray-500"> 1,340 </Metric>
                </div>
                
                <LineChart
                  className="mt-10 h-72"
                  data={ chartdata }
                  index="timestamp"
                  categories={["value", "previousValue"]}
                  colors={["blue", "gray"]}
                  valueFormatter={ dataFormatter }
                  showYAxis={ false }
                  startEndOnly={ true }
                  showLegend={ false }
                />
              </Card>
              <Card>
              {/* <Card className="shadow-none ring-0 p-0"> */}
                <div className="flex items-center justify-start space-x-2">
                  <Text> Customers </Text>
                  <Badge className="rounded-md bg-rose-100 text-rose-800 py-0.5 px-1.5">-4.9%</Badge>
                </div>
                <div className="mt-1 flex items-end justify-between">
                  <Metric> 534 </Metric>
                  <Metric className="text-base text-gray-500"> 687 </Metric>
                </div>
                <LineChart
                  className="mt-10 h-72"
                  data={ chartdata }
                  index="timestamp"
                  categories={["value", "previousValue"]}
                  colors={["blue", "gray"]}
                  valueFormatter={ dataFormatter }
                  showYAxis={ false }
                  startEndOnly={ true }
                  showLegend={ false }
                />
              </Card>
          </Grid>
        </div>
      </div> 

    </main>
  )
}

// Home.getLayout = function getLayout(page: React.ReactNode) {
//   return <PageLayout>{ page }</PageLayout>;
// };


export default Home;