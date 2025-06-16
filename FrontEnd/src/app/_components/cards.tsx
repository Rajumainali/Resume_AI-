import React from "react";
import { ButtonDemo } from "./button";

function cards() {
  return (
    <div className="flex flex-row justify-center gap-9 mx-8 w-full ">
      <div className="flex flex-col justify-between bg-[#3D3D3D] px-4 py-4 rounded-3xl h-[200px] my-3 w-md">
        <h1 className="text-amber-50 font-bold">For Candidate</h1>
        <p className="text-amber-50">
          Unlock endless opportunities and connect with top employers. Let your
          skills shine and land your dream job.
        </p>
        <ButtonDemo name="Upload Your CV" />
      </div>
      <div className="flex flex-col justify-between bg-[#3D3D3D] px-4 py-4 rounded-3xl h-[200px] my-3 w-md">
        <h1 className="text-amber-50 font-bold">For Employer or Company</h1>
        <p className="text-amber-50">
          Unlock endless opportunities and connect with top employers. Let your
          skills shine and land your dream job.
        </p>
        <ButtonDemo name="Start Hiring" />
      </div>
    </div>
  );
}

export default cards;
