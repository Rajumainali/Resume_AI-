"use client";

import { useState, ChangeEvent } from "react";
import { Upload, Calendar, UserRoundPen } from "lucide-react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(() => import("@/app/_components/custom-editor"), {
  ssr: false,
});

const steps = ["About yourself", "Address", "Resume"];

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  sectors: string[];
  designation: string;
  aboutMe: string;
  province: string;
  city: string;
  postalCode: string;
  currentAddress: string;
  resume: File | null;
};

export default function MultiStepForm() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "Ujjwol Mainali",
    lastName: "Mainali",
    gender: "Male",
    dateOfBirth: "08/07/2002",
    sectors: ["IT"],
    designation: "MERN developer",
    aboutMe: "I am full stack developer.",
    province: "Bagmati",
    city: "Kathmandu",
    postalCode: "4400",
    currentAddress: "Kapan",
    resume: null,
  });

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSectorChange = (sector: string) => {
    setFormData((prev) => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector],
    }));
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
        //! means the user doesnt send not null value
      }));
    }
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Step Progress Bar */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((label, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  index <= step
                    ? "bg-black border-black"
                    : "bg-white border-gray-300"
                }`}
              />
              <span className="text-xs mt-2 text-gray-600">{label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-0.5 mx-4 ${
                  index < step ? "bg-black" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">About yourself</h2>
            <p className="text-gray-500 mb-8">
              Fill out your primary information.
            </p>

            {/* Profile Picture */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserRoundPen className="w-6 h-6 text-gray-400" />
                </div>
                <label
                  htmlFor="resume-upload"
                  className="text-red-700 cursor-pointer"
                >
                  upload your Profile Picture
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gender<span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date Of Birth<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sectors<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {formData.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {sector}
                      <button
                        onClick={() => handleSectorChange(sector)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Designation<span className="text-red-500">*</span>
                </label>
                <input
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* 
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                About Me<span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                  <select className="text-sm border-none outline-none">
                    <option>Normal</option>
                  </select>
                  <div className="flex gap-1 ml-4">
                    <button className="p-1 hover:bg-gray-100 rounded">B</button>
                    <button className="p-1 hover:bg-gray-100 rounded italic">
                      I
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded underline">
                      U
                    </button>
                  </div>
                </div>
                <textarea
                  name="aboutMe"
                  value={formData.aboutMe}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 border-none outline-none resize-none"
                />
              </div>
            </div> */}
            <CustomEditor />
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-8">Address</h2>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Province<span className="text-red-500">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Bagmati">Bagmati</option>
                  <option value="Gandaki">Gandaki</option>
                  <option value="Lumbini">Lumbini</option>
                  <option value="Karnali">Karnali</option>
                  <option value="Sudurpashchim">Sudurpashchim</option>
                  <option value="Koshi">Koshi</option>
                  <option value="Madhesh">Madhesh</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  City<span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Postal Code
              </label>
              <input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Current Address<span className="text-red-500">*</span>
              </label>
              <input
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-8">Resume</h2>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="flex flex-col items-center">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <button className="text-blue-600 font-medium mb-2">
                  Upload Resume
                </button>
                <p className="text-sm text-gray-500">
                  Note: Can only be used to apply for a job
                </p>
                <label
                  htmlFor="resume-upload"
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />

                {formData.resume && (
                  <p className="mt-2 text-sm text-green-600">
                    File selected: {formData.resume.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8 gap-4">
          {step > 0 && (
            <button
              onClick={handlePrev}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Previous
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
