import { Link } from "react-router";
import { validateRegisterUserSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader, Eye, EyeClosed } from "lucide-react";
import { registerUser } from "@/api/auth";
import { useAuth } from "@/hooks/UseAuth";
import { useState } from "react";

export default function Signup() {
  const [revealPassword, setRevealPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateRegisterUserSchema),
  });

  const { setAccessToken } = useAuth();

  const togglePasswordReveal = (e) => {
    e.preventDefault();
    setRevealPassword((prev) => !prev);
  };

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      toast.success(res.data.message || "Registration successful");
      //save accesstoken and redierect user to home page
      setAccessToken(res.data.data);
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data?.message ||
          error?.response.data ||
          "Registration failed"
      );
    },
  });

  const onSubmitForm = async (data) => {
 
    mutation.mutate(data);
  };
  return (
    <div className="p-5 w-full md:w-[461px]">
      <h1 className="font-medium text-4xl text-white">Create Account</h1>
      <p className="font-medium mt-1 text-white">
        Enter Your Information To Create An Account
      </p>
      <div className="mt-5">
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="w-full">
            <label htmlFor="fullname" className="text-xs text-white">
              Fullname
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("fullname")}
            />
          </div>
          {errors.fullname && (
            <p className="text-red-500 text-xs">{errors?.fullname.message}</p>
          )}

          <div className="w-full">
            <label htmlFor="email" className="text-xs text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors?.email.message}</p>
          )}
          <div className="w-full">
            <label htmlFor="phone" className="text-xs text-white">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+23461543769"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors?.phone.message}</p>
          )}
          <div className="relative">
            <label htmlFor="password" className="text-xs text-white">
              Password
            </label>
            <input
              type={revealPassword ? "text" : "password"}
              placeholder="Enter your password here"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("password")}
            />
            <button
              onClick={togglePasswordReveal}
              className="absolute top-[50%] right-2"
            >
              {revealPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors?.password.message}</p>
          )}
          <span className="mt-7 text-center bg-(--signupBtnBg) rounded-full py-3">
            <button
              type="submit"
              className="cursor-pointer flex justify-center items-center w-full text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  Signing up
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </span>
          <span className="mt-4 text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-(--signupBtnBg)">
              Sign in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
