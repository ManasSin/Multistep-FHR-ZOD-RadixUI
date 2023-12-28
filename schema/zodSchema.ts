import * as z from "zod";

// interface data {
//   email: String;
//   password: String;
//   username?: String;
//   confirmpassword?: String;
// }

export const AuthSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(
        8,
        "Must be 8 char long"
        // "Must include 10 char, \n should include these \n unique char, \n A number, \n Atleast one capital letter, \n Undercase letter"
      )
      .max(40, "Not more then 40 char long")
      .regex(/[A-Z]/, "Must contain capital letter")
      .regex(/[a-z]/, "Must contain lowercase letter/s")
      .regex(
        /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/,
        "Must contain atleat one special charector/s"
      )
      .regex(/[0-9]/, "Must contain numbers"),
    username: z.string(),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords must match.",
  });

export const personalDataSchema = z.object({
  firstName: z
    .string()
    .min(3, "Firstname should atleast be 3 char long")
    .max(40, "Cannot take more then 40 char"),
  lastName: z
    .string()
    .min(2, "Lastname should atleast be 2 char long")
    .max(40, "Cannot take more then 40 char"),
  email: z.string().email(),
  age: z
    .string()
    .min(1, "Must be more then 10")
    .transform((val) => parseInt(val, 10)),
  address: z.string().min(8, "must be 8 char long"),
  state: z
    .string()
    .min(2, "must be more then 2 char")
    .max(40, "please change your home"),
  city: z.string().or(z.number()),
  zipcode: z.number().min(4).or(z.string().min(4)),
  country: z.string().min(2),
});
