import { redirect } from "next/navigation";
import useUserAuth from "./useUserAuth";
import React from "react";
interface Props {
  children: React.ReactNode;
}

export const Protected = ({ children }: Props) => {
  const isAuthenticated = useUserAuth();
  return isAuthenticated ? children : redirect("/");
};
