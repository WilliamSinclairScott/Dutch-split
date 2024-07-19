import React, { useContext } from "react";
import { AuthContext } from '../../src/'
import { Navigate } from "react-router"

export defualt function DivvyProtected(props:{
  children: React.ReactNode
}) {
  const { storedToken } = useContext(AuthContext);
  if (storedToken === null) {
    return <Navigate to='/' />;
  }
  return props.children;
}