import { useAuth } from "@/hooks/UseAuth";
import { Pencil } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { profileLinks } from "@/utils/constants";
import Logout from "@/components/Logout";
import FooterOne from "@/pages/home/FooterOne";

export default function ProfileLayout() {
  const { user } = useAuth();
  return (
    <>
      <div className="min-h-screen">
        <div className="mt-16 bg-(--cardBg)  text-white py-8 px-4">
          <div className="container mx-auto py-10 md:px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="avatar avatar-placeholder">
                <div className="bg-black text-neutral-content w-17 md:w-24 rounded-full">
                  {user?.avatar ? (
                    <img
                      src={user?.avatar}
                      alt={user?.fullname}
                      loading="lazy"
                      
                    />
                  ) : (
                    <span className="text-xl">
                      {user?.fullname
                        ?.split(" ")
                        .map((name) => name[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">
                  {user?.fullname}
                </h1>
                <p className="break-all text-sm ">{user?.email}</p>
              </div>
            </div>
            <Pencil />
          </div>
        </div>
        <div className="container text-white mx-auto py-10 px-4 md:grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
            {profileLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ease-in p-3 flex items-center gap-2 rounded-lg ${
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
