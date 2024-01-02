import { FC } from "react";

interface FormErrorProps {
  message?: string;
}

const FormError: FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="rounded-md bg-destructive/15text-destructive border p-3 flex items-center justify-center gap-x-2 text-sm">
      {/* put icons TODO */}
      <p>{message}</p>
    </div>
  );
};

export default FormError;
