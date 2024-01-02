import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "../auth/Header";
import Social from "../auth/Social";
import BackButton from "../auth/BackButton";
import { cn } from "@/lib/utils";

interface ModalProps {
  headerText?: string;
  headerLabel: string;
  ShowSocial?: boolean;
  buttonLabel: string;
  buttonHref: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({
  headerLabel,
  headerText,
  buttonHref,
  buttonLabel,
  children,
  ShowSocial,
  className,
}) => {
  return (
    <Card className={cn(`w-[400px] shadow-sm ${className}`)}>
      <CardHeader>
        <Header title={`${headerLabel}`} description="" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {ShowSocial && (
        <CardFooter className="w-full">
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={buttonLabel} href={buttonHref} />
      </CardFooter>
    </Card>
  );
};

export default Modal;
