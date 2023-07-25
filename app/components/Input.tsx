import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  value: string;
  error?: string;
  setValue: Dispatch<SetStateAction<string>>;
  name?: string;
  placeholder?: string;
};

export default function Input({
  label,
  value,
  setValue,
  name,
  placeholder,
  error,
}: Props) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-[#272B48]">{label}</span>
        {error && <span className="font-bold text-red-500">{error}</span>}
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        placeholder={placeholder}
        className={`outline-none border  py-4 px-5 rounded-lg w-full ${
          error ? "border-red-500 bg-red-100" : "border-gray-200"
        }`}
      />
    </label>
  );
}
