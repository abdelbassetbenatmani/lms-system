import {FC} from 'react'

type Props = {
    user : any
}

const ProfileInfo:FC<Props> = ({user}) => {
  return (
    <div>{user.name}</div>
  )
}

export default ProfileInfo