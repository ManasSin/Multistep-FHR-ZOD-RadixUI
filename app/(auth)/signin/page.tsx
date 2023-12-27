import SingInForm from "@/components/shared/SignInFrom";
import { FC } from "react";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="max-w-xl mx-auto my-24">
      <SingInForm />
    </div>
  );
};

export default page;
