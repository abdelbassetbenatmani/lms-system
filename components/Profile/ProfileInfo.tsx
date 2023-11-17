import { FC, useState,useEffect } from "react";
import Image from "next/image";
import avatarIcon from "../../public/assets/avatar.svg";
import profileCover from "../../public/assets/cover.jpg";
import { MdOutlineCameraswitch } from "react-icons/md";
import { useUpdateUserAvatarMutation, useUpdateUserInfoMutation } from "@/Redux/Features/User/userApi";
import { useLoadUserQuery } from "@/Redux/Features/Api/ApiSlice";
import toast from "react-hot-toast";
type Props = {
  user: any;
  avatar: string | null;
};

const ProfileInfo: FC<Props> = ({ user, avatar }) => {
  const [name, setName] = useState(user.name);
  const [updateUserAvatar,{isSuccess,error}] = useUpdateUserAvatarMutation()
  const [updateUserInfo,{isSuccess:succes,error:errorHandel}] = useUpdateUserInfoMutation()
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, {skip: !loadUser ? true : false});
  const hundelUpdateSubmit = async (e: any) => {
    e.preventDefault();
    if(name ===""){
      toast.error("Name is required")
      return
    }
    await updateUserInfo({name})
  };
  const imageHandeler = async (e: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const avatar = fileReader.result;
      
      if (fileReader.readyState === 2) {
        updateUserAvatar(avatar)      
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  }
  useEffect(() => {
    if(isSuccess || succes){
      setLoadUser(true)
    }
    if(error || errorHandel){
      console.log(error);
      console.log(errorHandel);
    }
    if(succes){
      toast.success("User name updated successfully")
    }
  }, [isSuccess,error,succes,errorHandel])
  
  return (
    <div className="p-3 md:p-7 w-full">
      <h1 className="text-2xl font-semibold font-Poppins">
        Profile Information
      </h1>
      <div className="rounded-md h-[300px] relative bg-secondary mt-10 w-full">
        <div className="h-[180px] rounded-t-md relative">
          <Image
            src={profileCover}
            alt="Cover profile page"
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-t-md"
          />
        </div>
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt={user?.name}
            width={160}
            height={160}
            className="rounded-full h-[160px] w-[160px]"
          />
          <input type="file" id="user-image" className="hidden" onChange={imageHandeler}/>
          <label
            htmlFor="user-image"
            className="bg-primary text-white p-1 rounded-full w-7 h-7 flex justify-center items-center border border-white absolute right-2 bottom-7 cursor-pointer">
            <MdOutlineCameraswitch size={40} />
          </label>
        </div>
        <div className="h-[120px] flex justify-center items-end pb-4">
          <h1 className="font-Poppins text-xl font-semibold block text-center text-white">
            {user.name}{" "}
          </h1>
        </div>
      </div>

      <div>
        <h1 className="text-lg md:text-2xl font-semibold font-Poppins mt-10">
          Update Personal Information
        </h1>
        <form className="mt-5" onSubmit={hundelUpdateSubmit}>
          <div className="flex flex-col gap-5">
            <div className="w-full md:w-1/2">
              <label className="text-lg font-semibold font-Poppins">Name</label>
              <input
                type="text"
                className="ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-lg font-semibold font-Poppins">
                Email
              </label>
              <input
                type="text"
                className="ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full"
                value={user.email}
                readOnly={true}
              />
            </div>
            <div className="w-full md:w-1/2">
            <button
                type="submit"
                className="bg-yellow text-primary w-full my-5 py-3 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300">
                Update
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileInfo;
