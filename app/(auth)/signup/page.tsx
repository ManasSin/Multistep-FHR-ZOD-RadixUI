import { FC } from "react";

import SingUpForm from "@/components/shared/SignUpForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="max-w-xl mx-auto flex my-24 px-5 justify-center items-center ">
      <SingUpForm />
    </div>
  );
};

export default page;
