import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SignIn() {

  const [user, setUser] = useState({
    email:"",
    password:""
  });
const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!user.email || !user.password) {
      alert('All fields need to be filled in');
      return;
    };

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    
    const data = await response.json();
    if(data.error) {
      alert(data.error);
    } else {
      alert('You are succesfully logged in!');
      localStorage.setItem("token", data.token);
      navigate('/');
    }
  } catch (error) { 
    alert(error);
  } }

  return (
    

    
    <div id="container" className="bg-white">

      <div className=" text-6xl m-16 p-16 ">
        <div className="flex justify-center">Log In</div>
        <div className="flex justify-center">_______</div>
      </div>

      <div className=" ">
        
        <div className="flex justify-center mb-10 gap-4  items-center  ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <MdEmail size={20} className="m-4 "></MdEmail>
           <input type="email" placeholder="E-Mail" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="text-bold text-xl outline-none" />
           </label>
        </div>

        <div className="flex justify-center mb-10 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <RiLockPasswordFill size={20} className="m-4 "></RiLockPasswordFill>
           <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="outline-none text-xl" />
           </label>
        </div>

      </div>

      <div className="flex items-center justify-center space-between gap-12 ">
       <button onClick={handleSubmit} className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white">Login</button>
       <button onClick={()=> navigate('/signup')} className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white ">Create Account</button>
      </div>

    </div>
    
  ) 
};
