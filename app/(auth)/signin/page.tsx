import SingInForm from "@/components/shared/SignInFrom";
import { FC } from "react";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="max-w-xl mx-auto my-24 px-5 flex items-center justify-center">
      <SingInForm />
    </div>
  );
};

export default page;
