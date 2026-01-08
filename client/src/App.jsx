import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./store/AuthProvider";
import CookieBanner from "./components/CookieBanner";
import { detectCookiesBlocked } from "./utils/cookieCheck";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const checkCookies = () => {
      const blocked = detectCookiesBlocked();
      setShowCookieBanner(blocked);
    };
    //check immediately
    checkCookies();
    //Check periodically (every 30 seconds) in case user enables cookies
    const interval = setInterval(checkCookies, 30000);
    return () => clearInterval(interval)
  }, []);

  return (
    <>
    {showCookieBanner && (
      <CookieBanner onDismiss={() => setShowCookieBanner(false)}/>
    )}
    {showCookieBanner}
      <ToastContainer position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
