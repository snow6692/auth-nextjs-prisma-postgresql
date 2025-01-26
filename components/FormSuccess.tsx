import { FaCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
  message?: string;
}
function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;

  return (
    <div className=" bg-emerald-500/15 p-3 rounded-md flex  items-center gap-x-2 text-sm text-emerald-500">
      <FaCheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
