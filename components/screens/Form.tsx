"use client";

import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { personalDataSchema } from "@/schema/zodSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { TPersonalDetailsScehma } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {};

// ! function start
export default function FormScreen({}: Props) {
  const [formValue, setFormValue] = useState();

  const form = useForm<TPersonalDetailsScehma>({
    resolver: zodResolver(personalDataSchema.partial()),
    defaultValues: {
      address: "",
      city: "",
      email: "",
      fristName: "",
      lastName: "",
      zipcode: "",
    },
  });

  const handleCheck = (value: TPersonalDetailsScehma) => {
    console.log(value);
  };

  const steps = [
    { name: "step 1", details: "Personal details" },
    { name: "step 2", details: "Address" },
    { name: "step 3", details: "Confirm" },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    console.log(form.getFieldState);
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
            className={`flex flex-col gap-1 container w-full items-start justify-center cursor-pointer border-r ${
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

      <section className="w-full h-fit mt-16">
        {currentStep === 0 ? (
          <div className="container">
            <h3 className="font-bold text-3xl  my-8  pb-4">
              <p className="border-b pb-4">Personal data form</p>
            </h3>
            <Form {...form}>
              <form
                // onBlurCapture={form.handleSubmit(handleCheck)}
                className="flex flex-col gap-y-5"
              >
                <div className="flex justify-between gap-5">
                  <FormField
                    control={form.control}
                    name="fristName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>FristName</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter FristName"
                            {...field}
                            className="w-full flex-grow"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Lastname"
                            {...field}
                            className="w-full flex-grow"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your Email"
                            {...field}
                            className="w-fit min-w-[70%]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Age"
                            type="number"
                            className="w-fit block"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <Button type="submit">Submit</Button> */}
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
                // onBlurCapture={form.handleSubmit(handleCheck)}
                className="flex flex-col gap-y-5"
              >
                <div className="flex justify-between gap-5">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Your Streat address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Pie 1, creambell, HoaxLand."
                            {...field}
                            className="w-full flex-grow"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>State name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Creambell"
                            {...field}
                            className="w-full flex-grow"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4 justify-between">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>City Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Hoaxland"
                            {...field}
                            className="w-fit min-w-[70%]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* TODO: make this a typeshead search bar */}
                  <FormField
                    control={form.control}
                    name="zipcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter zipcode</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="PP00000"
                            className="w-fit block"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Age"
                            className="w-fit block"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
          </div>
        ) : (
          <div className="container">
            <h3 className="font-bold text-3xl  my-8  pb-4">
              <p className="border-b pb-4">Address</p>
            </h3>
            <Form {...form}>
              <form>
                <Button variant={"default"} size={"lg"} type="submit">
                  Submit Form
                </Button>
              </form>
            </Form>
          </div>
        )}
      </section>

      <section className=" absolute bottom-6 max-w-4xl w-full">
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
