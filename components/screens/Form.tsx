"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { personalDataSchema } from "@/schema/zodSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, TPersonalDetailsScehma } from "@/lib/types";
import { Form } from "../ui/form";
import FormSkeleton from "../shared/FormSkeleton";

const steps = [
  {
    name: "step 1",
    details: "Personal details",
    fields: ["firstName", "lastName", "email", "age"],
  },
  {
    name: "step 2",
    details: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { name: "step 3", details: "Outro !" },
];

export default function FormScreen() {
  const form = useForm<TPersonalDetailsScehma>({
    resolver: zodResolver(personalDataSchema.partial()),
    defaultValues: {
      address: "",
      city: "",
      email: "",
      firstName: "",
      lastName: "",
      age: 0,
      zipcode: "",
      country: "",
      state: "",
    },
  });

  const processForm: SubmitHandler<TPersonalDetailsScehma> = (data) => {
    console.log(data);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const validateToProcede = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await form.trigger(fields as FieldValues[], {
      shouldFocus: true,
    });
    return isValid;
  };

  const next = async () => {
    const proceed = await validateToProcede();
    if (!proceed) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setCurrentStep((prev) => prev + 1);
    }
    console.log(
      { "current step": currentStep },
      { "from data": form.getValues() }
    );
  };

  const prev = async () => {
    const proceed = await validateToProcede();
    if (!proceed) return;

    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    console.log(currentStep);
  };

  const switchNavTab = async (index: number) => {
    const proceed = await validateToProcede();
    if (!proceed) return;

    setCurrentStep(index);
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
            className={`flex flex-col gap-1 container w-full items-start justify-center cursor-pointer border-r ${
              index === currentStep
                ? "underline underline-offset-2 font-bold text-lg"
                : "text-stone-600"
            }`}
            key={step.name}
            onClick={() => switchNavTab(index)}
          >
            <span className="text-sm font-medium text-sky-600 transition-colors ">
              {step.name.toUpperCase()}
            </span>
            <span className="text-sm font-medium">{step.details}</span>
          </div>
        ))}
      </section>

      <section className="w-full h-fit mt-16">
        {currentStep === 0 ? (
          <div className="container">
            <h3 className="font-bold text-3xl  my-8  pb-4">
              <p className="border-b pb-4">Personal data form</p>
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(processForm)}
                className="flex flex-col gap-y-5"
              >
                {/* can do like but stypling will be challange */}
                {/* {steps[currentStep].fields?.map((step, index) => (
                  <div className="flex justify-between gap-5" key={index}>
                    <FormSkeleton
                      formControl={form.control}
                      lable={step}
                      name={step}
                      className="w-full flex-grow"
                      FeildClassName="w-full"
                    />
                  </div>
                ))} */}
                <div className="flex justify-between gap-5">
                  <FormSkeleton
                    formControl={form.control}
                    lable="FirstName"
                    name="firstName"
                    className="w-full flex-grow"
                    FeildClassName="w-full"
                  />
                  <FormSkeleton
                    formControl={form.control}
                    lable="LastName"
                    name="lastName"
                    className="w-full flex-grow"
                    FeildClassName="w-full"
                  />
                </div>
                <div className="flex gap-4">
                  <FormSkeleton
                    formControl={form.control}
                    lable="Email"
                    name="email"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />
                  <FormSkeleton
                    formControl={form.control}
                    lable="Age"
                    name="age"
                    className="w-fit"
                    type="text"
                  />
                </div>

                <Button type="submit">Save and continue</Button>
              </form>
            </Form>
          </div>
        ) : currentStep === 1 ? (
          <div className="container">
            <h3 className="font-bold text-3xl  my-8  pb-4">
              <p className="border-b pb-4">Address</p>
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(processForm)}
                className="flex flex-col gap-y-5"
                autoComplete="false"
              >
                <div className="flex justify-between gap-5">
                  <FormSkeleton
                    formControl={form.control}
                    lable="Address"
                    name="address"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />
                  <FormSkeleton
                    formControl={form.control}
                    lable="State/Provision"
                    name="state"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />
                </div>
                <div className="flex gap-4 justify-between">
                  <FormSkeleton
                    formControl={form.control}
                    lable="City"
                    name="city"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />

                  {/* TODO: make this a typeshead search bar */}
                  <FormSkeleton
                    formControl={form.control}
                    lable="Zipcode"
                    name="zipcode"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />
                  <FormSkeleton
                    formControl={form.control}
                    lable="Country"
                    name="country"
                    className="w-full min-w-[70%]"
                    FeildClassName="w-full"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        ) : (
          <div className="container">
            <h3 className="font-bold text-3xl  my-8  pb-4">
              <p className="border-b pb-4">Thanks for submiting form.</p>
            </h3>

            <div className="rounded-full w-16 aspect-square bg-sky-500 outline-sky-300"></div>
          </div>
        )}
        {/* </Form> */}
      </section>

      <section className=" absolute bottom-6 max-w-xl md:max-w-3xl w-full">
        <div className="my-14 flex justify-between w-full container">
          <Button
            disabled={currentStep === 0}
            className={currentStep === 0 ? "cursor-text" : ""}
            variant={"outline"}
            size={"sm"}
            onClick={prev}
          >
            prev
          </Button>
          <Button
            disabled={currentStep === steps.length - 1}
            className={currentStep === steps.length - 1 ? "cursor-text" : ""}
            variant={"outline"}
            size={"sm"}
            onClick={next}
          >
            next
          </Button>
        </div>
      </section>
    </main>
  );
}
