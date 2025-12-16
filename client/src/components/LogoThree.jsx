import { useNavigate } from "react-router"

export default function LogoThree() {
    const navigate = useNavigate();
  return (
    <div className="flex w-full items-center justify-center">
        <img src="/Frame 57.png" alt="logo" className="w-[435px] py-6" onClick={() => navigate("/")}/>
    </div>
  )
}
