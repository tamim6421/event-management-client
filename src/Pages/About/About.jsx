import { Helmet } from "react-helmet-async";
import Love from "../../Components/Love/Love";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <div> 
       <Helmet>
                <title>
                BIYESADI | About
                </title>
            </Helmet>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center text-5xl mt-36 text-rose-400 font-semibold" data-aos="fade-down">
        
          About Wedding Planner
          <hr className="border-2 border-orange-500 w-36 mx-auto my-3 " data-aos="fade-up" />
        </h1>
        <p className="text-center text-xl w-full p-2 md:w-3/4 mx-auto text-gray-400" data-aos="fade-up">
          At Wedding Design we offer first class service and plan world-class
          events. With outstanding design we create magical experiences for our
          discerning international clientele. Welcome to to our website - take a
          look around and keep in
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-3/4 mx-auto my-36 bg-pink-50 p-3 rounded-lg">
        <div className="" data-aos="fade-left">
          <div className="h-96 carousel box carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://i.ibb.co/h8PttQP/img5.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://i.ibb.co/CsVFnF9/client-2.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://i.ibb.co/yYTRQXN/blog-3.jpg" />
            </div>
          </div>
        </div>
        <div className="w-2/3" data-aos="fade-right">
          <h4 className="text-3xl w-full mx-auto md:text-6xl text-pink-300 mb-8" data-aos="fade-down">We arrange the perfect weddings</h4>
          <p data-aos="fade-up">
            Daniel, on the other hand, was a musician, playing melodies that
            touched the deepest chords of the heart.
          </p>
          <p data-aos="fade-up">
            His music had a way of weaving emotions into every note, leaving
            listeners enchanted <span className="text-blue">read more ...</span>{" "}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-3xl md:text-5xl text-rose-300 font-semibold text-center my-20" data-aos="fade-down">Feedback from our happy couples
        <hr className="border-2 border-orange-500 w-36 mx-auto my-3 " data-aos="fade-up" />
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="card " data-aos="fade-up" >
            <figure className="px-10 pt-10 box">
              <img
                src="https://i.ibb.co/YRs0CJ5/member4.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-rose-300" data-aos="fade-up" >Jenifar Jaman</h2>
              <p data-aos="fade-up" >
                This allowed us to relax and fully enjoy the celebration,
                knowing that Clint had everything under control.
              </p>
            </div>
          </div>
          <div className="card " data-aos="fade-down">
            <figure className="px-10 pt-10 box">
              <img
                src="https://i.ibb.co/N982sfD/member3.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-rose-300" data-aos="fade-up" >Motin </h2>
              <p data-aos="fade-up" >
                This allowed us to relax and fully enjoy the celebration,
                knowing that Clint had everything under control.
              </p>
            </div>
          </div>
          <div className="card " data-aos="fade-down">
            <figure className="px-10 pt-10 box">
              <img
                src="https://i.ibb.co/NCXV86b/member1.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-rose-300" data-aos="fade-up" >Akter Ullah</h2>
              <p data-aos="fade-up" >
                This allowed us to relax and fully enjoy the celebration,
                knowing that Clint had everything under control.
              </p>
            </div>
          </div>
          <div className="card " data-aos="fade-up">
            <figure className="px-10 pt-10 box">
              <img
                src="https://i.ibb.co/pZfnMYJ/member2.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-rose-300" data-aos="fade-up" >Daisy Khan</h2>
              <p data-aos="fade-up" >
                This allowed us to relax and fully enjoy the celebration,
                knowing that Clint had everything under control.
              </p>
            </div>
          </div>
        </div>
        <Love></Love>
      </div>
      
    </div>
  );
};

export default About;




