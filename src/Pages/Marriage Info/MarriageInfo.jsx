import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from 'sweetalert2'



const MarriageInfo = () => {

    const handleAddInfo = event =>{
        event.preventDefault()
        const form = event.target 
        const bName = form.bName.value 
        const gName = form.gName.value 
        const phone = form.phone.value 
        const address = form.address.value 
        const email = form.email.value 
        const date = form.date.value
        const photo = form.photo.value
        const newInfo = {bName,gName, phone, address,email, date, photo}

        console.log(newInfo)

        fetch('http://localhost:5000/eventInfo',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'SUccess!',
                    text: 'User Info Added SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
               }

        })

    }


  return (
    <div className="">
        <Navbar></Navbar>


      <div className="text-center my-20">
        <h3
          className="text-center text-4xl text-pink-300 font-semibold"
          data-aos="fade-down"
        >
      
          Input Marriage Information
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          One of the hardest things about wedding planning is deciding on your
          vision. You might want some elements
        </p>
      </div>



      <div className="w-3/4 mx-auto bg-rose-50 p-5 shadow-lg mb-20">
      <h3
          className="text-center my-10 mt-10 text-4xl text-pink-300 font-semibold"
          data-aos="fade-down"
        >
      
          Couple Information
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>

        <form onSubmit={handleAddInfo}>
        <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold  " data-aos="fade-up">Boy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Boy Name"
                  name="bName"
                  required
                  className="input input-bordered w-full"
                  data-aos="fade-up"

                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down" >Girl Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Girl Name"
                  name="gName"
                  required
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up">Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down">Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Address"
                  required
                  name="address"
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Date"
                    required
                  name="date"
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up">Couple Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                
                  placeholder="Couple Photo URL"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            name=""
            value="Add Info"
            className="btn btn-block text-white bg-rose-300 hover:bg-rose-400"
            id=""
            data-aos="fade-down"
          />
        </form>
        <div className="my-10">
        <Link to='/coupleInfo'>
        <button className="btn block mx-auto w-full text-white bg-rose-300 hover:bg-rose-400" data-aos="fade-up">See Info</button>
        </Link>
      </div>

      </div>
     
   
    </div>
  );
};

export default MarriageInfo;
