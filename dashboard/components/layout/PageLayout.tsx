export interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
        <div className="">
          <main className="py-10">
            <div className="mx-auto px-4 lg:px-10">
                {children}
            </div>
          </main>
        </div>
    </>
  );
}