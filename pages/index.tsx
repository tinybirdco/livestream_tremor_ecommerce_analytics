import Navbar from '@/components/layout/Navbar';
import PageLayout from '@/components/layout/PageLayout'
import { Metric, Title, Subtitle, Bold, Italic, Text } from "@tremor/react";
import { OfficeBuildingIcon, UsersIcon } from "@heroicons/react/solid";

export function Home() {
  return (
    <main className="min-h-screen p-10">

      <Title> Mockingbird Inc. </Title>

      <div className="mt-2 flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <UsersIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500"> 102 customers </span>
        </div>
        <div className="flex items-center space-x-2">
          <OfficeBuildingIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500"> 2 locations </span>
        </div>
      </div>

      <Navbar />

    </main>
  )
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <PageLayout>{ page }</PageLayout>;
};

export default Home;