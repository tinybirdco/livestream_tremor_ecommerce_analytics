import Navbar from '@/components/layout/Navbar';
import PageLayout from '@/components/layout/PageLayout'

export function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
    </main>
  )
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <PageLayout>{ page }</PageLayout>;
};

export default Home;