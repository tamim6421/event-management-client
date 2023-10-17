import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";



const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  // console.log(users)

  const handleDelete = id =>{
   
    console.log('delete', id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/users/${id}`,{
               method:"DELETE"
           })

           .then(res => res.json())
           .then(data =>{
               console.log(data)
               if(data.deletedCount > 0){
                 Swal.fire(
                   'Deleted!',
                   'Your file has been deleted.',
                   'success'
                 )
               
               const remaining = users.filter(use => use._id !== id)
               setUsers(remaining)
               }
              
           })
      }
    })





           
   
}


 
  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
      <div className="text-center my-20">
        <h3
          className="text-center text-4xl text-pink-300 font-semibold"
          data-aos="fade-down"
        >
          Our Verified Users
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

      <div>

      <h3
          className="text-center text-3xl mb-10  text-pink-300 font-semibold"
          data-aos="fade-down"
        >
         Total User : {users.length}
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
            </h3>
        <div className=" overflow-x-auto  ">
          <table className="table " >
            {/* head */}
            <thead>
              <tr className="text-xl text-gray-400 font-semibold ">
                <th data-aos="fade-down">N</th>
                <th data-aos="fade-up">Name</th>
                <th data-aos="fade-down">Email</th> 
               
                <th data-aos="fade-up">Last Sign In</th>
                <th data-aos="fade-down">Last Log In</th>
                <th data-aos="fade-up">Action</th>
              </tr>
              
            </thead>
          
            <tbody>

                {
                    users?.map((user, i) =>   <tr key={user._id} className="text-lg">
                    <td>{i+1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.photo}
                              alt="Avatar Tailwind CSS Component"
                              data-aos="fade-up"
                              className=""
                            />
                          </div>
                        </div>
                        <div>
                          <div  data-aos="fade-down" className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td  data-aos="fade-up">{user.email}</td>
                    <td  data-aos="fade-down">{user.lastSignIn}</td>
                    <td  data-aos="fade-up">{user.lastLogIn}</td>
                    <th className="flex">
                    <button  data-aos="fade-up" onClick={() => handleDelete(user._id)} className="btn text-xl text-red-500"><AiFillDelete></AiFillDelete></button>
                    <button  data-aos="fade-down" className="btn text-xl text-green-500"><FaEdit/></button>
                    </th>
                  </tr> )
                }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
