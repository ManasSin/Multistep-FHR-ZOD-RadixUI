import React from "react";

type Props = {};

export default function Form({}: Props) {
  const steps = {
    step1: { name: "step 1", details: "personal details" },
    step2: { name: "step 2", details: "address" },
    step3: { name: "step 3", details: "submit" },
  };
  return <div>Form</div>;
}
