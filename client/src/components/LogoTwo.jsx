import { useNavigate } from "react-router";

export default function LogoTwo() {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer">
      <img
        src="/obi.png"
        alt="logo"
        className="w-[215px] md:auto"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
