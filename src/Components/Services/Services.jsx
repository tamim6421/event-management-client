import { useEffect, useState } from "react";
import Service from "./Service";



const Services = () => {
    const [services, setServices] = useState([])

    useEffect( ()=>{
        fetch('/services.json')
        .then( res => res.json())
        .then( user =>setServices(user))
    } ,[])

    // console.log(services)
    return (
        <div>

           
            <div className="my-32">
        <h3 className="text-center text-4xl text-rose-400 font-semibold" data-aos="fade-down">Our Services
            <hr className="border-2 border-orange-500 w-36 mx-auto my-3 " data-aos="fade-up" />
        </h3>
        <p className="text-center mt-7 text-xl w-3/4 mx-auto text-gray-400"  data-aos="fade-up" >
        Event planning companies offer professional event planning services that include event management, event coordination, theming, décor & styling, conferencing, exhibitions & signage, entertainment and venue sourcing.
        </p>
      </div>
      <div className="grid p-2  gap-5 grid-cols-1 lg:grid-cols-2">
        {
            services.map(service => <Service key={service.id} service={service} ></Service> )
        }
      </div>
        </div>
    );
};

export default Services;