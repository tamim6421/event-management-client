import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Pack from "./Pack";
import { Helmet } from "react-helmet-async";

const OurPackage = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div>
      <Helmet>
        <title>BIYESADI | Package</title>
      </Helmet>
      <Navbar></Navbar>

      <div>
        <p
          className="text-4xl text-center text-rose-300 font-semibold mt-36 mb-5 "
          data-aos="fade-down"
        >
          Choose Your Right Plan!!
          <hr
            className=" border-2 w-24 mt-2 mb-3 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </p>
        <p className="text-center mb-10" data-aos="fade-up">
          Select fot the plane , ensuring a perfect match. Need More Or Less ?{" "}
          <br />
          Choose yur package and make your moment beautiful{" "}
        </p>

        <div className="relative">
          <img
            src="https://i.ibb.co/9gy8s5d/pexels-jin-wedding-5729135.jpg"
            alt=""
          />
          <div>
            <h3
              className="text-4xl md:text-7xl text-pink-300 absolute top-2  md:top-36 left-28 "
              data-aos="fade-up"
            >
              Make Your Moment Beautiful
            </h3>
          </div>
        </div>
      </div>
      <p
        className="text-4xl text-center text-rose-300 font-semibold mt-36 mb-12 "
        data-aos="fade-down"
      >
        Our Best Package
        <hr
          className=" border-2 w-24 mt-2 mb-3 border-orange-500 mx-auto"
          data-aos="fade-up"
        />
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {data.map((pack) => (
          <Pack key={pack.id} pack={pack}></Pack>
        ))}
      </div>
    </div>
  );
};

export default OurPackage;
