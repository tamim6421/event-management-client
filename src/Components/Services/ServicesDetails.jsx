import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const ServicesDetails = () => {
  const [service, setService] = useState({})
    const {id} = useParams()

  useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data =>{
      const details = data.find( item => item.id == id)
      setService(details)

    })
  } ,[id])

  // console.log(service)
  return (
    <div>
       <div>
            <Navbar></Navbar>
           <div>
           <div className="hero min-h-[50vh]" style={{backgroundImage: 'url(https://i.ibb.co/0GDWFLM/pexels-vidal-balielo-jr-12688992.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5  text-3xl md:text-5xl text-pink-300 font-bold "  data-aos="fade-up">Your celebration begins here.</h1>
      <p className="mb-5 text-rose-400"  data-aos="fade-down">Let Wedding Planner help plan your perfect, romantic getaway!</p>
      <button className="btn btn-outline text-white hover:bg-rose-300"  data-aos="fade-down">Enjoy Your Event</button>
    </div>
  </div>
</div>
           </div>
           <div>
            
                 <DetailsCard service={service}></DetailsCard>
            
           </div>
        </div>
    </div>
  );
};

export default ServicesDetails;