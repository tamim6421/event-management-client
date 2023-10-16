import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DetailsCard = ({service}) => {
    const navigate = useNavigate()
    // eslint-disable-next-line react/prop-types
    const{name, image, price,short_description,big_description } = service

    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div className="my-36"> 
        <div>
        <h3 className="text-center text-4xl mb-10 text-rose-400 font-semibold" data-aos="fade-down">To Know Our Services Details
            <hr className="border-2 border-orange-500 w-36 mx-auto my-3 " data-aos="fade-up" />
        </h3>
        </div>


 <div className="card flex flex-col p-2 md:flex-row card-side bg-base-100">
  <figure data-aos="zoom-in-down"><img className="w-96 box h-96" src={image} alt="Album"/></figure>
  <div className="card-body" data-aos="zoom-in-up">
    <h2 className="text-3xl text-pink-300 font-bold" data-aos="fade-up">{name}</h2>
    <p className="text-xl font-semibold" data-aos="fade-up"  > {short_description} </p>
    <p className="text-xl font-semibold" data-aos="fade-up">Our Package Price - </p> 
    <p className="font-semibold text-pink-300" data-aos="fade-down"><span>$ {price}  </span> </p>
   <div>
  <button onClick={handleBack}  className="px-3 py-1 rounded-sm bg-rose-300 min-w-min text-white " data-aos="fade-up">Back</button>

   </div>
  </div>
</div>


<div className="w-2/3 mx-auto my-36">
    <h3 className="text-3xl text-center text-pink-300 my-5" data-aos="fade-up">Details
    <hr className="border-2 border-orange-500 w-16 mx-auto my-1 " data-aos="fade-up" />
    </h3>
    <p className="text-center" data-aos="fade-up"> {big_description} </p>
</div>
        </div>
    );
};



export default DetailsCard;