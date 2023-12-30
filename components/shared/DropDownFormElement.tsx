import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {
  formControl: any;
  name: string;
  lable: string;
  type?: string;
  className?: string | undefined;
  FeildClassName?: string | undefined;
};

const DropDownFormElement = ({
  lable,
  formControl,
  name,
  FeildClassName,
  className,
}: Props) => {
  return (
    <FormField
      control={formControl}
      name={`${name}`}
      render={({ field }) => (
        <FormItem className={`${FeildClassName}`}>
          <FormLabel>{`${lable}`}</FormLabel>
          <FormControl>{/* actual drop down goes here. */}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DropDownFormElement;
