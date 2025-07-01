import React from "react";
import { LoginFormDemo } from "../../_components/form";
import LayoutWrapper from "../../_components/LayoutWrapper";

function page() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4">
      <LoginFormDemo />
    </div>
  );
}

export default page;
