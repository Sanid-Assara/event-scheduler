import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


export default function SignIn() {

  return (
    <div className=" border .border.solid m-20 bg-red-500">
      <div className="flex gap-4 justify-center items-center m-20 text-5xl text-white ">
        <h1 className="">Log In</h1>
      </div>
      <div className=" ">
        
        <div className="flex justify-center mb-10 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <FaUser size={20} className="m-4 "></FaUser>
           <input type="text" placeholder="Username" className="text-bold text-xl outline-none" />
           </label>
        </div>

        <div className="flex justify-center mb-10 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <RiLockPasswordFill size={20} className="m-4 "></RiLockPasswordFill>
           <input type="text" placeholder="Password" className="outline-none text-xl" />
           </label>
        </div>

    
      </div>
      <div className="flex items-center justify-center space-between gap-12 ">
       <button className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white">Login</button>
       <button className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white ">Sign Up</button>
      </div>
    </div>
  ) 
}
