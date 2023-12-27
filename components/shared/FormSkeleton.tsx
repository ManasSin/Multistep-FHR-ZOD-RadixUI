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

const FormSkeleton = ({
  formControl,
  name,
  lable,
  type,
  className,
  FeildClassName,
  ...props
}: Props) => {
  return (
    <FormField
      control={formControl}
      name={`${name}`}
      render={({ field }) => (
        <FormItem className={`${FeildClassName}`}>
          <FormLabel>{`${lable}`}</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter FristName"
              {...field}
              className={`${className}`}
              autoComplete="false"
              autoCorrect="false"
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSkeleton;
