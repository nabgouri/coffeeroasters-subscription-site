import Option from "./Option";

export default function SelectorOption({ title, options }) {
  return (
    <section className="mb-24">
      <div className="flex items-center mb-[1.125rem] justify-between">
        <h2 className="font-black font-fraunces text-6 leading-7 text-grey  ">
          {title}
        </h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            viewBox="0 0 8 8"
          >
            <path fill="currentColor" d="m2 5l2-2l2 2l1-1l-3-3l-3 3"></path>
          </svg>
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {options.map((option) => (
          <Option option={option}></Option>
        ))}
      </ul>
    </section>
  );
}
