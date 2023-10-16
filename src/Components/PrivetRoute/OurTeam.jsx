import Navbar from "../Navbar/Navbar";
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import { Helmet } from "react-helmet-async";

const OurTeam = () => {
  return (
    <div>
      <Helmet>
                <title>
                BIYESADI | Team
                </title>
            </Helmet>
      <Navbar></Navbar>

      <div className="">
        <h3 className=" text-3xl md:text-5xl mt-36 text-pink-300 font-semibold text-center" data-aos="fade-up" >
          Meet Our Awesome Team
          <hr className=" border-2 w-24 mt-2 mb-3 border-orange-500 mx-auto" data-aos="fade-up"  />
        </h3>
        <p className="text-center mt-10 w-3/4 mx-auto" data-aos="fade-up" >
          In Our event Management With a background in design and a passion for
          creating unforgettable experiences, she leads the team with creativity
          and precision. Her attention to detail and knack for turning ideas
          into reality are what set Epic Events apart.
        </p>
        <div>

          <div className=" mt-40 w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 mb-16">

            <div className="card space-y-6   shadow-xl" data-aos="zoom-out-up">
              <figure className="px-10 pt-10 box">
                <img
                  src="https://i.ibb.co/YRs0CJ5/member4.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-rose-300" data-aos="fade-down ">Alexandra </h2>
                <p data-aos="fade-up">Founder & Creative Director</p>
                <p  data-aos="fade-up">
                Alex is the visionary behind Epic Events. With a background in design and a passion for creating unforgettable experiences, she leads the team with creativity and precision. 
                </p>
                <div className="card-actions">
                 <div className="flex gap-4  ">
                   <a href=""><img className="w-9" data-aos="fade-up" src={facebook} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-down" src={insta} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-up" src={twitter} alt="" /></a>
                   
                 </div>
                </div>
              </div>
            </div>

            <div className="card space-y-6 shadow-xl" data-aos="zoom-out-down">
              <figure className="px-10 pt-10 box">
                <img
                  src="https://i.ibb.co/N982sfD/member3.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-rose-300" data-aos="fade-down">Michael </h2>
                <p data-aos="fade-up">Operations Manager</p>
                <p data-aos="fade-up">
                Mike is the backbone of Epic Events, ensuring that every logistical aspect of your event runs seamlessly. With years of experience in . 
                </p>
                <div className="card-actions">
                 <div className="flex gap-4 ">
                 <a href=""><img className="w-9" data-aos="fade-up" src={facebook} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-down" src={insta} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-up" src={twitter} alt="" /></a>
                   
                 </div>
                </div>
              </div>
            </div>

            <div className="card space-y-6 shadow-xl" data-aos="zoom-out-up">
              <figure className="px-10 pt-10 box">
                <img
                  src="https://i.ibb.co/pZfnMYJ/member2.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-rose-300" data-aos="fade-down">Olivia  </h2>
                <p data-aos="fade-up"> Creative Design Lead</p>
                <p data-aos="fade-up">
                Liv is the artistic soul of Epic Events. Her flair for design and an eye for aesthetics ensure that every detail of your event is visually
                </p>
                <div className="card-actions">
                 <div className="flex gap-4 ">
                 <a href=""><img className="w-9" data-aos="fade-up" src={facebook} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-down" src={insta} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-up" src={twitter} alt="" /></a>
                   
                 </div>
                </div>
              </div>
            </div>

                        <div className="card  space-y-6 shadow-xl" data-aos="zoom-out-down">
            <figure className="px-10 pt-10 box">
                <img
                src="https://i.ibb.co/NCXV86b/member1.png"
                alt="Shoes"
                className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-rose-300" data-aos="fade-down">Ryan  </h2>
                <p data-aos="fade-up">Customer Experience Specialist</p>
                <p data-aos="fade-up">
                Ry is the wizard behind the scenes, ensuring that the technical aspects of your event run smoothly. From sound systems to lighting
                </p>
                <div className="card-actions">
                <div className="flex gap-4 ">
                <a href=""><img className="w-9" data-aos="fade-up" src={facebook} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-down" src={insta} alt="" /></a>
                   <a href=""><img className="w-9" data-aos="fade-up" src={twitter} alt="" /></a>
                
                </div>
                </div>
            </div>
            </div>

          </div>
       
         

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
