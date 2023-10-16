import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";


const EditInformation = () => {
    const usersInfo = useLoaderData()
    const {_id, bName,gName, phone, address,email, date, photo} = usersInfo


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

        // console.log(newInfo)

        fetch(`http://localhost:5000/eventInfo/${_id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Update SuccessFully',
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
      
          Update Marriage Information 
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
      
         Update : {bName} & {gName}
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>

        <form onSubmit={handleAddInfo}>
          <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold  ">Boy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Boy Name"
                  name="bName"
                  defaultValue={bName}
                  className="input input-bordered w-full"
                  data-aos="fade-up"

                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold ">Girl Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Girl Name"
                  name="gName"
                  defaultValue={gName}
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold ">Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="phone"
                  defaultValue={phone}
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold ">Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Address"
                  defaultValue={address}
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
                <span className="label-text text-gray-500 text-lg font-semibold ">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={email}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold ">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Date"
                  defaultValue={date}
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
                <span className="label-text text-gray-500 text-lg font-semibold ">Couple Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
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
            value="Update Info"
            className="btn btn-block text-white bg-rose-300 hover:bg-rose-400"
            id=""
            data-aos="fade-down"
          />
        </form>
       

      </div>
     
   
    </div>
    );
};

export default EditInformation;