
import { BsFillCalendarDateFill, BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiTwotoneMail,AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const InfoCard = ({info, usersInfo, setUsersInfo}) => {
    const{_id, bName,gName, phone, address,email, date, photo} = info

    const handleDelete = (id) =>{
        console.log('deleted', id)
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
                        
            fetch(`http://localhost:5000/eventInfo/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())

            .then(data =>{
                console.log(data)
                
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              // eslint-disable-next-line react/prop-types
              const remaining = usersInfo.filter(usr => usr._id !== _id)
              setUsersInfo(remaining)
            
            })
            }
          })
        
    
    }


    return (
        <div>
            
            <div>
            <div className="my-10 ">
          
            <div>
            <div className="hero min-h-[50vh] ">
  <div className="hero-content flex-col lg:flex-row bg-rose-50">
    <img src={photo} className="rounded-lg shadow-2xl max-w-[350px] h-[500px]" data-aos="fade-up" />
    <div className="" data-aos="fade-down">
      <h1 className="text-5xl text-rose-300 font-bold">{bName} <br /> <span className="text-3xl text-rose-600"> & </span> <br /> {gName}</h1>
      <p className="py-6 text-gray-400 ">a strong feeling of warm personal attachment or deep affection, such as for a parent, child, friend, or pet:
He bent and kissed his newborn daughter on the brow, his heart full of love and gratitude.</p>
      <div className="space-y-3">
      <p className=" text-gray-400 text-xl flex gap-3 items-center font-semibold " data-aos="fade-down"><BsFillCalendarDateFill></BsFillCalendarDateFill> : {date} </p>
        <p className=" text-gray-400 text-xl font-semibold flex gap-3 items-center " data-aos="fade-up"><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> : {phone} </p>
        <p className=" text-gray-400 text-xl font-semibold flex gap-3 items-center" data-aos="fade-down"><AiTwotoneMail></AiTwotoneMail> : {email} </p>
        <p className=" text-gray-400 text-xl font-semibold flex gap-3 items-center" data-aos="fade-down"> <FaAddressBook></FaAddressBook> : {address} </p>
      </div>

      <button onClick={() =>handleDelete(_id)} className="btn bg-rose-200 mt-5" data-aos="fade-down" ><AiFillDelete className="text-red-500 text-3xl"></AiFillDelete></button>

    <Link to={`/editInfo/${_id}`}>
    <button className="btn bg-rose-200" data-aos="fade-up" ><AiFillEdit className="text-green-600 text-3xl"></AiFillEdit></button>
    </Link>

    </div>
  </div>
</div>
            </div>
        </div>
            </div>

        
        </div>
    );
};

export default InfoCard;