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
  fristName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  age: z.number(),
  address: z.string(),
  city: z.string().or(z.number()),
  zipcode: z.number().or(z.number()),
});
