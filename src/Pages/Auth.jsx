import React, { useState } from 'react'
import AuthImage from '../assets/Auth.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/AllApis';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

function Auth({register}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log(register);

  const navigate = useNavigate()

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:"",
  })
  console.log(userData);
  const handleRegister=async()=>{
      const {username,email,password} = userData
      if(!username ||!email|| !password){
        
        toast.error('Please fill the details', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      }
      else{
        //api fetching
        const response = await registerAPI(userData)
        console.log(response);
        if(response.status==200){
          toast.success('Register Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
           
            });
           setTimeout(()=>{
            navigate('/login')
           },6000)
          // setUserData({username:"",email:"",password:""})
        }
        else{
          // alert(response.response.data)
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
           
            });
        }
      }
  }

  const handleLogin=async()=>{
    const {email,password} = userData
    if(!email|| !password){
        
      toast.error('Please fill the details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }else{
      //api fetching
      const response = await loginAPI(userData)
      console.log(response);
      if(response.status==200){
        setIsLoggedIn(true)
        toast.success('Login Successful', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
         
          });
          sessionStorage.setItem("user",JSON.stringify(response.data.user));
          sessionStorage.setItem("token",response.data.token);
          setTimeout(()=>{
            navigate('/');
           },6000)
        // setUserData({username:"",email:"",password:""})
      }
      else{
        // alert(response.response.data)
        toast.warn(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
         
          });
      }
    }
    
  }
  
  return (
    <div className='m-5 px-5'>
      <div className="row border border-1 shadow text-light m-5 rounded">
        <div className="col-6">
          <img src={AuthImage} width={'100%'} alt="" />
        </div>
        <div className="col-6 text-center text-info ">
                <h3 className='mt-5'>Project Fair</h3>
                <h4>Sign {register? "Up" :"In "}</h4>
                <form className='p-5'>
                  {
                    register && 
                    <input onChange={(e)=>setUserData({...userData,username:e.target.value})} type="text" className='form-control mb-3' placeholder='Username' />
                
                  }
                  <input onChange={(e)=>setUserData({...userData,email:e.target.value})} type="text" className='form-control mb-3' placeholder='Email' />
                  <input onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" className='form-control mb-3' placeholder='Password' />
                </form>
                {
                  register ? 
                  <div>
                    <button onClick={handleRegister} className='btn btn-outline-info mb-3'>Sign Up</button>
                    <p>Already Registerd? <Link to={'/login'}>Login Here...</Link> </p>
                  </div>
                  :
                    <div>
                       <button onClick={handleLogin} className='btn btn-info mb-3 '>Sign In 
                        {
                          isLoggedIn &&   <Spinner animation="border" variant="light" className='fs-6 mt-1'/>

                        }
                        </button>
                       <p>New to here? <Link to={'/register'}>Please register Here...</Link> </p>
                    </div>
                }
                
        </div>
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
   
      />
    </div>
  )
}

export default Auth