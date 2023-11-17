"use client"
import { Heading } from '@/app/utils/Heading'
import AdminSidebar from '@/components/Admin/AdminSidebar'
import CreateCourse from '@/components/Admin/Courses/CreateCourse'
import { AdminProtected } from '@/hooks/useAdminProtected'


const page = () => {
  return (
    <AdminProtected>
    <Heading
      title={`Admin Create Course`}
      description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
      keywords="Programming,courses,design"
    />

    <div className="flex">
      <div>
      <AdminSidebar />
      </div>
      <div className='w-full'>
        <CreateCourse/>
      </div>
    </div>
  </AdminProtected>
  )
}

export default page