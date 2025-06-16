import React from "react";
import Herotitle from "../_components/herotitle";
import Navbar from "../_components/navbar";
import Card from "../_components/cards";

function page() {
  return (
    <div className="dark:bg-[#000000]">
      <Navbar />
      <Herotitle />
      <Card />
    </div>
  );
}

export default page;
