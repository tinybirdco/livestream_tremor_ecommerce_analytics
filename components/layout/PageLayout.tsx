export interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
        <div className="bg-blue-100 h-screen">
          <main className="py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-20">
                {children}
            </div>
          </main>
        </div>
    </>
  );
}