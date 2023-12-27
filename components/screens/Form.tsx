"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export default function Form({}: Props) {
  const steps = [
    { name: "step 1", details: "Personal details" },
    { name: "step 2", details: "Address" },
    { name: "step 3", details: "Confirm" },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    console.log(currentStep);
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    console.log(currentStep);
  };
  return (
    <main className="max-w-4xl w-full flex flex-col items-center gap-y-10 mx-auto">
      <section
        aria-label="navbar-progress"
        className="flex justify-between items-center w-full h-10"
      >
        {/* <ol role="list" className="flex flex-col spca"></ol> */}
        {steps.map((step, index) => (
          <div
            aria-label="progress"
            className={`flex flex-col gap-1 container w-fit items-start justify-center cursor-pointer ${
              index != 0 ? "border-l" : ""
            } ${
              index === currentStep
                ? "underline underline-offset-2 font-bold text-lg"
                : "text-stone-600"
            }`}
            key={step.name}
            onClick={(e) => setCurrentStep(index)}
          >
            <span className="text-sm font-medium text-sky-600 transition-colors ">
              {step.name.toUpperCase()}
            </span>
            <span className="text-sm font-medium">{step.details}</span>
          </div>
        ))}
      </section>

      <section className="w-full h-fit">
        {currentStep === 0 ? (
          <div>step 1</div>
        ) : currentStep === 1 ? (
          <div className="flex">step 2</div>
        ) : (
          <div>step3</div>
        )}
      </section>
    </main>

    // <div>
    //   <Button variant={"outline"} size={"sm"} onClick={prev}>
    //     prev
    //   </Button>
    //   <Button variant={"outline"} size={"sm"} onClick={next}>
    //     next
    //   </Button>
    // </div>
  );
}
