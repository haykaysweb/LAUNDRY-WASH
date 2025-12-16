import { Outlet } from "react-router";
import LogoThree from "../components/LogoThree";

export default function ForgetLayout() {
  return (
    <>
      <div className="bg-(--landingPgBg) h-screen">
        <LogoThree />
        <Outlet />
      </div>
    </>
  );
}
