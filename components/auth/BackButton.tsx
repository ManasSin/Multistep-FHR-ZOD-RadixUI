import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="w-full font-normal">
      <Link href={`${href}`}>{label}</Link>
    </Button>
  );
};

export default BackButton;
