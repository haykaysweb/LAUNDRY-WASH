import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Services from "../pages/home/Services";
import HowItWorks from "../pages/home/HowItWorks";
import WhoWeAre from "../pages/home/WhoWeAre";
import Reviews from "../pages/home/Reviews";
import Effort from "../pages/home/Effort";
import FooterOne from "../pages/home/FooterOne";

export default function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Services/>
      <HowItWorks/>
      <WhoWeAre/>
      <Reviews/>
      <Effort/>
      <FooterOne/>
    </>
  );
}
