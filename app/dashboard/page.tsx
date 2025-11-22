import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
//import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ValueLineBarChart } from "@/components/ui/value-line-bar-chart";
import { DefaultRadialChart } from "@/components/ui/radial-chart";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-black">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-black">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64">
              <ValueLineBarChart />
            </div>
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64">
              <DefaultRadialChart />
            </div>
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64 flex items-center justify-center">
              <p className="text-gray-400">Additional Chart</p>
            </div>
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64 flex items-center justify-center">
              <p className="text-gray-400">Additional Chart</p>
            </div>
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64 flex items-center justify-center">
              <p className="text-gray-400">Additional Chart</p>
            </div>
            <div className="border border-dashed border-gray-600 rounded-none p-4 min-h-64 flex items-center justify-center">
              <p className="text-gray-400">Additional Chart</p>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
