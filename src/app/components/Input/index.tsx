"use client";

interface InputFieldProps {
  label: string;
  type?: string;
  error?: string;
  register: any;
  className?: string;
}

export function InputField({ label, type = "text", error, register, className }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm text-gray-300">{label}</label>
      <input 
        type={type} 
        {...register} 
        className={className} 
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
