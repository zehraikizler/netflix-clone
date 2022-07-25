import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [notify, setNotify] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            setNotify(toast.success('Giriş Başarılı'))
            setTimeout(() => {
                navigate('/')
            }, "1000")
        } catch (error) {
            setError(toast.error('Giriş Başarısız'))
        }
    }

  return (
    <>
        <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/db47460c-f9ae-4c42-a223-b0f4d3bc9832/TR-tr-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
        <div className='bg-block/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e) => setEmail(e.target.value)} required className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                        <input onChange={(e) => setPassword(e.target.value)} required className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p>
                                <input className='mr-2' type='checkbox' /> Remember me
                            </p>
                            <p>Need Help</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>New to Netflix</span> {' '}
                            <Link to='/signup'>Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default Login