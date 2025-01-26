import { FaExclamationTriangle } from "react-icons/fa";
import CardWrapper from "./CardWrapper";

function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Go back to login"
    >
      <div className=" w-full flex items-center   justify-center">
        <FaExclamationTriangle className=" text-destructive" />
      </div>
    </CardWrapper>
  );
}

export default ErrorCard;
