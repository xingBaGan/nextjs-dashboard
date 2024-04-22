import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none w-80">
        <SideNav />
      </div>
      <div className="w-full min-h-screen flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}