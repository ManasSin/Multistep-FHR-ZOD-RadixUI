"use client";

import { FC } from "react";
import { Button } from "../ui/button";

interface SocialProps {}

const Social: FC<SocialProps> = ({}) => {
  return (
    <div className="flex items-center gap-3 w-full">
      <Button
        onClick={() => {}}
        variant={"outline"}
        size="lg"
        className="w-full"
      >
        Google
      </Button>
      <Button
        onClick={() => {}}
        variant={"outline"}
        size="lg"
        className="w-full"
      >
        Github
      </Button>
    </div>
  );
};

export default Social;
