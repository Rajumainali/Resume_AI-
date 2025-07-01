"use client";

import React from "react";
import dynamic from "next/dynamic";
const LayoutWrapper = dynamic(
  () => import("../../../_components/LayoutWrapper"),
  {
    ssr: false,
  }
);

const page = () => {
  return <div>This is contact page</div>;
};

export default page;
