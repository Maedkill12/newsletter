import Image from "next/image";
import Title from "./Title";
import Button from "./Button";

type Props = {
  email: string;
  onClick: () => void;
};

export default function Confirmation({ email, onClick }: Props) {
  return (
    <div className="flex flex-col justify-center gap-4 sm:max-w-[300px] my-6">
      <Image
        src="/icon-success.svg"
        alt="icon success"
        width={64}
        height={64}
      />
      <Title>Thanks for subscribing!</Title>
      <p>
        A confirmnation has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription
      </p>
      <Button onClick={onClick}>Dismiss message</Button>
    </div>
  );
}
