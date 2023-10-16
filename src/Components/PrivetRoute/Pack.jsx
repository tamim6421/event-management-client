

// eslint-disable-next-line react/prop-types
const Pack = ({pack}) => {
    // eslint-disable-next-line react/prop-types
    const{name, price, features,} = pack
    // console.log(pack)
    return (
        <div className="box mb-36">
            <div className="relative mx-auto flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-300 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-300/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    <p className="block font-sans text-2xl font-semibold  uppercase leading-normal text-white antialiased" data-aos="fade-down" >
      {name}
    </p>
    <h1 className="mt-6 flex justify-center gap-1 font-sans text-6xl font-normal tracking-normal text-white antialiased">
      <span className="mt-2 text-4xl" data-aos="fade-right">$</span>{price}
      <span className="self-end text-4xl" data-aos="fade-left">/Days</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
     
    {
       // eslint-disable-next-line react/prop-types
       features.map((feature,i) => <span key={i}>
                 <li className="flex items-center gap-4" data-aos="fade-up">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
         {feature}
        </p>
      </li>

       </span>) 
    }
    </ul>
  </div>
  <div className="mt-12 p-0">
    <button
      className=" py-2 rounded-lg w-full bg-pink-300 hover:bg-pink-400" data-aos="fade-up"
    >
      Booking Us Now
    </button>
  </div>
</div>
        </div>
    );
};

export default Pack;