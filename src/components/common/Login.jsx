import React, { Fragment, useState } from 'react';
import bgHero from '../assets/bg-sign-in.jpg'

const Login = () => {


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await logIn(email, password)
//       navigate('/')
//     } catch (error) {
//       setError(error.message)
//     }
//   };

  return (
    <Fragment>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={bgHero}
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='text-white p-3 bg-red-400 my-2'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign In
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>New to Netflix?</span>{' '}
                  <p to='/signup'>Sign Up</p>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;