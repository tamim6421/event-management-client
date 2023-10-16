import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";



const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto font-rope text-gray-500">
            
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayout;