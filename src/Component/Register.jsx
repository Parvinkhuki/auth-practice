import React from 'react';
import Social from './Social';

const Register = () => {
    return (
        <>
         <div className='max-h-screen w-4/5 mt-36 m-auto  border  text-center bg-pink-100 p-32  '>
         <h1 className='text-4xl font-bold'>Sign Up</h1>
            <form>
                <input type="text" placeholder='your name' name='tname' className='p-2 border w-3/4 my-4' />
                <br />
                <input type="email" placeholder='Email address' name='email' className='p-2 border w-3/4 my-4' />
                <br />
                <input type="password" placeholder='password' name='password' className='p-2 border w-3/4 my-4' />
                <br />
                <button className='w-3/4 btn btn-secondary'>sign up</button>
                <br />
                <hr />
               
            </form> 
            <Social></Social>
        </div>
        </>
    );
};

export default Register;