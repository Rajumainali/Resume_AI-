"use client";
import React from "react";
import Herotitle from "../_components/herotitle";
import Navbar from "../_components/navbar";
import Card from "../_components/cards";
import { ButtonDemo } from "../_components/button";
import VacancyCard from "../_components/vacancyCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Feature from "../_components/feature";
import LoginandSignupprocess from "../_components/loginandSignupprocess";
import Discoverjob from "../_components/Discoverjob";

function page() {
  return (
    <>
      <div className="dark:bg-[#000000]">
        <Navbar />
        <Herotitle />
        <Card />
        <div className="flex flex-row justify-around gap-9  w-full  mt-28">
          <div className="flex flex-col justify-between gap-1">
            <h1 className="text-2xl font-bold">
              Get your dream Internship now
            </h1>
            <p className="text-[14px]">
              Search your career opportunity through the available positions.
            </p>
            <div className="flex flex-row justify-center items-center gap-5 mt-7">
              <ButtonDemo
                name="Featured Internship"
                className="bg-[#aa8bed] text-black hover:bg-[#a187d7] rounded-[40px]"
              />
              <ButtonDemo
                name="Nearest"
                className="bg-gray-600 text-black hover:bg-gray-700 rounded-[40px]"
              />
              <ButtonDemo
                name="Newest"
                className="bg-gray-600 text-black hover:bg-gray-700 rounded-[40px]"
              />
              <ButtonDemo
                name="Oldest"
                className="bg-gray-600 text-black hover:bg-gray-700 rounded-[40px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center ">
            <Link href={"/"}>Browse all Jobs</Link>
            <ChevronRight />
          </div>
        </div>
        <VacancyCard />
        <Feature />
        <LoginandSignupprocess />
        <Discoverjob />
      </div>
    </>
  );
}

export default page;
