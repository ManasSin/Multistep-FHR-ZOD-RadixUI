import { FC } from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess: FC<FormSuccessProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="rounded-md bg-emerald-500/15 text-emerald-500 border p-3 flex items-center justify-center gap-x-2 text-sm">
      {/* put icons TODO */}
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
