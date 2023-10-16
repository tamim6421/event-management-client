const Events = () => {
  return (
    <div className="">
      <div className="my-36">
        <h3 className="text-center text-4xl text-pink-300 font-semibold" data-aos="fade-down">WELCOME 
        <hr className=" border-2 w-16 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  /> 
        </h3>
        <p className="text-center text-gray-400 text-xl mt-2" data-aos="fade-up">
          Event is a professionally managed event
        </p>
      </div>

      <div className="">
        <h3 className="text-center text-4xl my-14 font-semibold text-pink-300"  data-aos="fade-down">
          WE ARE HAPPY TO SERVE YOU
          <hr className=" border-2 w-1/6 mt-3 border-rose-500 mx-auto" data-aos="fade-up"  /> 
        </h3>

        <div  className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="card box bg-base-100 shadow-xl" data-aos="zoom-in-down">
            <figure>
              <img
                src="https://i.ibb.co/YfRwrVb/pexels-silvia-trigo-1857157.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-300" data-aos="fade-down" >
            Birthday Party
              </h2>
              <p className="text-gray-400" data-aos="fade-up" >A birthday is the anniversary of the birth of a person</p>
            </div>
          </div>
          <div className="card box bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure>
              <img
                src="https://i.ibb.co/yYTRQXN/blog-3.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-300" data-aos="fade-up" >
              Marriage Anniversary 
              </h2>
              <p className="text-gray-400" data-aos="fade-down" > Couples  mark the occasion by celebrating their relationship</p>
            </div>
          </div>

          <div className="card box bg-base-100 shadow-xl " data-aos="zoom-in-down">
            <figure>
              <img
                src="https://i.ibb.co/h8PttQP/img5.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-rose-300" data-aos="fade-down" >
            Wedding Party
              </h2>
              <p className="text-gray-400"  data-aos="fade-up" >time for joy, so definitely take it all in</p>
            </div>
          </div>

          <div className="card box bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure>
              <img
                src="https://i.ibb.co/fY244pZ/pexels-tae-fuller-1616113.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-300" data-aos="fade-down" >
            Get Together Party
              </h2>
              <p className="text-gray-400" data-aos="fade-up" >Time for joy, so definitely take it all in</p>
            </div>
          </div>

        </div>

        <div className="my-20 relative ">
          <img className="" src="https://i.ibb.co/C6GBqf5/pexels-4564957.jpg" alt="" />
          <div className="absolute top-2 left-5 md:top-40 md:left-40" data-aos="zoom-in-right">
            <h1 className=" text-3xl md:text-6xl text-[#7f533f] font-semibold animate__animated  animate__fadeInDown" >Easily find <br />
                      the best <br />
                      wedding services</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
