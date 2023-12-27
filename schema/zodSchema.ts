import * as z from "zod";

// interface data {
//   email: String;
//   password: String;
//   username?: String;
//   confirmpassword?: String;
// }

export const AuthSchema = z.object({
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
});

export const personalDataSchema = z.object({
  fristName: z
    .string()
    .min(3, "Firstname should atleast be 3 char long")
    .max(40, "Cannot take more then 40 char"),
  lastName: z
    .string()
    .min(2, "Lastname should atleast be 2 char long")
    .max(40, "Cannot take more then 40 char"),
  email: z.string().email(),
  age: z.number().max(100),
  address: z.string(),
  state: z.string().max(40),
  city: z.string().or(z.number()),
  zipcode: z.number().or(z.string()),
  country: z.string(),
});
