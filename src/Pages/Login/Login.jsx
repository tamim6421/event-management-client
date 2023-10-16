
import './Login.css'
import photo from '../../assets/undraw_secure_login_pdn4.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import SocialLogin from '../../SocialLogin/SocialLogin';
import toast from 'react-hot-toast';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        if(password.length < 6){
             toast.error('Password mast be at 6 character')
             return
        }
        else if (!/^(?=.*[A-Z])/.test(password)){
            toast.error('One Character should be UPPERCASE')
            return 
          }
         

        signInUser(email, password)
        .then( res =>{

            const user = res.user
            toast.success('User Login Successful')
            e.target.reset()
            console.log(user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
            toast.error(error.message)
        })
    }



  return (
    <div className="container">
     <div className="overly">
    <Navbar></Navbar>
     <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#bbbbbb2d]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Login now!</h1>
            <p className="py-6">
             <img src={photo} alt="" />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleLogin} className="card-body">
              
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>

                     <div className="relative">
               <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered w-full"
                />
                <div className=" absolute right-3 top-3 text-xl">
                <span onClick={()=> setShowPass(!showPass)}>
                  {
                    showPass? <FaEyeSlash></FaEyeSlash> :  <FaEye></FaEye>
                  }
                </span>
                </div>
               </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">
                    Forgot password?
                  </a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                <button className="btn bg-rose-400 text-white btn-error">Login</button>
                <p className='text-white mt-5'>New This Site? Please <Link to='/register'>   <span className='text-rose-300 underline font-semibold'> Register</span> </Link></p>
              </div>
              <div>
                <SocialLogin></SocialLogin>
             </div>
            </form>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Login;