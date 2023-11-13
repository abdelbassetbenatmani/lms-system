"use client"
import { Heading } from "@/app/utils/Heading"
import AdminSidebar from "@/components/Admin/AdminSidebar"
import AllUsers from "@/components/Admin/Users/AllUsers"
import { AdminProtected } from "@/hooks/useAdminProtected"

type Props = {}

const page = (props: Props) => {
  return (
    <AdminProtected>
      <Heading
        title={`Admin Dashboard manage team`}
        description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />

      <div className="flex">
        <div >
        <AdminSidebar />
        </div>
        <div className="w-full">
          <AllUsers isTeam={true}/>
        </div>
      </div>
    </AdminProtected>
  )
}

export default page