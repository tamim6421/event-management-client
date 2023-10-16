/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, image, price, short_description, id } = service;
  // console.log(service);
  return (
    <div>
      <div className="card card-side flex flex-col md:flex-row bg-pink-50 shadow-xl" data-aos="zoom-in-right">
     <div className="box">
     <figure>
          <img
            src={image}
            data-aos="fade-down"
            className=" md:h-72 w-72 "
            alt="Movie"

          />
        </figure>
     </div>
     <div>
     <div className="card-body ">
          <h2 className="card-title text-rose-300 " data-aos="fade-down">{name}</h2>
          <p className="text-lg text-gray-400 font-semibold" data-aos="fade-up">${price}</p>
          <p className="text-gray-400" data-aos="fade-down">{short_description}</p>
          <div className="card-actions justify-end">
      <Link to={`/details/${id}`}>
      <button
     
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
      </Link>
          </div>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Service;
