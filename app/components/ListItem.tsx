import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function ListItem({ children }: Props) {
  return (
    <li className="flex flex-row gap-2">
      <Image src="icon-list.svg" alt="icon list" width={21} height={21} />
      <p>{children}</p>
    </li>
  );
}
