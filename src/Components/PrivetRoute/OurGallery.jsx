import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";

const OurGallery = () => {
  return (
    <div className="p-2">
       <Helmet>
                <title>
                BIYESADI | Gallery
                </title>
            </Helmet>
      <Navbar></Navbar>
      <div >
        <h3 className="text-3xl md:text-6xl text-rose-300 my-20 text-center" data-aos="fade-down">
          Our Sweet Memory
          <hr className=" border-2 w-24 mt-2 mb-3 border-orange-500 mx-auto" data-aos="fade-up"  />
        </h3>

        <div>

        <div className="hero min-h-screen bg-rose-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
  <div className="grid gap-3 grid-cols-1 md:grid-cols-2">

<div className="card box bg-base-100 shadow-xl"  data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/kydVQtR/pexels-pavel-danilyuk-7180617.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

<div className="card box bg-base-100 shadow-xl"  data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/2Y18tcD/pexels-samaraagenstvo-feeria-2399097.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>
<div className="card box bg-base-100 shadow-xl"  data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/2hn8TRy/wedding-4660419-1920.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>
<div className="card box bg-base-100 shadow-xl"  data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/6g9NCf1/pexels-designecologist-1627935.jpgg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

</div>



    <div>
      <h1 className="text-3xl md:text-5xl text-pink-300 font-bold"  data-aos="zoom-in-down">Memorable Time </h1>
      <p className="py-6"  data-aos="zoom-in-up">Our dreams entwine like ivy, reaching towards the sky, painting a future that is uniquely ours. Each aspiration is a promise, a testament to the boundless potential of our shared journey.</p>
      
    </div>
  </div>
</div>


{/* others gallery */}
<h2 className=" text-3xl md:text-5xl mt-36 mb-10 text-pink-300 text-center" data-aos="fade-down" >Make Your Moment Beautiful
<hr className=" border-2 w-24 mt-2 mb-3 border-orange-500 mx-auto" data-aos="fade-up"  />
</h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/kq7KrrQ/380352815-2238134523054154-2064131686320867178-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/QvF3rd8/380355669-2238135109720762-3834617217702769499-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/F3wcCQ9/380372508-2238135203054086-7582942229261186031-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/KsxwkNn/381632855-2238135323054074-7964343171448378699-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/2SNzg5z/382173497-2238134389720834-5248483002104269388-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/NmQryVd/382187040-2238135833054023-7343103666152226387-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/cQyTLqr/382191079-2238135936387346-69165948096969081-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-up">
  <figure className="">
    <img
      src="https://i.ibb.co/DDNb05h/382216822-2238135626387377-877217468752026365-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>

      <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-down">
  <figure className="">
    <img
      src="https://i.ibb.co/KsxwkNn/381632855-2238135323054074-7964343171448378699-n.jpg"
      alt="Shoes"
      className="rounded-xl"
    />
  </figure>
</div>
     
        </div>  

        </div>
      </div>
    </div>
  );
};

export default OurGallery;












