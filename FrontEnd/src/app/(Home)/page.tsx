"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Herotitle from "../_components/herotitle";
import Card from "../_components/cards";
import { ButtonDemo } from "../_components/button";
import VacancyCard from "../_components/vacancyCard";
import Feature from "../_components/feature";
import LoginandSignupprocess from "../_components/loginandSignupprocess";
import Discoverjob from "../_components/Discoverjob";
import JobAlertBanner from "../_components/alertjob";
import Faq from "../_components/Faq";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <div className="dark:bg-[#000000]">
      <Herotitle />
      <Card />
      <div className="flex flex-row justify-around gap-9 w-full mt-28">
        <div className="flex flex-col justify-between gap-1">
          <h1 className="text-2xl font-bold">Get your dream Internship now</h1>
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
        <div className="flex flex-row justify-center items-center">
          <Link href="/" className="hover:underline">
            Browse all Jobs
          </Link>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
      <VacancyCard />
      <Feature />
      <LoginandSignupprocess />
      <Discoverjob />
      <JobAlertBanner />
      <Faq />
    </div>
  );
}

export default Page;
