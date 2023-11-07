"use client"
import { useLogOutQuery } from '@/Redux/Features/Auth/authApi'
import { signOut } from 'next-auth/react'
import { FC ,useState} from 'react'
import Sidbar from './Sidbar'
import ChangePassword from './ChangePassword'
import ProfileInfo from './ProfileInfo'
type Props = {
    user:any
}

const Profile:FC<Props> = ({user}) => {
    const [logout,setLogout] = useState(false)
    const [active,setActive] = useState(1)
    const {} = useLogOutQuery(undefined, { skip: !logout ? true : false  });
    const logOutHandeler = async () => {
        setLogout(true)
        await signOut()
    }
  return (
    <div className=' bg-white dark:bg-primary text-primary dark:text-white mt-[90px] flex '>
      <Sidbar active={active} setActive={setActive} logOutHandeler={logOutHandeler}/>
      {
          active === 0 && <ProfileInfo user={user}/>
      }
      {
          active === 1 && <ChangePassword/>
      }
      {
          active === 2 && <ChangePassword/>
      }
    </div>
  )
}

export default Profile