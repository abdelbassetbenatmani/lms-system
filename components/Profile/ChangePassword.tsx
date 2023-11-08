"use client";
import { useUpdateUserPasswordMutation } from "@/Redux/Features/User/userApi";
import { useState,useEffect } from "react";
import toast from "react-hot-toast";
const ChangePassword = () => {
  const [currentpassword, setCurrentpassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [updateUserPassword,{isSuccess,error}] = useUpdateUserPasswordMutation()
  const handelSubmit = async(e: any) => {
    e.preventDefault()
    if(currentpassword === "" || password === "" || confirmpassword === ""){
      toast.error("All fields are required")
      return
    }
    if(password !== confirmpassword){
      toast.error("Password not match")
      return
    }
    await updateUserPassword({currentpassword,password,confirmpassword})
    
  }
  useEffect(() => {
    if(isSuccess){
      setCurrentpassword("")
      setPassword("")
      setConfirmpassword("")
      toast.success("Password changed successfully")
    }
    if(error){
      if("data" in error){
        const errorData = error as any
        toast.error(errorData.data.message || "Password not changed")
      }else{
        console.log(error);
      }
    }
  }, [isSuccess,error])
  return (
    <div className="p-3 md:p-7 w-full">
      <h1 className="text-2xl font-semibold font-Poppins">Change Password</h1>
      <form className="mt-5" onSubmit={handelSubmit}>
        <div className="mt-4 relative">
          <label className="text-lg font-semibold font-Poppins mb-2 block">
            Current password
          </label>
          <input
            type="password"
            name="currentpassword"
            id="currentpassword"
            onChange={(e) => setCurrentpassword(e.target.value)}
            value={currentpassword}
            className={` ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full`}
            placeholder="Current password"
          />
        </div>
        <div className="mt-4 relative">
          <label className="text-lg font-semibold font-Poppins mb-2 block">
            New password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={` ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full`}
            placeholder="New password"
          />
        </div>
        <div className="mt-4 relative">
          <label className="text-lg font-semibold font-Poppins mb-2 block">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
            value={confirmpassword}
            className={` ps-8 py-5 text-primary dark:text-white font-Poppins rounded-lg border border-primary dark:border-white border-opacity-10 bg-transparent w-full`}
            placeholder="Current password"
          />
        </div>
        <div className="w-full">
            <button
                type="submit"
                className="bg-yellow text-primary w-full my-5 py-3 rounded-lg font-Poppins font-bold text-lg hover:border hover:border-yellow hover:bg-primary hover:text-yellow duration-300">
                Update Password
              </button>
            </div>
      </form>
    </div>
  );
};

export default ChangePassword;
