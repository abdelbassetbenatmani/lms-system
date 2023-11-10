import {FC} from 'react'
import DashboardHeader from './DashboardHeader'

type Props = {}

const DashboardHero = (props: Props) => {
  return (
    <div className='w-full'>
        <DashboardHeader/>
        <div className="mt-[90px] relative right-0 p-7 w-full h-sidbar bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col">
            <h1 className='text-2xl font-bold'>Welcome to Dashboard</h1>
        </div>
    </div>
  )
}

export default DashboardHero