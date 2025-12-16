import { useAuth } from "@/hooks/UseAuth";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router";
import AdminNav from "@/components/AdminNav";

export default function AdminLayout() {
  const { user } = useAuth();
  return (
    <>
      <section className="min-h-dvh">
        <Sidebar user={user} />
        <div className="lg:ml-[200px]">
            <AdminNav/>
          <Outlet />
        </div>
      </section>
    </>
  );
}
