import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

export default function SignUp() {

  const [responseData,setResponseData] = useState();
  const [user,setUser] = useState({
    password:"",
    email:""
    })


const handleSubmit = async () => {

  if( !user.email || !user.password) {
    alert('Fill in all the fields!') 
    return;
  }
try {
  const response = await fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',},
      body: JSON.stringify(user),
  } );
  const data =await response.json()
  if(data.error) {
    alert(data.error)
  } else {
    alert("Login is successfull")
    setResponseData(data)
    // localStorage.setItem("token",data.token) ///////////////////////////////

    //redirect 
  }

  
} catch (error) {
alert(error)
  
}

}


  return ( 

    <div className=" border .border.solid m-20 bg-red-500">
      <div className="m-20 text-5xl text-black">
        <div className="text-white">Sign Up</div>
        <div className=""></div>
      </div>
      <div className=" ">
        
        {/* <div className="flex justify-center mb-10 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <FaUser size={20} className="m-4 "></FaUser>
           <input type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="Username" className="text-bold text-xl outline-none" />
           </label>
        </div> */}

        <div className="flex justify-center mb-10 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <MdEmail size={20} className="m-4 "></MdEmail>
           <input type="text" value={user.email} onChange={(e) => setUser({...user, email:  e.target.value})} placeholder="E-Mail" className="outline-none text-xl" />
           </label>
        </div>

        <div className="flex justify-center mb-6 gap-4  items-center p-4 ">
          <label className="flex justify-center items-center border .border.solid bg-white rounded-xl ">
        <RiLockPasswordFill size={20} className="m-4 "></RiLockPasswordFill>
           <input type="text" value={user.password} onChange={(e) => setUser({...user, password : e.target.value})} placeholder="Password" className="outline-none text-xl" />
           </label>
        </div>
      </div>
      <div className="flex items-center justify-center space-between gap-12 ">
       <button onClick={handleSubmit} className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white">Sign Up</button>
       <button className="border .border.solid border-2 mt-4 mb-10  text-xl p-3 rounded-xl bg-white ">Login</button>
      </div>
    </div>
  
  )}