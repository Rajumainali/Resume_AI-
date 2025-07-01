"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input1";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface AuthformProps {
  onCandidateLogin?: boolean;
}

export function Authform({ onCandidateLogin }: AuthformProps) {
  const router = useRouter();
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [passwords, setpasswords] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // ✅ Basic validations
    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    // ✅ Password match check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // ✅ Password strength check
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
        { duration: 7000 }
      );
      return;
    }

    const payload = {
      ...formData,
      role: onCandidateLogin ? "candidate" : "recruiter",
    };

    try {
      const res = await fetch(`${API_BASE_URL}auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Signup successful!");
        setFormData({ email: "", password: "", confirmPassword: "" });
        router.replace("/login");
      } else {
        toast.error(data?.message || "Signup failed. Try again.");
      }
    } catch (error) {
      toast.error("Signup error! Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="shadow-input mx-auto w-[490px]  rounded-2xl bg-white p-8  dark:bg-black ">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-200 mb-2">
        Create an account. It's fast & easy.
      </h2>

      <form className="mt-8 " onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">
            {onCandidateLogin ? "Email*" : "Company Email*"}
          </Label>
          <Input
            id="email"
            placeholder={
              onCandidateLogin
                ? "mainaliujjwol7@gmail.com"
                : "bajarkochirfar@gmail.com"
            }
            onChange={handleChange}
            name="email"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="password"
            className="text-gray-700 dark:text-neutral-300 font-medium"
          >
            Password*
          </Label>
          <div className="relative mt-2">
            <Input
              id="password"
              type={passwords ? "password" : "text"}
              onChange={handleChange}
              name="password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onClick={() => setpasswords(!passwords)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label
            htmlFor="password"
            className="text-gray-700 dark:text-neutral-300 font-medium"
          >
            Confirm Password*
          </Label>
          <div className="relative mt-2">
            <Input
              id="password"
              type={showConfirmPassword ? "password" : "text"}
              onChange={handleChange}
              name="confirmPassword"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </LabelInputContainer>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <input
              id="keep-signed-in"
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            />
            <label
              htmlFor="keep-signed-in"
              className="ml-2 text-sm text-gray-700 dark:text-neutral-300"
            >
              By clicking the checkbox, you agree to our{" "}
              <span className="underline">Terms and Conditions</span>
              and <span className="underline">Privacy Policy</span>
            </label>
          </div>
        </div>

        <button
          className="w-full h-12 rounded-lg bg-[#5121E0] hover:bg-[#a892ec] text-white font-semibold transition-colors duration-200 mb-6"
          type="submit"
        >
          Sign Up
        </button>
        {onCandidateLogin ? (
          <>
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-neutral-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-black text-gray-500 dark:text-neutral-400">
                  or Sign Up with
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full h-12 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800 flex items-center justify-center space-x-3 transition-colors duration-200 mb-6"
            >
              <IconBrandGoogle className="w-5 h-5" />
              <span className="text-gray-700 dark:text-neutral-300 font-medium">
                Sign Up with google{" "}
              </span>
            </button>
          </>
        ) : (
          ""
        )}

        <p className="text-center text-sm text-gray-600 dark:text-neutral-400">
          Already have an account?
          <a
            href="/login"
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-1", className)}>
      {children}
    </div>
  );
};

export function CandidateLogin() {
  return <Authform onCandidateLogin={true} />;
}
export function RecruiterLogin() {
  return <Authform onCandidateLogin={false} />;
}
