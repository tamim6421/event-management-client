import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import InfoCard from "./InfoCard";
import Navbar from "../../Components/Navbar/Navbar";


const CoupleInfo = () => {
    const loadedInfo = useLoaderData()
    const [usersInfo, setUsersInfo] = useState(loadedInfo)

    return (
        <div>
            <Navbar></Navbar>
                <div className="text-center my-10" >
                <h3 className="text-center text-4xl text-pink-300 font-semibold" data-aos="fade-down"> Total Couple : {usersInfo.length}
                <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  /> 
                </h3>
            </div>
            <div>
                {
                    usersInfo?.map(info => <InfoCard
                     key={info._id}
                     info ={info}
                     usersInfo = {usersInfo}
                     setUsersInfo = {setUsersInfo}
                     >
                    </InfoCard> )
                }
            </div>
        </div>
    );
};

export default CoupleInfo;