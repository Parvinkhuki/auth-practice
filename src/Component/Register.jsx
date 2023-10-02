import React, { useContext } from 'react';
import Social from './Social';
import { AuthContext } from '../Authprovider';

const Register = () => {

const {signUp} =useContext(AuthContext)
const onSubmit=(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const email= e.target.email.value
    const password= e.target.password.value
    
    if(password.length < 6 ){
      return  alert('Password should be at least 8 characters')
    }

signUp(email, password)
    .then(res=>{
        console.log(email,name, password,res)
        
    })
    .catch(error =>{
      console.log(error.message)
    })
    
}




    return (
        <>
         <div className='max-h-screen w-4/5 mt-36 m-auto  border  text-center bg-pink-100 p-32  '>
         <h1 className='text-4xl font-bold'>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='your name' name='name' className='p-2 border w-3/4 my-4' />
                <br />
                <input type="email" placeholder='Email address' name='email' className='p-2 border w-3/4 my-4' />
                <br />
                <input type="password" placeholder='password' name='password' className='p-2 border w-3/4 my-4' />
                <br />
                <button className='w-3/4 btn btn-secondary ' type="submit">sign up</button>
                <br />
                <hr />
               
            </form> 
            <Social></Social>
        </div>
        </>
    );
};

export default Register;