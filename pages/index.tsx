import { useState } from "react";
import Navbar from '@/components/layout/Navbar';
import PageLayout from '@/components/layout/PageLayout';
import Sales from '@/components/chart/Sales';
import MockOverviewChart from '@/components/chart/MockOverviewChart';
import { TabViews, Kpis } from "@/utils/utils";
import { Metric, Title, Tab, TabList, Text, Card, Grid, DateRangePicker, Dropdown, DropdownItem, Badge, MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import { CubeIcon, CubeTransparentIcon, OfficeBuildingIcon, ReplyIcon, SwitchHorizontalIcon, TagIcon, UsersIcon } from "@heroicons/react/solid";


const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function Home() {
  const [selectedTabView, setSelectedTabView] = useState(TabViews.Overview);
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

        {/* <Navbar /> */}

        <TabList
            className="mt-6"
            defaultValue={ TabViews.Overview }
            onValueChange={ (value) => setSelectedTabView(value) }
        >   
            <Tab value={ TabViews.Overview } text={ TabViews.Overview } />
            <Tab value={ TabViews.Live } text={ TabViews.Live } />
        </TabList>

      </div>
      
      <div className="px-10">
        
        { selectedTabView === TabViews.Overview ? (

        <div className="mt-8">
          <p className="text-sm text-gray-700 font-medium">Performance Overview</p>
          <div className="mt-6 flex items-center space-x-3">
            <DateRangePicker 
              className="w-60"
              enableDropdown={false}
              defaultValue={ [new Date(2023, 3, 26)] }
            />
            <span className="text-sm text-gray-500"> compared to </span>
            <Dropdown
              className="w-60"
              onValueChange={(value) => console.log("The selected value is", value)}
              defaultValue="1"
            >
              <DropdownItem value="1" text="Same period last year" />
              <DropdownItem value="2" text="Benchmark" />
              <DropdownItem value="3" text="No comparison" />
            </Dropdown>
          </div>

          <div className="mt-8">
            <Grid numColsSm={2} numColsLg={3} className="gap-8">
                <Card>
                  <div className="flex items-center justify-start space-x-2">
                    <Text> Gross volume </Text>
                    <Badge className="rounded-md bg-emerald-100 text-emerald-800 py-0.5 px-1.5">+23.1%</Badge>
                  </div>
                  <div className="mt-1 flex items-end justify-between">
                    <Metric> $ 32,450 </Metric>
                    <Metric className="text-base font-normal text-gray-500"> $ 21,250 </Metric>
                  </div>

                  {/* Tinybird plugin example */}

                  {/* <Sales /> */}

                  <MockOverviewChart />

                </Card>
                <Card>
                  <div className="flex items-center justify-start space-x-2">
                    <Text> Units sold </Text>
                    <Badge className="rounded-md bg-emerald-100 text-emerald-800 py-0.5 px-1.5">+9.4%</Badge>
                  </div>
                  <div className="mt-1 flex items-end justify-between">
                    <Metric> 2,450 </Metric>
                    <Metric className="text-base font-normal text-gray-500"> 1,340 </Metric>
                  </div>
                  
                  <MockOverviewChart />

                </Card>
                <Card>
                  <div className="flex items-center justify-start space-x-2">
                    <Text> Customers </Text>
                    <Badge className="rounded-md bg-rose-100 text-rose-800 py-0.5 px-1.5">-4.9%</Badge>
                  </div>
                  <div className="mt-1 flex items-end justify-between">
                    <Metric> 534 </Metric>
                    <Metric className="text-base font-normal text-gray-500"> 687 </Metric>
                  </div>

                  <MockOverviewChart />

                </Card>

            </Grid>
          </div>
        </div>
        ) : (

          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex-none rounded-full p-1 text-emerald-400 bg-emerald-400/30 animate-pulse">
                <div className="h-2 w-2 rounded-full bg-current"></div>
              </div>
              <span className="text-sm text-gray-700 font-medium">
                  Last 24 hours
              </span>
            </div>
            <div className="mt-6 flex items-center space-x-3">
              <Dropdown
                className="w-48"
                onValueChange={(value) => console.log("The selected value is", value)}
                defaultValue={ Kpis.Sales }
              >
                <DropdownItem value={ Kpis.Sales } text={ Kpis.Sales } />
                <DropdownItem value={ Kpis.Units } text={ Kpis.Units } />
                <DropdownItem value={ Kpis.Customers } text={ Kpis.Customers } />
              </Dropdown>
              <span className="text-sm text-gray-500"> filtered by </span>
              <MultiSelectBox 
                placeholder="Select location"
                className="w-48"
              >
                <MultiSelectBoxItem  value="1" text="Option 1" />
                <MultiSelectBoxItem  value="2" text="Option 2" />
                <MultiSelectBoxItem  value="3" text="Option 3" />
              </MultiSelectBox>

              <MultiSelectBox 
                placeholder="Select product"
                className="w-48"
              >
                <MultiSelectBoxItem  value="1" text="Option 1" />
                <MultiSelectBoxItem  value="2" text="Option 2" />
                <MultiSelectBoxItem  value="3" text="Option 3" />
              </MultiSelectBox>

            </div>
            <div className="mt-8">
              <Card>
                <Text> Gross volume </Text>
                <Metric> $ 32,450 </Metric>
                <MockOverviewChart />
              </Card>
            </div>
          </div>

        ) }

      </div> 

    </main>
  )
}

// Home.getLayout = function getLayout(page: React.ReactNode) {
//   return <PageLayout>{ page }</PageLayout>;
// };


export default Home;