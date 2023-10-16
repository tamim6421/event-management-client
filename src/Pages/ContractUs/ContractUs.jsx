import Navbar from "../../Components/Navbar/Navbar";
import phone from "../../assets/call.png";
import email from "../../assets/email.png";
import add from "../../assets/address.png";
import { MdOutlineHomeWork } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const ContractUs = () => {
  return (
    <div className="">
        <Helmet>
                <title>
                BIYESADI | Contract
                </title>
            </Helmet>
      <Navbar></Navbar>
      <img src="" alt="" />
      <p className="text-4xl text-center text-rose-300 font-semibold mt-20 " data-aos="fade-down">
        Contact With Us
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
      </p>

      <div className=" bg-pink-50 mt-20">
        <div className="card  "  data-aos="fade-right">
          <figure className="px-10 pt-10">
            <img src={phone} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-rose-300">Call Us</h2>
            <p>+987 092 291 091</p>
            <p>+94987 2923421 0941</p>
          </div>
        </div>
        <div className="card  "  data-aos="fade-left">
          <figure className="px-10 pt-10">
            <img src={email} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-rose-300">Connect With Email</h2>
            <p>support@templaza.com</p>
            <p>support@templaza.com</p>
          </div>
        </div>
        <div className="card"  data-aos="fade-up">
          <figure className="px-10 pt-10">
            <img src={add} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-rose-300">Our Office Location</h2>
            <p>BiyeSadi Event Management Company</p>
            <p>London, UK, 10, Friks, Avenue</p>
          </div>
        </div>
      </div>

      <div>
      <p className="text-4xl text-center text-rose-300 font-semibold mt-36 mb-12 " data-aos="fade-down">
       Send Your Feedback
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
      </p>

        <div className="hero min-h-screen bg-pink-50">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="text-center  lg:text-left" data-aos="fade-up" >
              <img className="" src="https://i.ibb.co/p4c52c1/man-791049-1920.jpg" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form className="card-body" data-aos="fade-down" >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Input Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Input Your Email"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                  <div className="relative w-full min-w-[200px]">
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-pink-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-pink-300 placeholder-shown:border-t-red-500 focus:border-2 focus:border-pink-300 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Text here
                    </label>
                  </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-pink-200 hover:bg-pink-300">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="my-20">
        <p className="text-4xl text-center text-rose-300 font-semibold mt-36 mb-12 " data-aos="fade-down">
       Our Office
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
      </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
            <div className="card  " data-aos="fade-down">
              <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-rose-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Guslhan</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
            <div className="card  " data-aos="fade-down">
              <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-rose-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Shahabag</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
            <div className="card  "data-aos="fade-down">
              <figure className="px-10 pt-10">
               <MdOutlineHomeWork className="text-5xl text-rose-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Motijhil</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractUs;
