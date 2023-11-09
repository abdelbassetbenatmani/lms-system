import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
interface Props {
  children: React.ReactNode;
}
export const AdminProtected = ({ children }: Props) => {
    const {user} = useSelector((state: any) => state.auth);
    if(user){
        const isAuthenticated = user?.role === "admin" ? true : false;
        return isAuthenticated ? children : redirect("/");
    }
};
