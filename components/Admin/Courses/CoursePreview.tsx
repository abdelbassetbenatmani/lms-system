import CoursePlayer from '@/app/utils/CoursePlayer';
import VideoPlayer from '@/app/utils/VideoPlayer';
import {FC} from 'react'

type Props = {
    courseData:any,
    hundelCourseCreation:any,
    active: number;
    setActive: (e: any) => void;
}

const CoursePreview:FC<Props> = ({courseData,hundelCourseCreation,active,setActive}) => {
  return (
    <div className="font-Poppins w-full mt-7 min-h-sidbar">
        <div className='mt-5 relative'>
            {/* <CoursePlayer videoUrl={courseData?.demoUrl} title={courseData?.title} /> */}
            <VideoPlayer videoUrl={courseData?.demoUrl} />
            <h1>jikfwjedifhof</h1>
        </div>
    </div>
  )
}

export default CoursePreview