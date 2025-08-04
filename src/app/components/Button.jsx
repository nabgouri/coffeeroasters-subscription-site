export default function Button({ children, disabled, className, ...rest }) {
  let bgColor = disabled ? "bg-[#E2DEDB]" : "bg-darkCryan";
  return (
    <button
      className={`text-lg text-background font-black leading-6 py-4 px-8 rounded-md  hover:bg-[#66d2cf] cursor-pointer font-fraunces ${bgColor} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
