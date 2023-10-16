import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Events from "../../Components/Events/Events";
import Love from "../../Components/Love/Love";
import Reasons from "../../Components/Reasons/Reasons";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BIYESADI | Home</title>
            </Helmet>

           <Banner></Banner>
           <Events></Events>
           <Services></Services>
           <Reasons></Reasons>
           <Love></Love>
        </div>
    );
};

export default Home;