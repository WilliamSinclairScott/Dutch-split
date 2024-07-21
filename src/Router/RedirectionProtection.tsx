import React, { useContext } from "react";
import { AuthContext } from './AuthContext';
import { Navigate } from "react-router";

export default function DivvyProtected(props:{
  children: React.ReactNode
}) {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }
  return props.children;
}