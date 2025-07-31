export default function Hero({
  title,
  description,
  background,
  children,
  className,
  backgroundDesktop,
  backgroundTablet,
}) {
  return (
    <section
      style={{
        "--bg-mobile": `url(${background.src})`,
        "--bg-desktop": `url(${backgroundDesktop.src})`,
        "--bg-tablet": `url(${backgroundTablet.src})`,
      }}
      className={`bg-cover bg-no-repeat py-[6.25rem]  px-6 md:px-[3.625rem] rounded-[10px] mt-[2.5rem] mb-[7.5rem] md:mb-36 flex items-center md:items-start justify-center flex-col gap-[2.5rem] ${className} hero`}
    >
      <div className=" text-center md:text-start md:w-2/3">
        <h1 className=" font-fraunces text-[2.5rem] md:text-5xl text-background mb-6 font-black">
          {title}
        </h1>
        <p className="text-base leading-6 text-background ">{description}</p>
      </div>
      {children}
    </section>
  );
}
