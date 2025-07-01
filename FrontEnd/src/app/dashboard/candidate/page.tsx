"use client";
import LayoutWrapper from "@/app/_components/LayoutWrapper";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  }, []);
  return (
    <>
      <div>candidate dashboard</div>;
    </>
  );
};

export default page;
