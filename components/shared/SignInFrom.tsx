"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { TAuthType } from "@/lib/types";
import { AuthSchema } from "@/schema/zodSchema";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Modal from "../screens/Modal";
import FormSuccess from "../auth/FormSuccess";
import FormError from "../auth/FormError";

type Props = {};

function SignInForm({}: Props) {
  const form = useForm<TAuthType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  // console.log(AuthSchema._cached.keys);

  const handleSubmit = (value: TAuthType) => {
    // e.preventDefault();

    console.log(value);
  };

  return (
    <Modal
      buttonHref="/signup"
      buttonLabel="Don't have an account?"
      ShowSocial
      headerLabel="Sign In"
      // className="mx-auto"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-y-5"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
          <FormSuccess message={success} />
          <FormError message={error} />
        </form>
      </Form>
    </Modal>
  );
}

export default SignInForm;
