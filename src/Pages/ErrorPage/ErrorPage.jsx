import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center items-center min-h-screen">
             <div id="error-page">
      <img src="https://i.ibb.co/B4pL1Mh/images.jpg" alt="" />
      <p className="font-semibold text-xl text-rose-400 mt-3">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link to='/'><button className="btn">back to home</button></Link>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;