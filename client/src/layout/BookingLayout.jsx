
import Nav from "@/components/Nav";
import React from "react";
import { Outlet } from "react-router";

export default function BookingLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
