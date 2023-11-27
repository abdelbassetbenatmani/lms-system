"use client"
import { Heading } from "@/app/utils/Heading"
import AdminSidebar from "@/components/Admin/AdminSidebar"
import AllInvoices from "@/components/Admin/Invoices/AllInvoices"
import AllUsers from "@/components/Admin/Users/AllUsers"
import { AdminProtected } from "@/hooks/useAdminProtected"

type Props = {}

const InvoicesPage = (props: Props) => {
  return (
    <AdminProtected>
      <Heading
        title={`Admin Dashboard - Invoices`}
        description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />

      <div className="flex">
        <div >
        <AdminSidebar />
        </div>
        <div className="w-full">
          <AllInvoices />
        </div>
      </div>
    </AdminProtected>
  )
}

export default InvoicesPage