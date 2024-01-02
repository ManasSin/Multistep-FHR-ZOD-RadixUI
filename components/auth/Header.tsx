import { FC } from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ title, description, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Header;
