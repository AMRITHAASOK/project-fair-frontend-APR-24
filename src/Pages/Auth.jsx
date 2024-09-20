import React from 'react'
import AuthImage from '../assets/Auth.jpg'
import { Link } from 'react-router-dom';

function Auth({register}) {
  console.log(register);
  
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
                    <input type="text" className='form-control mb-3' placeholder='Username' />
                
                  }
                  <input type="text" className='form-control mb-3' placeholder='Email' />
                  <input type="text" className='form-control mb-3' placeholder='Password' />
                </form>
                {
                  register ? 
                  <div>
                    <button className='btn btn-outline-info mb-3'>Sign Up</button>
                    <p>Already Registerd? <Link to={'/login'}>Login Here...</Link> </p>
                  </div>
                  :
                    <div>
                       <button className='btn btn-outline-info mb-3'>Sign In</button>
                       <p>New to here? <Link to={'/register'}>Please register Here...</Link> </p>
                    </div>
                }
                
        </div>
      </div>
    </div>
  )
}

export default Auth