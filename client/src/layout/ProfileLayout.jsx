

import { NavLink, Outlet } from "react-router";
import { profileLinks } from "@/utils/constants";
import Logout from "@/components/Logout";
import FooterOne from "@/pages/home/FooterOne";
import UploadAvatar from "@/pages/personalInfo/UploadAvatar";

export default function ProfileLayout() {
  return (
    <>
      <div className="min-h-screen">
        <UploadAvatar />
        <div className="container text-white mx-auto py-10 px-4 md:grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
            {profileLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ease-in p-3 flex items-center gap-2 rounded-full ${
                    isActive ? "bg-(--signupBtnBg)" : ""
                  }`
                }
                end
              >
                <link.icon />
                {link.label}
              </NavLink>
            ))}
            <Logout />
          </div>

          <div className="col-span-12 md:col-span-9 w-full mt-10 md:mt-0">
            <Outlet />
          </div>
        </div>

        <FooterOne />
      </div>
    </>
  );
}
