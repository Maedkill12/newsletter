type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h2 className="text-4xl font-bold text-[#272B48] my-4">{children}</h2>;
}
