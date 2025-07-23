export default function Hero({ title, description, background, children }) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-[6.25rem] px-6 rounded-[10px] mt-[2.5rem] flex items-center justify-center flex-col gap-[2.5rem]"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className=" text-center">
        <h1 className=" font-fraunces text-[2.5rem] text-background mb-6 font-black">
          {title}
        </h1>
        <p className="text-base leading-6 text-background ">{description}</p>
      </div>
      {children}
    </section>
  );
}
