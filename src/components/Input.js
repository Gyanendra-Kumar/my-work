"use client";

export default function Input({
  type,
  value,
  onChange,
  name,
  id,
  placeholder,
}) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={`w-full p-4 pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-black `}
    />
  );
}
