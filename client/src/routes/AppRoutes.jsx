import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import { PublicRoute, PrivateRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/UseAuth";
import LazySpinner from "@/components/LazySpinner";
import ErrorBoundary from "@/components/ErrorBoundary";

const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const RootLayout = lazy(() => import("../layout/RootLayout"));
const ProfileLayout = lazy(() => import("../layout/ProfileLayout"));
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));
const Login = lazy(() => import("../pages/auth/Login"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
const ForgetLayout = lazy(() => import("../layout/ForgetLayout"));
const CheckVerification = lazy(() =>
  import("../pages/verify-email/CheckVerification")
);
const VerifyEmail = lazy(() => import("../pages/verify-email/VerifyEmail"));

import BookingLayout from "@/layout/BookingLayout";

import BookLaundry from "@/pages/bookLaundry/BookLaundry";
import BookingSummary from "@/pages/bookLaundry/BookingSummary";
import PaymentOptions from "@/pages/paymentOptions/PaymentOptions";
import Order from "@/pages/orders/Order";
import ProfileInfo from "@/pages/personalInfo/ProfileInfo";
import Payments from "@/pages/payment/Payments";
import Dashboard from "@/pages/dashboard/Dashboard";
import Users from "@/pages/dashboard/users/Users";
import AdminsOrders from "@/pages/dashboard/adminorders/AdminsOrders";
import Revenue from "@/pages/dashboard/adminRevenue/Revenue";

export default function AppRoutes() {
  const { accessToken } = useAuth();
  const routes = [
    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PublicRoute accessToken={accessToken}>
            <AuthLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PublicRoute accessToken={accessToken}>
            <ForgetLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "auth/forgetpassword",
          element: <ForgetPassword />,
        },
        {
          path: "auth/resetpassword",
          element: <ResetPassword />,
        },
        {
          path: "verify-email/:userId/:verifyTokenLink",
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <VerifyEmail />
              </PrivateRoute>
            </Suspense>
          ),
        },
        {
          path: "verify-email",
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <CheckVerification />
              </PrivateRoute>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <RootLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },

    {
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <BookingLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          path: "book-laundry",
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <BookLaundry />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              path: "booking-summary",
              element: (
                <Suspense fallback={<LazySpinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <BookingSummary />
                  </PrivateRoute>
                </Suspense>
              ),
            },
            {
              path: "payment-options/:bookingId",
              element: (
                <Suspense fallback={<LazySpinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <PaymentOptions />
                  </PrivateRoute>
                </Suspense>
              ),
            },
          ],
        },
        {
          errorElement: <ErrorBoundary />,
          path: "profile",
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <ProfileLayout />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <ProfileInfo />
                </PrivateRoute>
              ),
            },
            {
              path: "orders",
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Order />
                </PrivateRoute>
              ),
            },
            {
              path: "payments",
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Payments />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "admin",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <AdminLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "users",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Users />
            </PrivateRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <AdminsOrders />
            </PrivateRoute>
          ),
        },
        {
          path: "revenue",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Revenue />
            </PrivateRoute>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
