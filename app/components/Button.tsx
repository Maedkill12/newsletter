type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({ children, type = "button", onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-[#272B48] text-white font-bold text-base w-full py-4 px-5 rounded-lg hover:bg-gradient-to-r hover:from-[#FF5379] hover:to-[#FF673E] hover:shadow-[#FF673E] hover:shadow-2xl"
    >
      {children}
    </button>
  );
}
