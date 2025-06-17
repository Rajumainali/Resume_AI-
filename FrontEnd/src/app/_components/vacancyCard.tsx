import Image from "next/image";
import React from "react";
import { ButtonDemo } from "../_components/button";
import { ChevronsRight } from "lucide-react";

function VacancyCard() {
  return (
    <div className="flex  w-[80vw] translate-x-44">
      {/* Single card - you can duplicate this div for multiple cards */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mt-7 h-[240px] w-[300px] flex-shrink-0">
        {/* Header with logo and company info */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/img/X_logo.jpg"
              alt="Twitter Inc logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-semibold text-gray-900 mb-1">
              Twitter Inc
            </h1>
            <p className="text-xs text-gray-500">California, USA</p>
          </div>
        </div>

        {/* Job description */}
        <div className="mb-4">
          <p className="text-gray-600 text-xs leading-relaxed">
            Online social networking and micro-blogging services that enable
            their users to...{" "}
            <span className="text-blue-600 font-medium cursor-pointer">
              Read More
            </span>
          </p>
        </div>

        {/* Job details tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
            6 days left
          </span>
          <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
            Kathmandu
          </span>
          <span className="px-2.5 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
            Full Time
          </span>
        </div>

        {/* Apply button */}
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-1.5 transition-colors text-sm">
            APPLY NOW
            <ChevronsRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VacancyCard;
