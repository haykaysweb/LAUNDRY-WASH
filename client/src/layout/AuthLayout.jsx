import { Outlet } from "react-router";
import LogoThree from "../components/LogoThree";

export default function AuthLayout() {
  return (
    <>
      <section className="grid grid-cols-12 items-center justify-center h-screen w-full bg-(--landingPgBg)">
        <div
          className="hidden md:block col-span-6 h-screen w-full bg-cover bg-center p-5 loginBg"
          // style={{ backgroundImage: "url('/image 9.png')" }}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-center">
              <LogoThree />
            </div>
            <div className="backdrop-blur-xs bg-white/0 border border-white/30 rounded-xl py-6 px-2 text-white">
              <div className="flex flex-col items-center lg:flex-row">
                <div className="flex gap-3 items-center w-full">
                  <span>
                    <img src="/Ellipse 5.png" alt="" />
                  </span>
                  <span className="text-xs">
                    <h3 className="font-semibold text-sm">Zoe Saldana</h3>
                    <p>Galaxy Guardian</p>
                  </span>
                </div>

                <div className="">
                  <h1 className="font-semibold text-sm">
                    A lifesaver for my busy schedule.
                  </h1>
                  <p className="text-xs mt-2">
                    I drop my clothes in the morning and pick them up perfectly
                    folded by evening. Everything smells fresh, and not a single
                    sock goes missing. Honestly, this service has saved me hours
                    every week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 px-2 loginBgTwo">
          <div className="flex justify-center">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

// <div className="flex w-[24%] text-white">
//   <div className="flex items-center gap-2">
//     <img src="/Ellipse 5.png" alt="" />
//     <div className=" flex flex-col text-xs space-y-1">
//       <p className="font-semibold">Zoe Saldana</p>
//       <p>Galazy Guardian</p>
//     </div>
//   </div>
// </div>
// <div className="w-[70%] text-white">
//   <h1 className="font-semibold">
//     A lifesaver for my busy schedule.
//   </h1>
//   <p className="text-xs mt-2 w-full">
//     I drop my clothes in the morning and pick them up perfectly
//     folded by evening. Everything smells fresh, and not a single
//     sock goes missing. Honestly, this service has saved me hours
//     every week.
//   </p>
// </div>
